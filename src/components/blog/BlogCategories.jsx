// src/components/blog/BlogCategories.jsx
import React from 'react';
import { categories } from '../../data/blog/posts'; // Updated import

const BlogCategories = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => onCategoryChange(null)}
          className={`inline-flex items-center px-4 py-2 rounded-full shadow-sm text-sm ${
            !selectedCategory 
              ? 'bg-pink-500 text-white' 
              : 'bg-white text-gray-700 hover:bg-pink-50'
          } transition-colors`}
        >
          Wszystkie
        </button>
        {categories.map((category, index) => (
          <button
            key={category.text} // Changed from id to text since that's what we have
            onClick={() => onCategoryChange(category.text)}
            className={`inline-flex items-center px-4 py-2 rounded-full shadow-sm text-sm ${
              selectedCategory === category.text
                ? 'bg-pink-500 text-white'
                : 'bg-white text-gray-700 hover:bg-pink-50'
            } transition-colors`}
          >
            <i className={`fas fa-${category.icon} mr-2 ${
              selectedCategory === category.text ? 'text-white' : 'text-pink-500'
            }`} />
            {category.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;