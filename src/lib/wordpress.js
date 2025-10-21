const WORDPRESS_API_URL = 'https://blog.aone.no/wp-json/wp/v2';

export async function fetchPosts(perPage = 9, page = 1) {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?per_page=${perPage}&page=${page}&orderby=date&_embed`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    const data = await response.json();
    return { posts: data, totalPages };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [], totalPages: 1 };
  }
}

export async function fetchPostBySlug(slug) {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    return null;
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
