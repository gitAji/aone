import http from 'http';

// blog.aone.no does not accept connections on 443 at all (not merely an
// expired cert -- a bypassed-verification TLS connection to it still never
// completes). Someone already discovered this: NEXT_PUBLIC_WP_API_URL is
// configured on the live site as `http://blog.aone.no/...`, not https.
// Honor that, falling back to the same known-working http URL if the env
// var is ever unset (e.g. a fresh environment/local dev).
const WORDPRESS_API_URL = (process.env.NEXT_PUBLIC_WP_API_URL || 'http://blog.aone.no/wp-json/wp/v2').replace(/\/$/, '');

// Shared with api/wp-proxy/route.js (the client-side path) and
// api/image-proxy/route.js, which apply this same rewrite/normalization.
// WordPress's own stored upload URLs are https://blog.aone.no/... (its
// siteurl setting), but that host doesn't serve 443 -- every image URL
// anywhere in a WordPress response has to be rewritten to go through
// /api/image-proxy (which itself fetches the image over http) before it
// ever reaches a component.
export function rewriteWpImageUrls(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(rewriteWpImageUrls);

  const newObj = {};
  for (const key in obj) {
    let value = obj[key];
    if (typeof value === 'string' && value.includes('blog.aone.no/wp-content/uploads/')) {
      const trimmed = value.trim();
      const isPureUrl = !trimmed.includes(' ') && !trimmed.includes('<') && !trimmed.includes('>');

      if (isPureUrl) {
        const cleanUrl = trimmed.replace(/\\\//g, '/');
        value = `/api/image-proxy?url=${encodeURIComponent(cleanUrl)}`;
      } else {
        value = value.replace(/(https?:\/\/blog\.aone\.no\/wp-content\/uploads\/[^\s"'>]+)/g, (match) => {
          const cleanUrl = match.replace(/\\\//g, '/').trim();
          return `/api/image-proxy?url=${encodeURIComponent(cleanUrl)}`;
        });
      }
    } else if (typeof value === 'object' && value !== null) {
      value = rewriteWpImageUrls(value);
    }
    newObj[key] = value;
  }
  return newObj;
}

// Server-only counterpart to wordpress.js's fetchPosts/fetchAllPostSlugs/
// fetchPostBySlug. blog/page.js, blog/[slug]/page.js and sitemap.js call
// WordPress at `next build` time (static generation), where there's no
// running server yet to proxy through -- wordpress.js's plain fetch()
// against the https:// URL failed outright there (connection never
// completes on that host's 443), so every build baked in an empty post
// list. This file fetches over http instead, same as the proxy route.
function fetchWpJson(endpoint, params = '', timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const url = `${WORDPRESS_API_URL}/${endpoint}${params ? `?${params}` : ''}`;
    const req = http.get(url, {
      headers: { 'Accept': 'application/json', 'User-Agent': 'Aone-WP-Server/1.0' },
      timeout: timeoutMs,
    }, (res) => {
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          resolve({ data: JSON.parse(rawData), headers: res.headers, status: res.statusCode });
        } catch (e) {
          reject(new Error('Failed to parse WP JSON'));
        }
      });
    });
    req.on('timeout', () => req.destroy(new Error('WordPress request timed out')));
    req.on('error', reject);
  });
}

export async function fetchPosts(perPage = 9, page = 1) {
  try {
    const { data, headers, status } = await fetchWpJson('posts', `per_page=${perPage}&page=${page}&orderby=date&_embed=true`);
    if (status >= 400) throw new Error(`HTTP error! status: ${status}`);
    const totalPages = parseInt(headers['x-wp-totalpages'] || '1', 10);
    return { posts: rewriteWpImageUrls(data), totalPages, error: null };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [], totalPages: 0, error: error.message };
  }
}

export async function fetchAllPostSlugs() {
  const perPage = 100;
  let page = 1;
  let totalPages = 1;
  const posts = [];

  try {
    do {
      const { data, headers, status } = await fetchWpJson('posts', `per_page=${perPage}&page=${page}&_fields=slug,modified`);
      if (status >= 400) break;
      totalPages = parseInt(headers['x-wp-totalpages'] || '1', 10);
      posts.push(...data);
      page++;
    } while (page <= totalPages);
  } catch (error) {
    console.error('Error fetching all post slugs:', error);
  }

  return posts;
}

export async function fetchPostBySlug(slug) {
  try {
    const { data, status } = await fetchWpJson('posts', `slug=${slug}&_embed=true`);
    if (status >= 400) throw new Error(`HTTP error! status: ${status}`);
    if (data.length > 0) return { post: rewriteWpImageUrls(data[0]), error: null };
    return { post: null, error: 'Post not found' };
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    return { post: null, error: error.message };
  }
}
