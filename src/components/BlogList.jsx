import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        // Combine with random images since JSONPlaceholder doesn't provide images
        const postsWithImages = data.slice(0, 6).map(post => ({
          ...post,
          image: `https://picsum.photos/seed/${post.id}/800/400`,
          date: new Date().toLocaleDateString()
        }));
        
        setPosts(postsWithImages);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleReadMore = (post) => {
    navigate(`/post/${post.id}`, { state: { post } });
  };

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            image={post.image}
            description={post.body}
            date={post.date}
            onReadMore={() => handleReadMore(post)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;