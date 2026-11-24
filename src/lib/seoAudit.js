import * as cheerio from 'cheerio';

const FETCH_TIMEOUT_MS = 9000;
const SUPPORT_FETCH_TIMEOUT_MS = 5000;
const LINK_CHECK_TIMEOUT_MS = 4000;
const PSI_TIMEOUT_MS = 13000;
const MAX_LINKS_TO_CHECK = 6;

async function fetchWithTimeout(url, options = {}, timeoutMs = FETCH_TIMEOUT_MS) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal, redirect: 'follow' });
  } finally {
    clearTimeout(timer);
  }
}

const FIXES = {
  https: 'Move your site to HTTPS by installing an SSL certificate (most hosts offer this for free) and redirecting all HTTP traffic to HTTPS.',
  title: 'Rewrite the title tag to 50-60 characters, including your main keyword and brand name near the front.',
  metaDescription: 'Write a meta description of 120-158 characters that summarizes the page and includes a reason to click -- this directly affects click-through rate from search results.',
  canonical: 'Add a <link rel="canonical"> tag pointing to the preferred URL for this page to avoid duplicate-content issues.',
  viewport: 'Add <meta name="viewport" content="width=device-width, initial-scale=1"> to the page head so it renders correctly on mobile.',
  h1: 'Use exactly one H1 heading per page that clearly states the page\'s main topic -- use H2/H3 for subheadings.',
  imageAlt: 'Add descriptive alt text to every image -- it helps search engines understand your content and makes the page accessible to screen readers.',
  lang: 'Add a lang attribute to the <html> tag (e.g. lang="en" or lang="no") so search engines and screen readers know the page\'s language.',
  openGraph: 'Add og:title, og:description and og:image meta tags so links to this page look right when shared on social media.',
  robots: 'Add a robots.txt file at your domain root to guide search engine crawlers.',
  sitemap: 'Add an XML sitemap and reference it in robots.txt so search engines can discover every page on the site.',
  brokenLinks: 'Fix or remove the broken internal links so visitors and search engines don\'t hit dead ends.',
  structuredData: 'Add JSON-LD structured data (Organization, LocalBusiness, Article, etc.) -- this is the main signal AI assistants (ChatGPT, Claude, Perplexity, Google AI Overviews) use to understand and cite your content.',
  faqSchema: 'Add FAQPage structured data to a page with common questions and direct answers -- this is one of the strongest signals for getting cited in AI-generated answers.',
  aiCrawlers: 'Remove the Disallow rules blocking AI crawlers in robots.txt (unless blocking them is intentional) -- otherwise tools like ChatGPT, Claude and Perplexity can\'t read your site to cite it.',
  llmsTxt: 'Add an llms.txt file at your domain root -- an emerging standard that gives AI assistants a clean, curated summary of your site, similar to how robots.txt and sitemap.xml work for search engines.',
};

function check(id, label, status, detail, category = 'seo') {
  return { id, label, status, detail, category, fix: status === 'pass' ? null : FIXES[id] || null };
}

// Well-known AI crawler user-agents. A site blocking these (intentionally
// or by an accidental `Disallow: /` left over from staging) can't be read
// or cited by ChatGPT, Claude, Perplexity and similar AI-search tools --
// a GEO (Generative Engine Optimization) concern distinct from classic SEO.
const AI_BOTS = [
  'GPTBot', 'ChatGPT-User', 'Google-Extended', 'Claude-Web', 'ClaudeBot',
  'anthropic-ai', 'PerplexityBot', 'CCBot', 'Bytespider', 'Applebot-Extended',
];

function parseBlockedAiCrawlers(robotsText) {
  const lines = robotsText.split(/\r?\n/);
  let currentAgents = [];
  let groupHasDirective = false;
  const blocked = new Set();

  for (const rawLine of lines) {
    const line = rawLine.split('#')[0].trim();
    if (!line) {
      currentAgents = [];
      groupHasDirective = false;
      continue;
    }
    const uaMatch = line.match(/^user-agent:\s*(.+)$/i);
    if (uaMatch) {
      if (groupHasDirective) {
        currentAgents = [];
        groupHasDirective = false;
      }
      currentAgents.push(uaMatch[1].trim());
      continue;
    }
    const disallowMatch = line.match(/^disallow:\s*(.*)$/i);
    if (disallowMatch) {
      groupHasDirective = true;
      if (disallowMatch[1].trim() === '/') {
        currentAgents.forEach((agent) => {
          if (agent === '*') {
            AI_BOTS.forEach((bot) => blocked.add(bot));
          } else {
            const hit = AI_BOTS.find((bot) => bot.toLowerCase() === agent.toLowerCase());
            if (hit) blocked.add(hit);
          }
        });
      }
      continue;
    }
    groupHasDirective = true;
  }

  return Array.from(blocked);
}

