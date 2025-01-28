import React, { useState } from 'react';
import { galleryItems, categories } from '../data/galleryData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <main>
      {/* Hero section */}
      <div className="relative pt-16 pb-12 flex content-center items-center justify-center min-h-[40vh]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-gradient-to-r from-pink-500 to-purple-500">
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full px-4 ml-auto mr-auto text-center">
              <h1 className="text-white   font-bold text-4xl md:text-5xl">
                Nasza Galeria
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                Odkryj nasze najpiękniejsze realizacje i kompozycje kwiatowe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-pink-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`}
                    alt={item.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={`${import.meta.env.BASE_URL}${selectedImage.image.replace(/^\//, '')}`}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;