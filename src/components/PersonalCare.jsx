import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export const PersonalCare = () => {
  const array = [
    {
      image: "../images/cottonbud.jpeg",
      title: "Quest 200 Cotton Buds | Cotton Wool With Bamboo Stem | High Quality Ear Buds",
  ads: "Ads by Earthwise",
  description: "These high-quality ear buds feature 100% cotton wool tips with a durable bamboo stem, combining eco-friendliness with effective functionality. Perfect for daily hygiene needs, they offer a sustainable alternative to traditional plastic stemmed cotton buds.",
  specifications: [
    "Material: 100% Cotton Wool, Bamboo Stem",
    "Quantity: 200 Buds",
    "Weight: Lightweight",
    "Color: Natural Bamboo",
    "Usage: Personal Care, Hygiene",
    "Care Instructions: Store in a dry place"
  ],
  rate: 45,
  cost: 350
    },
    {
      image: "../images/haircomb.jpeg",
      title: "Bamboo Pointed Wide Tooth Comb | Hair Care | Bathroom | Eco Friendly | Plastic Free | Sustainable | Plant Based | Compostable | Natural",
      ads: "Ads by Earthwise",
      description: "The Bamboo Pointed Wide Tooth Comb is designed for gentle detangling and everyday hair care. Made from 100% natural bamboo, this eco-friendly comb is perfect for all hair types, helping reduce breakage and maintain healthy hair. Its wide-tooth design is especially beneficial for curly and thick hair.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 20cm x 5cm",
        "Weight: Lightweight",
        "Color: Natural Bamboo",
        "Usage: Hair Care",
        "Care Instructions: Hand wash and dry thoroughly"
      ],
      rate: 42,
      cost: 1200
    },
    {
      image: "../images/lotionbottle.jpeg",
      title: "Bamboo Lotion Bottle | Refillable | Eco-Friendly | Sustainable | Plastic-Free | Natural Skincare | Bathroom Essential",
  ads: "Ads by Earthwise",
  description: "This Bamboo Lotion Bottle offers a stylish and sustainable solution for your skincare routine. Made from 100% bamboo with a durable, refillable design, it helps reduce plastic waste while adding a touch of natural elegance to your bathroom. Perfect for lotions, creams, or liquid soaps.",
  specifications: [
    "Material: 100% Bamboo and Glass (Inner Bottle)",
    "Capacity: 200ml",
    "Dimensions: 15cm x 6cm",
    "Weight: Lightweight",
    "Color: Natural Bamboo",
    "Usage: Skincare, Liquid Storage",
    "Care Instructions: Hand wash and dry thoroughly; refill as needed"
  ],
  rate: 45,
  cost: 1500
    },
    {
      image: "../images/toothbrush.jpeg",
      title: "NUDUKO Biodegradable Bamboo Toothbrushes | 10-Piece Set | BPA-Free Soft Bristles | Eco-Friendly | Compostable | Natural Oral Care",
  ads: "Sustainably Yours - Eco Conscious Living",
  description: "Switch to a greener lifestyle with the NUDUKO Biodegradable Bamboo Toothbrushes. This 10-piece set features soft, BPA-free bristles, ensuring a gentle yet effective clean. Made from natural bamboo, these toothbrushes are fully compostable and perfect for those committed to reducing plastic waste. Ideal for daily oral care.",
  specifications: [
    "Material: 100% Bamboo (Handle) and BPA-Free Nylon (Bristles)",
    "Bristle Type: Soft",
    "Quantity: 10 Toothbrushes",
    "Color: Natural Bamboo Handle with Green Bristles",
    "Usage: Daily Oral Care",
    "Eco-Friendly: Biodegradable and Compostable",
    "Care Instructions: Store in a dry place after use"
  ],
  rate: 55,
  cost: 1200
    },
    {
      image: "../images/hairbrush.jpeg",
      title: "100% Compostable Plastic-Free Hair Brush Set | Bamboo & Natural Rubber | Includes Cotton Pouch & Brush Cleaner | Eco-Friendly Gift",
  ads: "Earth-Conscious Beauty - Your Sustainable Choice",
  description: "Embrace eco-friendly hair care with this 100% compostable, plastic-free hairbrush set. Crafted from sustainable bamboo and natural rubber, this set includes a brush cleaner and a cotton pouch, making it a perfect gift for those committed to reducing their environmental impact. Ships next day for quick delivery.",
  specifications: [
    "Material: 100% Bamboo (Handle), Natural Rubber (Bristle Base)",
    "Included: Cotton Pouch, Brush Cleaner",
    "Dimensions: Standard Hair Brush Size",
    "Weight: Lightweight and Durable",
    "Color: Natural Bamboo",
    "Usage: Suitable for All Hair Types",
    "Eco-Friendly: Fully Compostable and Plastic-Free",
    "Care Instructions: Hand wash brush and pouch, air dry"
  ],
  rate: 40,
  cost: 1500
    },
    {
      image: "../images/soapbar.jpeg",
      title: "Brockton Bamboo Bathroom Accessories | Elegant & Sustainable | 5-Piece Set",
  ads: "Upgrade Your Bathroom - Go Green with Brockton",
  description: "Elevate your bathroom decor with the Brockton Bamboo Bathroom Accessories set. This 5-piece set includes everything you need for an elegant and eco-friendly bathroom upgrade. Crafted from premium bamboo, these accessories are not only stylish but also sustainable, making them the perfect choice for a green lifestyle.",
  specifications: [
    "Material: 100% Bamboo",
    "Included: Soap Dispenser, Toothbrush Holder, Soap Dish, Tumbler, Trash Bin",
    "Finish: Smooth and Water-Resistant",
    "Color: Natural Bamboo",
    "Usage: Bathroom Accessories",
    "Eco-Friendly: Sustainable and Renewable Material",
    "Care Instructions: Wipe clean with a damp cloth, avoid soaking"
  ],
  rate: 45,
  cost: 2200
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-2xl font-bold text-green-500 h-[10vh] items-center sm:text-3xl sm:leading-relaxed flex justify-center">PersonalCare</div>
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
            <Link to={`/personalcare/${index}`}>                   

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
