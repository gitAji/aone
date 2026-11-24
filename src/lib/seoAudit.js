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

function check(id, label, status, detail) {
  return { id, label, status, detail };
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
    } else {
      checks.push(check('robots', 'robots.txt', 'warn', `robots.txt returned HTTP ${res.status}.`));
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

  const structuredDataCount = $('script[type="application/ld+json"]').length;
  checks.push(
    structuredDataCount > 0
      ? check('structuredData', 'Structured data (JSON-LD)', 'pass', `${structuredDataCount} JSON-LD block(s) found.`)
      : check(
          'structuredData',
          'Structured data (JSON-LD)',
          'warn',
          'No JSON-LD structured data found -- helps search engines and AI assistants understand the page.'
        )
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

export function buildReportEmailHtml(report) {
  const { url, overallScore, onPageChecks, performance } = report;

  const rows = onPageChecks
    .map(
      (c) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;font-weight:700;color:#0f172a;">${c.label}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;color:${STATUS_COLOR[c.status]};font-weight:700;white-space:nowrap;">${STATUS_LABEL[c.status]}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #eee;color:#475569;">${c.detail}</td>
        </tr>`
    )
    .join('');

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
    <h1 style="font-size:22px;margin:0 0 4px;">Your Free SEO Audit Report</h1>
    <p style="color:#475569;margin:0 0 24px;">${url}</p>
    <div style="background:#0f172a;color:#fff;border-radius:16px;padding:20px;text-align:center;margin-bottom:24px;">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:2px;opacity:0.7;">Overall Score</div>
      <div style="font-size:40px;font-weight:900;">${overallScore ?? 'N/A'}<span style="font-size:18px;">/100</span></div>
    </div>
    <h2 style="font-size:16px;color:#0f172a;margin:0 0 12px;">On-Page SEO Checks</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tbody>${rows}</tbody>
    </table>
    ${perfSection}
    <p style="margin-top:28px;color:#475569;font-size:13px;">
      Want help fixing what's flagged above? <a href="https://aone.no/request-quote" style="color:#e11d48;font-weight:700;">Request a free quote</a> and we'll take it from here.
    </p>
  </div>`;
}
