import { mockPosts } from '../app/data/blog';

const WORDPRESS_API_URL = 'http://blog.aone.no/wp-json/wp/v2';

export async function fetchPosts(perPage = 9, page = 1) {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?per_page=${perPage}&page=${page}&orderby=date&_embed`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    const data = await response.json();
    const normalizedData = JSON.parse(JSON.stringify(data).replace(/https:\/\/blog\.aone\.no/g, 'http://blog.aone.no'));
    return { posts: normalizedData.length > 0 ? normalizedData : mockPosts, totalPages: normalizedData.length > 0 ? totalPages : 1 };
  } catch (error) {
    console.error('Error fetching blog posts, using mock data:', error);

    // Calculate pagination for mock posts
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedMockPosts = mockPosts.slice(startIndex, endIndex);
    const mockTotalPages = Math.ceil(mockPosts.length / perPage);

    return { posts: paginatedMockPosts, totalPages: mockTotalPages };
  }
}

export async function fetchPostBySlug(slug) {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const normalizedData = JSON.parse(JSON.stringify(data).replace(/https:\/\/blog\.aone\.no/g, 'http://blog.aone.no'));

    if (normalizedData.length > 0) return normalizedData[0];

    // Check mock data
    return mockPosts.find(p => p.slug === slug) || null;
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}, checking mock data:`, error);
    return mockPosts.find(p => p.slug === slug) || null;
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
    const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=homepage-popup&_embed`);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    const normalizedData = JSON.parse(JSON.stringify(data).replace(/https:\/\/blog\.aone\.no/g, 'http://blog.aone.no'));

    return normalizedData.length > 0 ? normalizedData[0] : null;
  } catch (error) {
    console.error('Error fetching popup content:', error);
    return null;
  }
}
