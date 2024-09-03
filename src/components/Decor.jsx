import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export const Decor = () => {
  const array = [
    {
      image: "../images/Bamboo Plates.jpeg",
      title: "Premium Biodegradable Plates Set | 25 Plates, 25 Forks, 25 Knives",
      ads: "Ads by Etsy seller",
      description: "This premium biodegradable plates set includes 25 plates, 25 forks, and 25 knives, making it perfect for any event or gathering. Made from eco-friendly materials, this set is designed to provide convenience without compromising on sustainability. Each piece is crafted to be sturdy and reliable, ensuring a pleasant dining experience.",
      specifications: [
        "Material: Biodegradable Materials",
        "Dimensions: Various",
        "Weight: Light",
        "Color: Natural",
        "Usage: Disposable, Ideal for events",
        "Care Instructions: Dispose of after use"
      ],
      rate: 29,
      cost: 2000,
    },
    {
      image: "../images/stand.jpg",
      title: "Handmade Bamboo Stand | Elegant and Sustainable | Perfect for Home Decor",
      ads: "Ads by Local Artisan",
      description: "This elegant bamboo stand is handcrafted with care by local artisans. Its sleek design makes it a perfect addition to any home decor, blending seamlessly with both modern and traditional styles. Made from 100% bamboo, it is not only sustainable but also durable and stylish.",
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
      ads: "Ads by Green Home",
      description: "This set of three bamboo vases adds a touch of natural elegance to any home. Crafted from sustainable bamboo, these vases are perfect for holding your favorite flowers or as standalone decorative pieces. Their eco-friendly design ensures a beautiful and sustainable addition to your decor.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: Varies by Vase",
        "Weight: Lightweight",
        "Color: Natural Bamboo",
        "Usage: Ideal for indoor use",
        "Care Instructions: Wipe with a dry cloth"
      ],
      rate: 33,
      cost: 1500,
    },
    {
      image: "../images/cutlarysets.jpeg",
      title: "Bamboo Cutlery Set | Travel-Friendly | 100% Biodegradable",
      ads: "Ads by EcoLiving",
      description: "This bamboo cutlery set is designed for travelers who value sustainability. The set includes forks, knives, and spoons, all made from 100% biodegradable bamboo. Conveniently portable and eco-friendly, it's perfect for meals on the go or picnics.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: Compact Set",
        "Weight: Lightweight",
        "Color: Natural Bamboo",
        "Usage: Travel-Friendly, Eco-Friendly",
        "Care Instructions: Hand wash and dry thoroughly"
      ],
      rate: 50,
      cost: 1200,
    },
    {
      image: "../images/cuttingboard.jpeg",
      title: "Sustainable Bamboo Kitchen Utensils | 5-Piece Set | Ergonomic Design",
      ads: "Ads by Earthwise",
      description: "This set of five bamboo kitchen utensils combines functionality with sustainability. Each piece is ergonomically designed for comfort and ease of use, and made from 100% bamboo, ensuring durability and eco-friendliness. Perfect for all your cooking needs.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: Standard Utensil Sizes",
        "Weight: Lightweight",
        "Color: Natural Bamboo",
        "Usage: Kitchen Use",
        "Care Instructions: Hand wash and dry thoroughly"
      ],
      rate: 37,
      cost: 1800,
    },
    {
      image: "../images/full.jpg",
      title: "Bamboo Fiber Dinnerware Set | 4 Plates, 4 Bowls, 4 Cups",
      ads: "Ads by Nature's Choice",
      description: "This bamboo fiber dinnerware set includes 4 plates, 4 bowls, and 4 cups, providing a complete dining solution with an eco-friendly touch. Made from bamboo fiber, this set is both sustainable and durable, designed for everyday use and easy to clean.",
      specifications: [
        "Material: Bamboo Fiber",
        "Dimensions: Standard Sizes",
        "Weight: Lightweight",
        "Color: Natural Bamboo",
        "Usage: Everyday Dining",
        "Care Instructions: Dishwasher safe"
      ],
      rate: 42,
      cost: 2400,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-2xl font-bold text-green-500 h-[10vh] items-center sm:text-3xl sm:leading-relaxed flex justify-center">Decor</div>
      <div className=" pb-10 px-10 grid grid-cols-4 gap-8">
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
            <Link to={`/decor/${index}`}>
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
