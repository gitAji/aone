import https from 'https';

const WORDPRESS_API_URL = 'https://blog.aone.no/wp-json/wp/v2';

// Server-only counterpart to wordpress.js's fetchPosts/fetchAllPostSlugs/
// fetchPostBySlug. blog.aone.no runs on an expired TLS certificate --
// api/wp-proxy/route.js already works around this for client-side requests
// with a rejectUnauthorized:false https agent, but blog/page.js,
// blog/[slug]/page.js and sitemap.js call WordPress at `next build` time
// (static generation), where there's no running server yet to proxy
// through. wordpress.js's plain fetch() rejected on the bad cert there,
// so every build baked in an empty post list. This file applies the same
// SSL bypass directly for those server call sites instead.
function fetchWpJson(endpoint, params = '', timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const url = `${WORDPRESS_API_URL}/${endpoint}${params ? `?${params}` : ''}`;
    const req = https.get(url, {
      rejectUnauthorized: false,
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
    return { posts: data, totalPages, error: null };
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
    if (data.length > 0) return { post: data[0], error: null };
    return { post: null, error: 'Post not found' };
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    return { post: null, error: error.message };
  }
}
