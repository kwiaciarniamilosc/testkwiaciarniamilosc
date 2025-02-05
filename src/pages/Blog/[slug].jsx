// src/pages/Blog/[slug].jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../../data/blog/posts';
import BlogPost from '../../components/blog/BlogPost';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentPost = posts.find(p => p.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      setIsLoading(false);
    } else {
      console.error('Post not found:', slug);
      navigate('/blog', { replace: true });
    }
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return post ? <BlogPost post={post} /> : null;
};

export default BlogPostPage;