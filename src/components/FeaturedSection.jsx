import React from 'react';

const FeaturedSection = () => {
  return (
    <div className=" w-full font-mono h-screen bg-cover bg-red-200" style={{ backgroundImage: "url('/Images/bamboo.jpg')" }}>
      <div className=" inset-0 bg-black opacity-50"></div>
      <div className="  text-start z-10 font-mono flex flex-col items-start ml-2 justify-center mb-4 h-full text-white">
        <h1 className="text-6xl font-bold  pl-2 font-mono text-green-950 text-start">Think Sustainable </h1><p  className=" text-4xl font-mono font-bold mb-4 pl-2 text-green-900">Think Bamboo</p>
        <p className="text-2xl pt-2 pl-2 text-green-950 font-mono">"Be like bamboo.The higher you grow, the deeper you bow."</p>
      </div>
    </div>
  );
};

export default FeaturedSection;