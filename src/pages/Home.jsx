
import React from 'react';
import { Clock, MapPin, Leaf } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import Newsletter from '../components/shared/Newsletter';
import ProductGallery from '../components/shared/ProductGallery';
import FeatureCard from '../components/features/FeatureCard';

const Home = () => {
  const features = [
    { icon: MapPin, text: "ul. Puławska 38, 02-512 Warszawa" },
    { icon: Clock, text: "Dostawa 7/7 w Warszawie" },
    { icon: Leaf, text: "Świeże kwiaty każdego dnia" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <ServicesSection />
      <ProductGallery />
      <Newsletter />
      <ReviewsSection />
    </div>
  );
};

export default Home;