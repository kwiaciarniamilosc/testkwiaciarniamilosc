import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Folder } from 'lucide-react';

const BlogCard = ({ post }) => {
  const { slug, title, date, category, excerpt, image } = post;

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Folder className="w-4 h-4 mr-2" />
            {category}
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="inline-flex items-center text-pink-500 hover:text-pink-600"
        >
          Zobacz więcej
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;