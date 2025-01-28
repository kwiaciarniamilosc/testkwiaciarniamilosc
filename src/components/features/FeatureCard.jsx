// src/components/features/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
    <Icon className="h-6 w-6 text-pink-500" />
    <span className="text-gray-800">{text}</span>
  </div>
);

export default FeatureCard;