import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Jak dbać o kwiaty cięte',
      date: '2024-01-15',
      excerpt: 'Poznaj sprawdzone sposoby na przedłużenie życia kwiatów ciętych...',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Trendy ślubne 2024',
      date: '2024-01-10',
      excerpt: 'Odkryj najnowsze trendy w bukietach ślubnych na ten sezon...',
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-playfair font-bold text-center mb-12">
          Blog Kwiaciarni
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-semibold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-pink-500 hover:text-pink-600">
                  Czytaj więcej
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;