async function checkRobotsAndSitemap(origin) {
  const checks = [];
  let sitemapUrlFromRobots = null;

  try {
    const res = await fetchWithTimeout(`${origin}/robots.txt`, {}, SUPPORT_FETCH_TIMEOUT_MS);
    if (res.ok) {
      const text = await res.text();
      checks.push(check('robots', 'robots.txt', 'pass', 'robots.txt is reachable.'));
      const match = text.match(/sitemap:\s*(\S+)/i);
      if (match) sitemapUrlFromRobots = match[1];

      const blockedBots = parseBlockedAiCrawlers(text);
      checks.push(
        blockedBots.length === 0
          ? check('aiCrawlers', 'AI crawler access', 'pass', 'No major AI crawlers (ChatGPT, Claude, Perplexity, etc.) are blocked in robots.txt.', 'geo')
          : check('aiCrawlers', 'AI crawler access', 'warn', `Blocking: ${blockedBots.join(', ')}.`, 'geo')
      );
    } else {
      checks.push(check('robots', 'robots.txt', 'warn', `robots.txt returned HTTP ${res.status}.`));
      checks.push(check('aiCrawlers', 'AI crawler access', 'pass', 'No robots.txt found, so no AI crawlers are blocked by default.', 'geo'));
    }
  } catch {
    checks.push(check('robots', 'robots.txt', 'warn', 'robots.txt could not be reached.'));
  }

  const sitemapUrl = sitemapUrlFromRobots || `${origin}/sitemap.xml`;
  try {
    const res = await fetchWithTimeout(sitemapUrl, {}, SUPPORT_FETCH_TIMEOUT_MS);
    checks.push(
      res.ok
        ? check('sitemap', 'XML sitemap', 'pass', `Found at ${sitemapUrl}`)
        : check('sitemap', 'XML sitemap', 'warn', `No sitemap found at ${sitemapUrl} (HTTP ${res.status}).`)
    );
  } catch {
    checks.push(check('sitemap', 'XML sitemap', 'warn', 'Sitemap could not be reached.'));
  }

  try {
    const res = await fetchWithTimeout(`${origin}/llms.txt`, {}, SUPPORT_FETCH_TIMEOUT_MS);
    checks.push(
      res.ok
        ? check('llmsTxt', 'llms.txt (AI summary file)', 'pass', 'Found -- gives AI assistants a curated summary of the site.', 'geo')
        : check('llmsTxt', 'llms.txt (AI summary file)', 'warn', 'Not found. This is a new, still-rare standard -- having one is a differentiator, not yet an expectation.', 'geo')
    );
  } catch {
    checks.push(check('llmsTxt', 'llms.txt (AI summary file)', 'warn', 'Could not be reached.', 'geo'));
  }

  return checks;
}

async function checkBrokenLinks($, origin) {
  const hrefs = new Set();
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    try {
      const abs = new URL(href, origin);
      if (abs.origin === origin) hrefs.add(abs.href);
    } catch {
      // ignore malformed hrefs (mailto:, javascript:, etc. that fail URL parsing against origin)
    }
  });

  const sample = Array.from(hrefs).slice(0, MAX_LINKS_TO_CHECK);
  if (sample.length === 0) {
    return [check('brokenLinks', 'Internal links', 'warn', 'No internal links found to check.')];
  }

  const results = await Promise.allSettled(
    sample.map((href) => fetchWithTimeout(href, { method: 'HEAD' }, LINK_CHECK_TIMEOUT_MS))
  );
  const brokenCount = results.filter((r) => r.status === 'rejected' || (r.value && r.value.status >= 400)).length;

  return brokenCount === 0
    ? [check('brokenLinks', 'Internal links', 'pass', `Checked ${sample.length} internal links, no issues found.`)]
    : [check('brokenLinks', 'Internal links', 'warn', `${brokenCount} of ${sample.length} sampled internal links returned an error.`)];
}

