// BlogAPI.jsx (or BlogService.jsx)
const dummyData = [
    { id: 1, title: 'First Blog Post', date: 'June 1, 2024', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Second Blog Post', date: 'June 5, 2024', description: 'Nulla quis lorem ut libero malesuada feugiat.' },
    { id: 3, title: 'Third Blog Post', date: 'June 10, 2024', description: 'Vestibulum ac diam sit amet quam vehicula elementum.' }
  ];
  
  export const fetchBlogPosts = async () => {
    try {
      // Simulate delay to mimic async fetch
      await new Promise(resolve => setTimeout(resolve, 1000));
      return dummyData;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error; // Propagate error to caller
    }
  };
  
  export const fetchBlogPostById = async (postId) => {
    try {
      // Simulate fetching a specific post by ID
      const post = dummyData.find(post => post.id === postId);
      if (!post) {
        throw new Error(`Blog post with ID ${postId} not found`);
      }
      return post;
    } catch (error) {
      console.error(`Error fetching blog post with ID ${postId}:`, error);
      throw error; // Propagate error to caller
    }
  };
  