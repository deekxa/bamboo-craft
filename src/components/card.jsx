import React from "react";
import { FaStar } from "react-icons/fa";

export const Card = () => {
  return (
    <div className="border-2 border-rose-400 rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto mb-4">
      <img
        className="w-full h-48 object-cover"
        src="../images/2.jpg"
        alt="Product"
      />
      <div className="p-4">
        <div className="text-lg font-semibold truncate">
          Premium Planet Large Disposable & Biodegradable Plates Set with Cutlery | 25 Plates | 25 Forks | 25 Knives | Eco Friendly and Sturdy
        </div>
        <div className="text-sm text-gray-500 mt-1 mb-2">
          Ads by Etsy seller
        </div>
        <div className="flex items-center mb-2">
          <div className="text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="ml-2 text-gray-500">(29)</div>
        </div>
        <div className="text-xl font-bold">USD 27.49</div>
      </div>
    </div>
  );
};
