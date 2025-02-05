import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main.jpeg`,
      title: "Najpiękniejsze kwiaty",
      subtitle: "z serca Warszawy",
      alt: "Kwiaciarnia Miłość - bukiety kwiatów"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main1.JPEG`,
      title: "Wyjątkowe kompozycje",
      subtitle: "na każdą okazję",
      alt: "Wyjątkowe kompozycje kwiatowe"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main2.JPEG`,
      title: "Kwiaty dla firm",
      subtitle: "Zamówienia korporacyjne",
      alt: "Kwiaty dla firm"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main3.JPEG`,
      title: "Najpiękniejsze kwiaty",
      subtitle: "z serca Warszawy",
      alt: "Kwiaciarnia Miłość - bukiety kwiatów"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main4.JPEG`,
      title: "Wyjątkowe kompozycje",
      subtitle: "na każdą okazję",
      alt: "Wyjątkowe kompozycje kwiatowe"
    },
    {
      url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main5.JPEG`,
      title: "Kwiaty dla firm",
      subtitle: "Zamówienia korporacyjne",
      alt: "Kwiaty dla firm"
    }
  ];

  // Preload images
  useEffect(() => {
    heroImages.forEach(image => {
      const img = new Image();
      img.src = image.url;
    });
  }, []);

  // Carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % heroImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Images with fade transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <picture>
            {/* Desktop image */}
            <source
              media="(min-width: 1024px)"
              srcSet={image.url}
            />
            {/* Tablet image */}
            <source
              media="(min-width: 640px)"
              srcSet={image.url}
            />
            {/* Mobile image */}
            <img
              src={image.url}
              alt={image.alt}
              loading={index === 0 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero content with enhanced visibility */}
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          {heroImages[currentImageIndex].title}{' '}
          <br />
          <span className="text-pink-500">{heroImages[currentImageIndex].subtitle}</span>
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8 drop-shadow-lg font-medium">
          Ekskluzywne kompozycje kwiatowe oraz wyjątkowe dekoracje,
          które sprawią, że każda okazja stanie się niezapomniana.
        </p>
        <a
          href="https://wolt.com/pl/pol/warsaw/venue/pracownia-kwiatw-i-balonw-mio"
          className="inline-flex items-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg transition-all transform hover:scale-105"
        >
          Zamów kwiaty
          <ChevronRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </header>
  );
};

export default HeroSection;