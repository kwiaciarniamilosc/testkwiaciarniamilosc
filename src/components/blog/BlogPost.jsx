// src/components/blog/BlogPost.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Folder, ArrowLeft } from 'lucide-react';
import BlogMeta from './BlogMeta';

const BlogPost = ({ post }) => {
  if (!post) return null;

  const { title, date, category, content, image, excerpt } = post;

  return (
    <article className="min-h-screen bg-white">
      <BlogMeta post={post} />
      
      {/* Hero Header */}
      <div className="relative h-[60vh] bg-gray-900">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              {title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {date}
              </span>
              <span className="flex items-center">
                <Folder className="w-4 h-4 mr-2" />
                {category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Powrót do bloga
        </Link>

        <div className="prose prose-lg max-w-none">
          <div className="mb-8 text-xl text-gray-600 font-excenta">
            {excerpt}
          </div>
          <div 
            className="blog-content font-excenta"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>
      </div>
    </article>
  );
};

export default BlogPost;