import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../data/blog/posts';
import { categories } from '../../data/blog/categories';
import BlogCategories from '../../components/blog/BlogCategories';

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog Kwiatowy</h1>
        <p className="text-gray-600">
          Odkryj świat kwiatów, poznaj najnowsze trendy florystyczne i znajdź inspirację 
          do tworzenia własnych kompozycji kwiatowych.
        </p>
      </div>

      {/* Categories */}
      <BlogCategories categories={categories} />

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.contentFile}`} 
                  className="inline-flex items-center text-pink-500 hover:text-pink-600"
                >
                  Zobacz więcej
                  <span className="ml-2">→</span>
              </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
