import React from 'react';

const FeaturedSection = () => {
  return (
    <div className=" w-full h-screen bg-cover bg-red-200" style={{ backgroundImage: "url('/Images/bamboo.jpg')" }}>
      <div className=" inset-0 bg-black opacity-50"></div>
      <div className="  text-start z-10 flex flex-col items-start justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-start">Think Sustainable </h1><p  className=" text-4xl font-bold mb-4 text-green-400">Think Bamboo</p>
        <p className="text-2xl">"Be like bamboo. The higher you grow, the deeper you bow."</p>
      </div>
    </div>
  );
};

export default FeaturedSection;