import React from "react";

const FeaturedSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-850 ease-in-out animate-zoomBackground"
        style={{
          backgroundImage: "url('/Images/bamboo.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

      <div className="relative flex flex-col items-start ml-12 justify-center h-full px-6 text-white">
        <h1 className="text-6xl font-bold mb-6 drop-shadow-xl leading-tight animate-fadeUp animate-colorWave">
          Think Sustainable
        </h1>

        <p className="text-4xl font-semibold mb-6 drop-shadow-xl leading-snug animate-fadeUp animate-delay-200 animate-letterSpacing animate-textFlicker">
          Think Bamboo
        </p>

        <p className="text-2xl font-light drop-shadow-xl leading-relaxed animate-fadeUp animate-delay-400 animate-textFlicker">
          "Be like bamboo. The higher you grow, the deeper you bow."
        </p>
      </div>
    </div>
  );
};

export default FeaturedSection;
