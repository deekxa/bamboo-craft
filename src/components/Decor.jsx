import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import ProductDetail from "./product/ProductDetail";
export const Decor = () => {
  const array = [
    {
      image: "../images/2.jpg",
      title: "Premium Biodegradable Plates Set | 25 Plates, 25 Forks, 25 Knives",
      ads: "Ads by Etsy seller",
      description: "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth"
      ],
      rate: 29,
      cost: 2000,
    },
    {
      image: "../images/stand.jpg",
      title: "Handmade Bamboo Stand | Elegant and Sustainable | Perfect for Home Decor",
      ads: "Ads by Local Artisan", description: "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth"
      ],
      rate: 45,
      cost: 3500,
    },
    {
      image: "../images/vases.jpg",
      title: "Bamboo Vases | Set of 3 | Eco-Friendly | Natural Home Decor",
      ads: "Ads by Green Home", description: "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth"
      ],
      rate: 33,
      cost: 1500,
    },
    {
      image: "../images/decor.png",
      title: "Bamboo Cutlery Set | Travel-Friendly | 100% Biodegradable",
      ads: "Ads by EcoLiving", description: "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth"
      ],
      rate: 50,
      cost: 1200,
    },
    {
      image: "../images/board.webp",
      title: "Sustainable Bamboo Kitchen Utensils | 5-Piece Set | Ergonomic Design",
      ads: "Ads by Earthwise", description: "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth"
      ],
      rate: 37,
      cost: 1800,
    },
    {
      image: "../images/full.jpg",
      title: "Bamboo Fiber Dinnerware Set | 4 Plates, 4 Bowls, 4 Cups",
      ads: "Ads by Nature's Choice", description: "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth"
      ],
      rate: 42,
      cost: 2400,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-10 grid grid-cols-4 gap-8">
        {array.map((data, index) => (
          <div key={index} className="shadow-md border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <img className="w-full h-48 object-cover rounded-lg" src={data.image} alt={data.title} />
            </div>
            <div className="mb-2 font-semibold text-lg truncate">{data.title}</div>
            <div className="text-sm text-gray-500 mb-2">{data.ads}</div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < data.rate / 10 ? "text-yellow-400" : "text-gray-300"} />
              ))}
              <div className="ml-2 text-gray-600">({data.rate})</div>
            </div>
            <div className="text-lg font-bold text-green-600 mb-4">RS {data.cost}</div>
            <Link to={`/productdetail/${index}`}>
              <button className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
