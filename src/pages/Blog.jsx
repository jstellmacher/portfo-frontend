// Blog.jsx
import React, { useEffect, useState } from 'react';
import MyCarousel from '../components/Carousel'; // Adjust path as per your file structure

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog data from your API endpoint
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <MyCarousel items={blogPosts} />
    </div>
  );
};

export default Blog;