export async function runOnPageAudit(targetUrl) {
  const checks = [];
  const urlObj = new URL(targetUrl);
  const origin = urlObj.origin;

  checks.push(
    urlObj.protocol === 'https:'
      ? check('https', 'HTTPS', 'pass', 'Site is served over HTTPS.')
      : check('https', 'HTTPS', 'fail', 'Site is not served over HTTPS.')
  );

  let html;
  try {
    const res = await fetchWithTimeout(targetUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AoneSEOAudit/1.0; +https://aone.no)' },
    });
    if (!res.ok) throw new Error(`Site responded with HTTP ${res.status}`);
    html = await res.text();
  } catch (err) {
    throw new Error(`Could not fetch the website (${err.message || 'unknown error'}). Please double-check the URL.`);
  }

  const $ = cheerio.load(html);

  const title = $('title').first().text().trim();
  if (!title) {
    checks.push(check('title', 'Title tag', 'fail', 'No <title> tag found.'));
  } else if (title.length < 30 || title.length > 65) {
    checks.push(check('title', 'Title tag', 'warn', `Title is ${title.length} characters (ideal: 50-60). "${title}"`));
  } else {
    checks.push(check('title', 'Title tag', 'pass', `"${title}" (${title.length} characters)`));
  }

  const metaDesc = $('meta[name="description"]').attr('content')?.trim() || '';
  if (!metaDesc) {
    checks.push(check('metaDescription', 'Meta description', 'fail', 'No meta description found.'));
  } else if (metaDesc.length < 110 || metaDesc.length > 165) {
    checks.push(check('metaDescription', 'Meta description', 'warn', `Description is ${metaDesc.length} characters (ideal: 120-158).`));
  } else {
    checks.push(check('metaDescription', 'Meta description', 'pass', `${metaDesc.length} characters.`));
  }

  const canonical = $('link[rel="canonical"]').attr('href');
  checks.push(
    canonical
      ? check('canonical', 'Canonical tag', 'pass', `Points to ${canonical}`)
      : check('canonical', 'Canonical tag', 'warn', 'No canonical tag found.')
  );

  const viewport = $('meta[name="viewport"]').attr('content');
  checks.push(
    viewport
      ? check('viewport', 'Mobile viewport tag', 'pass', 'Responsive viewport meta tag present.')
      : check('viewport', 'Mobile viewport tag', 'fail', 'No viewport meta tag -- the page may not be mobile-friendly.')
  );

  const h1Count = $('h1').length;
  if (h1Count === 0) {
    checks.push(check('h1', 'H1 heading', 'fail', 'No H1 heading found on the page.'));
  } else if (h1Count > 1) {
    checks.push(check('h1', 'H1 heading', 'warn', `${h1Count} H1 headings found -- ideally there should be exactly one.`));
  } else {
    checks.push(check('h1', 'H1 heading', 'pass', 'Exactly one H1 heading found.'));
  }

  const images = $('img');
  const missingAlt = images.filter((_, el) => !$(el).attr('alt')?.trim()).length;
  if (images.length === 0) {
    checks.push(check('imageAlt', 'Image alt text', 'pass', 'No images found on the page.'));
  } else if (missingAlt === 0) {
    checks.push(check('imageAlt', 'Image alt text', 'pass', `All ${images.length} images have alt text.`));
  } else {
    checks.push(
      check(
        'imageAlt',
        'Image alt text',
        missingAlt === images.length ? 'fail' : 'warn',
        `${missingAlt} of ${images.length} images are missing alt text.`
      )
    );
  }

  const lang = $('html').attr('lang');
  checks.push(
    lang
      ? check('lang', 'Language attribute', 'pass', `Declared as "${lang}".`)
      : check('lang', 'Language attribute', 'warn', 'No lang attribute on the <html> tag.')
  );

  const ogTitle = $('meta[property="og:title"]').attr('content');
  const ogDesc = $('meta[property="og:description"]').attr('content');
  const ogImage = $('meta[property="og:image"]').attr('content');
  const ogCount = [ogTitle, ogDesc, ogImage].filter(Boolean).length;
  checks.push(
    ogCount === 3
      ? check('openGraph', 'Open Graph tags', 'pass', 'og:title, og:description and og:image are all present.')
      : check(
          'openGraph',
          'Open Graph tags',
          ogCount === 0 ? 'fail' : 'warn',
          `${ogCount} of 3 key Open Graph tags present -- affects link previews on social media.`
        )
  );

  const jsonLdBlocks = $('script[type="application/ld+json"]');
  const structuredDataCount = jsonLdBlocks.length;
  checks.push(
    structuredDataCount > 0
      ? check(
          'structuredData',
          'Structured data (JSON-LD)',
          'pass',
          `${structuredDataCount} JSON-LD block(s) found -- the main signal AI assistants use to read and cite your content.`,
          'geo'
        )
      : check(
          'structuredData',
          'Structured data (JSON-LD)',
          'warn',
          'No JSON-LD structured data found -- this is the main signal AI assistants (ChatGPT, Claude, Perplexity) use to understand and cite a page.',
          'geo'
        )
  );

  // Checked separately from generic JSON-LD presence -- FAQPage/Question
  // schema specifically is one of the strongest signals for being quoted
  // directly in AI-generated answers, not just a generic SEO rich-snippet.
  let hasFaqSchema = false;
  jsonLdBlocks.each((_, el) => {
    try {
      const data = JSON.parse($(el).contents().text());
      const nodes = Array.isArray(data) ? data : [data, ...(data['@graph'] || [])];
      if (nodes.some((node) => {
        const type = node?.['@type'];
        const types = Array.isArray(type) ? type : [type];
        return types.includes('FAQPage') || types.includes('Question');
      })) {
        hasFaqSchema = true;
      }
    } catch {
      // malformed JSON-LD -- ignore rather than fail the whole audit over it
    }
  });
  checks.push(
    hasFaqSchema
      ? check('faqSchema', 'FAQ / Q&A structured data', 'pass', 'FAQPage or Question schema found.', 'geo')
      : check('faqSchema', 'FAQ / Q&A structured data', 'warn', 'No FAQPage or Question schema found.', 'geo')
  );

  const [supportChecks, brokenLinkChecks] = await Promise.all([
    checkRobotsAndSitemap(origin),
    checkBrokenLinks($, origin),
  ]);

  return [...checks, ...supportChecks, ...brokenLinkChecks];
}

