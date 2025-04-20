import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        
        setPost({
          ...data,
          image: `https://picsum.photos/seed/${data.id}/800/400`,
          date: new Date().toLocaleDateString()
        });
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Posts
      </Button>
      
      <article className="prose prose-lg max-w-4xl mx-auto">
        <div className="aspect-video w-full mb-8 overflow-hidden rounded-lg">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-500">{post.date}</div>
          
          <div className="prose prose-lg">
            <p className="text-gray-700 leading-relaxed">
              {post.body}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;