import React from 'react';
import { FaLeaf, FaRecycle } from 'react-icons/fa'; // Example for adding icons if needed

const FeaturedSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/Images/bamboo.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      {/* Gradient overlay with fade-in effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40 animate-fadeIn"></div>

      {/* Text content with cool animations */}
      <div className="relative flex flex-col items-start ml-12 justify-center h-full px-6 text-white">
        <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-xl leading-tight animate-slideInLeft">
          Think Sustainable
        </h1>
        <p className="text-4xl font-semibold mb-6 text-white drop-shadow-xl leading-snug animate-slideInRight">
          Think Bamboo
        </p>
        <p className="text-2xl font-light text-white drop-shadow-xl leading-relaxed animate-fadeIn">
          "Be like bamboo. The higher you grow, the deeper you bow."
        </p>
      </div>
    </div>
  );
};

export default FeaturedSection;
