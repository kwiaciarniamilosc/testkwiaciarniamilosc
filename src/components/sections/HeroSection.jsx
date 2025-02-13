import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Heart } from 'lucide-react';
  
  const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const heroImages = [
      {
        url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main3.JPEG`,
        title: "Wyraź Swoją Miłość",
        subtitle: "Wyjątkowymi Kwiatami",
        alt: "Walentynkowe kompozycje kwiatowe"
      },
      {
        url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main1.JPEG`,
        title: "Kolekcja Walentynkowa",
        subtitle: "2025",
        alt: "Specjalna kolekcja na Walentynki"
      },
      {
        url: `${import.meta.env.BASE_URL}assets/images/hero/hero-main3.JPEG`,
        title: "Romantyczne Róże",
        subtitle: "Dostawa w Dniu Zamówienia",
        alt: "Walentynkowe bukiety róż"
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
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-rose-50">
        {/* Images with fade transition */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={image.url}
              />
              <source
                media="(min-width: 640px)"
                srcSet={image.url}
              />
              <img
                src={image.url}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </picture>
            {/* Romantic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-rose-900/60 via-rose-900/50 to-rose-900/70" />
          </div>
        ))}
  
        {/* Floating hearts animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className={`absolute text-rose-200/30 animate-float-${i + 1} w-${8 + i * 2} h-${8 + i * 2}`}
              style={{
                left: `${15 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                top: '-20px'
              }}
            />
          ))}
        </div>
  
        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-white transition-all z-20"
          aria-label="Poprzednie zdjęcie"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-white transition-all z-20"
          aria-label="Następne zdjęcie"
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
                  ? 'bg-rose-400 scale-110' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Przejdź do zdjęcia ${index + 1}`}
            />
          ))}
        </div>
  
        {/* Hero content */}
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {heroImages[currentImageIndex].title}{' '}
            <br />
            <span className="text-rose-300">{heroImages[currentImageIndex].subtitle}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8 drop-shadow-lg font-medium">
            Spraw, by tegoroczne Walentynki były wyjątkowe dzięki naszym ekskluzywnym kompozycjom kwiatowym.
            Zamów teraz z gwarantowaną dostawą 14 lutego.
          </p>
          <div className="space-x-4">
            <a
              href="https://wolt.com/pl/pol/warsaw/venue/pracownia-kwiatw-i-balonw-mio/items/valentines-day-1"
              className="inline-flex items-center px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full text-lg transition-all transform hover:scale-105"
            >
              Zobacz Kolekcję Walentynkową
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://wa.me/733060191?text=I%20would%20like%20to%20order%20a%20special%20bouquet%20for%20myself."
              className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full text-lg transition-all transform hover:scale-105"
            >
              Zamówienie Specjalne
              <Heart className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </header>
    );
  };
  
  export default HeroSection;
