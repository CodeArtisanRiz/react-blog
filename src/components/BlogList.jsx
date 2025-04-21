import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
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

  // Improved filter logic for search input
  const filteredPosts = posts.filter(post => {
    const searchTerm = search.trim().toLowerCase();
    return (
      post.title?.toLowerCase().includes(searchTerm) ||
      post.body?.toLowerCase().includes(searchTerm)
    );
  });

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={e => setSearch(e.target.value.trimStart())}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              image={post.image}
              description={post.body}
              date={post.date}
              onReadMore={() => handleReadMore(post)}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No blogs found.</div>
        )}
      </div>
    </div>
  );
};

export default BlogList;