// Blog.jsx
import React, { useState, useEffect } from 'react';
import BlogLayout from '../components/BlogLayout';
import BlogPost from '../components/BlogPost';
import { fetchBlogPosts } from '../components/BlogAPI';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBlogPosts();
        console.log('Fetched blog posts:', data);
        setBlogPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
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
      <BlogLayout title="Blog">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              date={post.date}
              description={post.description}
            />
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </BlogLayout>
  );
};

export default Blog;