export async function runPageSpeedAudit(targetUrl) {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const params = new URLSearchParams({ url: targetUrl, strategy: 'mobile' });
  ['PERFORMANCE', 'SEO', 'ACCESSIBILITY', 'BEST_PRACTICES'].forEach((c) => params.append('category', c));
  if (apiKey) params.set('key', apiKey);

  try {
    const res = await fetchWithTimeout(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params.toString()}`,
      {},
      PSI_TIMEOUT_MS
    );
    if (!res.ok) {
      return { available: false, reason: `PageSpeed Insights returned HTTP ${res.status}.` };
    }
    const data = await res.json();
    const categories = data?.lighthouseResult?.categories || {};
    const audits = data?.lighthouseResult?.audits || {};
    const pct = (c) => (categories[c]?.score != null ? Math.round(categories[c].score * 100) : null);

    return {
      available: true,
      scores: {
        performance: pct('performance'),
        seo: pct('seo'),
        accessibility: pct('accessibility'),
        bestPractices: pct('best-practices'),
      },
      vitals: {
        lcp: audits['largest-contentful-paint']?.displayValue || null,
        cls: audits['cumulative-layout-shift']?.displayValue || null,
        tbt: audits['total-blocking-time']?.displayValue || null,
        speedIndex: audits['speed-index']?.displayValue || null,
      },
    };
  } catch {
    return { available: false, reason: 'PageSpeed Insights timed out or is temporarily unavailable right now.' };
  }
}

export function computeOverallScore(onPageChecks, psi) {
  const weights = { pass: 1, warn: 0.5, fail: 0 };
  const onPageScore = onPageChecks.length
    ? Math.round((onPageChecks.reduce((sum, c) => sum + weights[c.status], 0) / onPageChecks.length) * 100)
    : null;

  if (psi?.available && psi.scores?.performance != null) {
    const parts = [onPageScore, psi.scores.performance, psi.scores.seo].filter((n) => n != null);
    return Math.round(parts.reduce((a, b) => a + b, 0) / parts.length);
  }
  return onPageScore;
}

const STATUS_LABEL = { pass: 'Pass', warn: 'Needs attention', fail: 'Failed' };
const STATUS_COLOR = { pass: '#16a34a', warn: '#d97706', fail: '#dc2626' };

const SEO_CARE_PITCH_HTML = `
  <div style="margin-top:28px;background:linear-gradient(135deg,#fff1f2,#fffbeb);border:1px solid #fecdd3;border-radius:16px;padding:20px;">
    <h2 style="font-size:16px;color:#0f172a;margin:0 0 6px;">Want this handled for you, every month?</h2>
    <p style="color:#475569;font-size:13px;margin:0 0 14px;">
      <strong>SEO Care</strong> is our ongoing plan: we re-scan your site every month, fix what's flagged, and send you a progress
      report showing your score improving over time. Billed monthly, <strong>no fixed binding period -- cancel anytime</strong>.
    </p>
    <a href="https://aone.no/request-quote" style="display:inline-block;background:#e11d48;color:#fff;font-weight:700;font-size:13px;padding:10px 20px;border-radius:999px;text-decoration:none;">
      Ask about SEO Care
    </a>
  </div>`;

function renderCheckRows(items, detailed) {
  return items
    .map(
      (c) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:700;color:#0f172a;">${c.label}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;color:${STATUS_COLOR[c.status]};font-weight:700;white-space:nowrap;">${STATUS_LABEL[c.status]}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#475569;">${c.detail}</td>
          ${detailed ? `<td style="padding:10px 12px;border-bottom:1px solid #eee;color:#0f172a;">${c.fix || '—'}</td>` : ''}
        </tr>`
    )
    .join('');
}

