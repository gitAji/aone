const WORDPRESS_API_URL = 'https://blog.aone.no/wp-json/wp/v2';

// Helper to get featured image from a post object
export function getFeaturedImage(post) {
  if (!post) return '/images/placeholders/project1.jpeg';

  // 1. Try _embedded featured media
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  if (featuredMedia?.source_url) {
    return featuredMedia.source_url;
  }

  // 2. Try media details from _embedded if available
  if (featuredMedia?.media_details?.sizes?.full?.source_url) {
    return featuredMedia.media_details.sizes.full.source_url;
  }

  // 3. Try Yoast SEO image
  if (post.yoast_head_json?.og_image?.[0]?.url) {
    return post.yoast_head_json.og_image[0].url;
  }

  // 4. Try og_image directly if it's there
  if (post.og_image?.[0]?.url) {
    return post.og_image[0].url;
  }

  // 5. Fallback to placeholder
  return '/images/placeholders/project1.jpeg';
}

// Use proxy in browser to avoid SSL/CORS issues
function getApiUrl(endpoint, params = '') {
  if (typeof window !== 'undefined') {
    // Client-side: use proxy
    return `/api/wp-proxy?endpoint=${endpoint}${params ? '&' + params : ''}`;
  }
  // Server-side: direct call
  return `${WORDPRESS_API_URL}/${endpoint}${params ? '?' + params : ''}`;
}

export async function fetchPosts(perPage = 9, page = 1) {
  try {
    const url = getApiUrl('posts', `per_page=${perPage}&page=${page}&orderby=date&_embed=true`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    const data = await response.json();
    return { posts: data, totalPages, error: null };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [], totalPages: 0, error: error.message };
  }
}

export async function fetchPostBySlug(slug) {
  try {
    const url = getApiUrl('posts', `slug=${slug}&_embed=true`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data.length > 0) return { post: data[0], error: null };

    return { post: null, error: 'Post not found' };
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    return { post: null, error: error.message };
  }
}

// Placeholder for fetching menu items
export async function fetchMenuItems() {
  // Implement logic to fetch menu items from WordPress (e.g., custom post type or ACF fields)
  console.log('Fetching menu items...');
  return [];
}

// Placeholder for fetching homepage sliders
export async function fetchHomepageSliders() {
  // Implement logic to fetch homepage slider data
  console.log('Fetching homepage sliders...');
  return [];
}

// Placeholder for fetching gift cards
export async function fetchGiftCards() {
  // Implement logic to fetch gift card products from WooCommerce
  console.log('Fetching gift cards...');
  return [];
}

// Placeholder for handling table bookings
export async function handleTableBooking(bookingData) {
  // Implement logic to submit table booking data to a WordPress booking plugin API
  console.log('Handling table booking:', bookingData);
  return { success: true, message: 'Booking received' };
}

// Fetch homepage popup content
export async function fetchPopupContent() {
  try {
    const url = getApiUrl('posts', 'slug=homepage-popup&_embed=true');
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();

    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching popup content:', error);
    return null;
  }
}
