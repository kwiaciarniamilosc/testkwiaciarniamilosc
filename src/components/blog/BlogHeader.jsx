import React from 'react';

const BlogHeader = ({ title, description }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
      <h1 className="text-4xl font-playfair font-bold mb-4">
        {title || "Blog Kwiatowy"}
      </h1>
      <p className="text-gray-600 font-excenta">
        {description || "Odkryj świat kwiatów, poznaj najnowsze trendy florystyczne i znajdź inspirację do tworzenia własnych kompozycji kwiatowych. Wskazówki dotyczące pielęgnacji, dekoracji ślubnych i unikalnych aranżacji od Kwiaciarni Miłość w Warszawie."}
      </p>
    </div>
  );
};

export default BlogHeader;