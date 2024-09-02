import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export const Lighting = () => {
  const array = [
    {
      image: "../images/cone.jpg ",
      title: "Rustic Cone Shaped Asian Pendant Light | Black Cable Set",
      ads: "Ads by Artisan Lighting",
      description: "Introduce a touch of rustic charm to your space with the Cone Shaped Asian Pendant Light. This striking pendant light features a distinctive cone shape with a textured finish that evokes traditional Asian aesthetics. The black cable set adds a contemporary contrast, making it a perfect fit for both modern and rustic interiors. Ideal for illuminating dining areas, living rooms, or entryways, this pendant light blends functionality with unique design.",
      specifications: [
        "Material: Metal with Rustic Finish",
        "Dimensions: 10 inches (Diameter) x 12 inches (Height)",
        "Weight: 1.5 kg",
        "Color: Black Cable, Rustic Cone Shade",
        "Bulb Type: E27 (not included)",
        "Usage: Ideal for indoor use, suitable for rustic and Asian-inspired decor",
        "Care Instructions: Wipe with a dry cloth, avoid using abrasive cleaners"
      ],
      rate: 40,
      cost: 3000
    },
    {
      image: "../images/mushroom.jpg",
      title: "Mianzi Mushroom Bamboo Pendant Lamp | Minimalist Hanging Light Fixture",
      ads: "Ads by Etsy",
      description: "Elevate your interior with the Mianzi Mushroom Bamboo Pendant Lamp, a stunning minimalist light fixture that combines traditional craftsmanship with modern design. Handmade from sustainable bamboo, this pendant lamp features a unique mushroom shape that adds a touch of elegance to any space. Perfect for creating a serene and sophisticated atmosphere in both Asian and Scandinavian-inspired interiors. Ideal for use in living rooms, dining areas, or as a statement piece in any room.",
      specifications: [
        "Material: Sustainable Bamboo",
        "Dimensions: 12 inches (Diameter) x 8 inches (Height)",
        "Weight: 2 kg",
        "Color: Natural Bamboo",
        "Bulb Type: E27 (not included)",
        "Usage: Ideal for indoor lighting, suitable for modern, minimalist, Asian, and Scandinavian decor",
        "Care Instructions: Dust regularly, wipe with a dry cloth to maintain appearance"
      ],
      rate: 45,
      cost: 4200
    },
    {
      image: "../images/boho.jpg",
      title: "Bamboo Elle Natural Lighting | Aesthetic Eco Chandelier",
      ads: "Ads by Etsy",
      description: "Enhance your home decor with the Bamboo Elle Natural Lighting, an exquisite eco-friendly chandelier that adds a touch of natural elegance to any space. Crafted from high-quality bamboo, this chandelier combines aesthetics with sustainability. Its unique design complements both modern and boho interiors, making it a versatile choice for various settings. Perfect for illuminating living rooms, dining areas, or any space that benefits from a natural, sophisticated lighting solution.",
      specifications: [
        "Material: Natural Bamboo",
        "Dimensions: 18 inches (Diameter) x 10 inches (Height)",
        "Weight: 3 kg",
        "Color: Natural Bamboo",
        "Bulb Type: E27 (not included)",
        "Usage: Indoor lighting, ideal for living rooms, dining areas, and stylish home decor",
        "Care Instructions: Dust regularly, wipe with a damp cloth as needed"
      ],
      rate: 50,
      cost: 5500
    },
    {
      image: "../images/floorlamp.jpg",
      title: "Elegant Bamboo Floor Lamp | Eco-Friendly Lighting Solution",
  ads: "Ads by Artisan Lighting Co.",
  description: "Illuminate your living space with this elegant bamboo floor lamp. Handcrafted by skilled artisans, this lamp adds a touch of natural beauty to any room. Its sleek design and eco-friendly materials make it not only a stylish addition to your decor but also a sustainable choice for your home. The warm, ambient light it provides creates a cozy atmosphere, perfect for relaxation or entertaining guests.",
  specifications: [
    "Material: 100% Bamboo",
    "Dimensions: 60 inches (Height) x 12 inches (Base Diameter)",
    "Weight: 2.5 kg",
    "Color: Natural Bamboo with a subtle gloss finish",
    "Bulb Type: LED (included)",
    "Usage: Indoor lighting, suitable for living rooms, bedrooms, and reading nooks",
    "Care Instructions: Wipe with a dry cloth, avoid direct contact with water"
  ],
  rate: 48,
  cost: 4500
    },
    {
      image: "../images/pendent.jpg",
      title: "Petal Pendant Lights | Natural Rattan Lamp Elegance for Your Home",
      ads: "Ads by Rattan Interiors",
      description: "Enhance the charm of your home with the Petal Pendant Lights, crafted from natural rattan. This pendant light features a unique petal design that brings a touch of elegance and warmth to any space. Its natural material and delicate design make it a stunning addition to living rooms, dining areas, or entryways. The soft, ambient light it emits creates a cozy and inviting atmosphere, perfect for any home decor style.",
      specifications: [
        "Material: Natural Rattan",
        "Dimensions: 18 inches (Diameter) x 12 inches (Height)",
        "Weight: 1.8 kg",
        "Color: Natural Rattan with a light varnish finish",
        "Bulb Type: E26 (not included)",
        "Usage: Indoor lighting, ideal for living rooms, dining areas, and entryways",
        "Care Instructions: Dust regularly, wipe with a dry cloth"
      ],
      rate: 42,
      cost: 3500
    },
    {
      image: "../images/petel.jpg",
      title: "Kalimantan Trio Bamboo Pendant Light | Natural Elegance for Your Space",
  ads: "Ads by Bamboo Crafts",
  description: "Illuminate your home with the Kalimantan Trio Bamboo Pendant Light, featuring three natural bamboo shades. This pendant light offers a stylish and eco-friendly lighting solution with its unique design and sustainable materials. Each bamboo shade casts a warm, inviting glow, making it a perfect addition to modern and rustic interiors alike. Ideal for dining areas, living rooms, or entryways, it combines function and aesthetic appeal.",
  specifications: [
    "Material: Natural Bamboo",
    "Dimensions: 12 inches (Diameter per shade) x 8 inches (Height per shade)",
    "Weight: 2.5 kg",
    "Color: Natural Bamboo",
    "Bulb Type: E27 (not included)",
    "Usage: Indoor lighting, suitable for dining areas, living rooms, and entryways",
    "Care Instructions: Wipe with a damp cloth, avoid direct water contact"
  ],
  rate: 45,
  cost: 4500
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-2xl font-bold text-green-500 h-[10vh] items-center sm:text-3xl sm:leading-relaxed flex justify-center">Lighting</div>

      <div className="px-10 pb-10 grid grid-cols-4 gap-8">
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
            <Link to={`/productdetail/lighting/${index}`}>

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
