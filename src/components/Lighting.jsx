import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export const Lighting = () => {
  const array = [
    {
      image: "../images/tablelamp.jpeg",
      title: "Tatami Table Lamp | Design B | Compact & Elegant Lighting Solution",
      ads: "Illuminate Your Space with the Tatami Table Lamp - Modern & Minimalist Design",
      description: "The Tatami Table Lamp in Design B is a perfect blend of modern elegance and functional lighting. With a compact diameter of 18.5 cm and a height of 42 cm, this lamp is designed to add a touch of sophistication to any room. The minimalist aesthetic, combined with high-quality materials, makes it an ideal choice for those looking to enhance their home decor with a stylish and efficient lighting solution.",
      specifications: [
        "Design: B",
        "Dimensions: 18.5 cm (Diameter) x 42 cm (Height)",
        "Material: Premium Bamboo & Tatami",
        "Color: Natural & Neutral Tones",
        "Light Source: LED (Included)",
        "Usage: Table Lamp, Ideal for Living Rooms, Bedrooms, or Offices",
        "Care Instructions: Wipe clean with a dry cloth, avoid using abrasive cleaners"
      ],
      rate: 40,
      cost: 3500
    },
    {
      image: "../images/solarlarteen.jpeg",
      title: "1 Pack Portable Waterproof Candle Light Outdoor Solar Lanterns | Dazuma",
  ads: "Brighten Your Outdoors with Dazuma Solar Lanterns - Durable & Eco-Friendly Lighting",
  description: "Illuminate your outdoor space with the Dazuma Portable Waterproof Candle Light Solar Lantern. Designed for durability and efficiency, this lantern features a solar-powered LED light, making it a sustainable choice for outdoor lighting. Its waterproof design ensures reliable performance in various weather conditions, while its portable nature makes it perfect for camping, hiking, or any outdoor adventure.",
  specifications: [
    "Type: Portable Solar Lantern",
    "Features: Waterproof, Solar-Powered LED",
    "Material: High-Durability Plastic and Metal",
    "Color: Neutral Tones",
    "Dimensions: Compact and Lightweight",
    "Usage: Outdoor Lighting, Camping, Hiking",
    "Care Instructions: Keep away from extreme weather conditions, clean with a damp cloth"
  ],
  rate: 25,
  cost: 1200
    },
    {
      image: "../images/handknittedlampp.jpeg",
      title: "Modern Hand Knitted Bamboo Table Lamp | Diameter 17cm, Height 42cm | EU Plug",
  ads: "Elegant Hand Knitted Bamboo Table Lamp - Stylish & Eco-Friendly Lighting Solution",
  description: "Elevate your interior decor with this Modern Hand Knitted Bamboo Table Lamp. Crafted with intricate hand-knitted bamboo, this lamp combines natural aesthetics with contemporary design. Its compact diameter of 17cm and height of 42cm make it a versatile addition to any room. The EU plug ensures compatibility with European outlets, providing both functionality and style. Perfect for adding a touch of eco-friendly elegance to your living space.",
  specifications: [
    "Type: Hand Knitted Bamboo Table Lamp",
    "Dimensions: Diameter 17cm, Height 42cm",
    "Material: Bamboo",
    "Plug Type: EU Plug",
    "Design: Modern, Hand-Knitted",
    "Usage: Indoor Lighting",
    "Care Instructions: Wipe with a soft cloth, avoid moisture"
  ],
  rate: 45,
  cost: 2500
    },
    {
      image: "../images/twistedlight.jpeg",
      title: "Creative Asian Style Twisted Bamboo Mesh Pendant Light | 1-Light Beige Ceiling Suspension Lamp",
  ads: "Elegant Asian-Inspired Twisted Bamboo Mesh Pendant Light - Unique & Stylish",
  description: "Illuminate your space with the Creative Asian Style Twisted Bamboo Mesh Pendant Light. This one-light ceiling suspension lamp features a unique twisted bamboo mesh design, offering a blend of traditional Asian aesthetics and modern elegance. The beige color and intricate craftsmanship make it a standout piece, perfect for enhancing the ambiance of any room. Ideal for living areas, dining spaces, or bedrooms, this pendant light brings a touch of sophistication and cultural charm to your home.",
  specifications: [
    "Type: Twisted Bamboo Mesh Pendant Light",
    "Light Source: 1 Light",
    "Color: Beige",
    "Design: Asian-Inspired, Ceiling Suspension",
    "Material: Bamboo",
    "Usage: Indoor Lighting",
    "Dimensions: Specific dimensions not provided",
    "Care Instructions: Wipe with a soft cloth, avoid moisture"
  ],
  rate: 50,
  cost: 3000
    },
    {
      image: "../images/floorlamp.jpeg",
      title: "Bamboo Floor Lamp | Illuminate Your Space",
  ads: "Stylish Bamboo Floor Lamp - Perfect for Any Room",
  description: "Brighten up your home with the Bamboo Floor Lamp, a stylish and eco-friendly lighting solution that enhances any room. This floor lamp features a sleek bamboo design that adds a touch of natural elegance to your living space. With its minimalist and contemporary look, it's perfect for creating a warm and inviting atmosphere. Ideal for living rooms, bedrooms, or offices, this lamp combines functionality with sustainability, making it a practical choice for modern homes.",
  specifications: [
    "Type: Floor Lamp",
    "Material: Bamboo",
    "Design: Sleek and Modern",
    "Usage: Indoor Lighting",
    "Dimensions: Specific dimensions not provided",
    "Care Instructions: Dust regularly with a soft cloth"
  ],
  rate: 45,
  cost: 2500
    },
    {
      image: "../images/bedroomlamp.jpeg",
      title: "Bamboo Lamps | Bedroom & Desk Lamps | Ambient Lighting",
      ads: "Japanese Hand-Made & Natural Bamboo Lamps | Unique Design",
      description: "Elevate your space with our Bamboo Lamps, designed to offer both style and functionality. Perfect for bedroom or desk use, these hand-made lamps feature a unique Japanese-inspired design that brings a touch of natural elegance to any room. Standing at a medium height of 40 cm, these lamps provide ambient lighting that enhances the atmosphere while being eco-friendly. Crafted from natural bamboo, each lamp showcases a blend of traditional craftsmanship and modern aesthetics.",
      specifications: [
        "Type: Bedroom and Desk Lamps",
        "Material: Natural Bamboo",
        "Design: Japanese Hand-Made, Unique",
        "Dimensions: Medium, 40 cm height",
        "Usage: Ambient Lighting",
        "Care Instructions: Wipe clean with a damp cloth"
      ],
      rate: 50,
      cost: 2200
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
            <Link to={`/lighting/${index}`}>

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
