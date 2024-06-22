// Blog.jsx
import React, { useState, useEffect } from 'react';
import BlogLayout from '../components/BlogLayout';
import FeaturedBlogPost from '../components/FeaturedBlogPost';
import RegularBlogPost from '../components/RegularBlogPost';
import BlogFilter from '../components/BlogFilter';
import { fetchBlogPosts } from '../components/BlogAPI';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

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

  const tags = [
    'coding',
    'project management',
    'marketing',
    'ux/ui',
    'web development',
    'python',
    'javascript',
    'java',
  ];

  const filterPosts = tag => {
    if (!tag) {
      return blogPosts;
    }
    return blogPosts.filter(post => post.tags.includes(tag));
  };

  return (
    <div className="bg-gray-100 rounded-lg min-h-[80vh]">
      <BlogLayout title="Blog">
        <BlogFilter
          tags={tags}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          filterPosts={filterPosts}
        />

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Featured Posts</h2>
          <div className="grid grid-cols-1 gap-6">
            {filterPosts(activeTag).filter(post => post.featured).map(post => (
              <FeaturedBlogPost
                key={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
                imageUrl={post.imageUrl}
                link={`/blog/${post.id}`} // Assuming the link to the post details page
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Recent Posts</h2>
          <p className="text-red-600 text-sm text-center m-2">
        Scroll Down For More Blogs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-auto max-h-[60vh] rounded-lg">
            {filterPosts(activeTag).filter(post => !post.featured).map(post => (
              <RegularBlogPost
                key={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
                imageUrl={post.imageUrl}
                link={`/blog/${post.id}`} // Assuming the link to the post details page
              />
            ))}
          </div>
        </div>
      </BlogLayout>
    </div>
  );
};

export default Blog;
