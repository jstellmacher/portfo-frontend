import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import { fetchBlogPosts } from '../components/BlogAPI';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlogPosts();
        console.log('Fetched blog posts:', data); // Check the structure of data
        setBlogPosts(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-8">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {blogPosts.length > 0 ? (
        <Carousel items={blogPosts} />
      ) : (
        <p>No blog posts found.</p>
      )}
    </div>
  );
};

export default Blog;