function renderCheckTable(title, items, detailed) {
  return `
    <h2 style="font-size:16px;color:#0f172a;margin:24px 0 12px;">${title}</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${detailed ? `<thead><tr><th align="left" style="padding:0 12px 8px;font-size:11px;text-transform:uppercase;color:#94a3b8;">Check</th><th align="left" style="padding:0 12px 8px;font-size:11px;text-transform:uppercase;color:#94a3b8;">Status</th><th align="left" style="padding:0 12px 8px;font-size:11px;text-transform:uppercase;color:#94a3b8;">Detail</th><th align="left" style="padding:0 12px 8px;font-size:11px;text-transform:uppercase;color:#94a3b8;">How to fix it</th></tr></thead>` : ''}
      <tbody>${renderCheckRows(items, detailed)}</tbody>
    </table>`;
}

export function buildReportEmailHtml(report, { tier = 'summary' } = {}) {
  const { url, overallScore, onPageChecks, performance } = report;
  const detailed = tier === 'detailed';
  const seoChecks = onPageChecks.filter((c) => c.category !== 'geo');
  const geoChecks = onPageChecks.filter((c) => c.category === 'geo');

  const perfSection = performance?.available
    ? `
      <h2 style="font-size:16px;color:#0f172a;margin:28px 0 12px;">Performance (mobile, via Google PageSpeed Insights)</h2>
      <p style="color:#475569;margin:0 0 12px;">
        Performance: <strong>${performance.scores.performance ?? 'N/A'}</strong> &middot;
        SEO: <strong>${performance.scores.seo ?? 'N/A'}</strong> &middot;
        Accessibility: <strong>${performance.scores.accessibility ?? 'N/A'}</strong> &middot;
        Best Practices: <strong>${performance.scores.bestPractices ?? 'N/A'}</strong>
      </p>
      <p style="color:#475569;margin:0;">
        LCP: <strong>${performance.vitals.lcp ?? 'N/A'}</strong> &middot;
        CLS: <strong>${performance.vitals.cls ?? 'N/A'}</strong> &middot;
        Total Blocking Time: <strong>${performance.vitals.tbt ?? 'N/A'}</strong>
      </p>`
    : `<p style="color:#94a3b8;font-style:italic;">Performance data was unavailable for this scan${performance?.reason ? ` (${performance.reason})` : ''}.</p>`;

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#0f172a;">
    <h1 style="font-size:22px;margin:0 0 4px;">Your Free SEO &amp; GEO Audit Report</h1>
    <p style="color:#475569;margin:0 0 24px;">${url}</p>
    <div style="background:#0f172a;color:#fff;border-radius:16px;padding:20px;text-align:center;margin-bottom:24px;">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:2px;opacity:0.7;">Overall Score</div>
      <div style="font-size:40px;font-weight:900;">${overallScore ?? 'N/A'}<span style="font-size:18px;">/100</span></div>
    </div>
    ${renderCheckTable(detailed ? 'Your Full Action Plan -- On-Page SEO' : 'On-Page SEO Checks', seoChecks, detailed)}
    ${renderCheckTable('GEO / AI Search Readiness (ChatGPT, Claude, Perplexity)', geoChecks, detailed)}
    ${perfSection}
    <p style="margin-top:28px;color:#475569;font-size:13px;">
      Want help fixing what's flagged above? <a href="https://aone.no/request-quote" style="color:#e11d48;font-weight:700;">Request a free quote</a> and we'll take it from here.
    </p>
    ${detailed ? SEO_CARE_PITCH_HTML : ''}
  </div>`;
}
