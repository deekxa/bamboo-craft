import React from 'react';

const FeaturedSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/Images/bamboo.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-60 animate-fadeIn"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))",
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-start ml-12 justify-center h-full px-6 text-white animate-slideIn">
        <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-xl leading-tight animate-fadeUp">
          Think Sustainable
        </h1>
        <p className="text-4xl font-semibold mb-6 text-white drop-shadow-xl leading-snug animate-fadeUp animate-delay-200">
          Think Bamboo
        </p>
        <p className="text-2xl font-light text-white drop-shadow-xl leading-relaxed animate-fadeUp animate-delay-400">
          "Be like bamboo. The higher you grow, the deeper you bow."
        </p>
      </div>
    </div>
  );
};

export default FeaturedSection;
