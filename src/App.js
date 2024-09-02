import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/Home";
import Form from "./components/Login";
// import Signup from "./components/Signup";
import AboutUs from "./components/AboutUs";
import ProductDetail from "./components/product/ProductDetail";
import { Lighting } from "./components/Lighting";


import { Decor } from "./components/Decor";
import { PersonalCare } from "./components/PersonalCare";

function App() {
  //decor
  const array = [
    {
      image: "../images/2.jpg",
      title: "Eco-Friendly Bamboo Cutlery Set | 25 Plates, 25 Forks, 25 Knives",
      ads: "Ads by Etsy seller",
      description:
        "This eco-friendly bamboo cutlery set is perfect for your next event or gathering. The set includes 25 biodegradable plates, 25 sturdy bamboo forks, and 25 knives, offering a sustainable alternative to disposable plasticware. These plates and utensils are made from 100% natural bamboo, ensuring durability while being gentle on the environment. Ideal for both indoor and outdoor occasions, this set combines elegance with functionality, making it a great choice for any eco-conscious host.",
      specifications: [
        "Material: 100% Natural Bamboo",
        "Includes: 25 Plates, 25 Forks, 25 Knives",
        "Plate Dimensions: 10 inches (diameter)",
        "Weight: Lightweight and portable",
        "Color: Natural Bamboo",
        "Usage: Suitable for picnics, parties, and events",
        "Care Instructions: Single-use, biodegradable"
      ],
      
     
      rate: 29,
      cost: 2000,
    },
    {
      image: "../images/stand.jpg",
      title: "Handcrafted Bamboo Display Stand | Versatile and Eco-Friendly",
      ads: "Ads by Local Artisan",
      description:
        "This handcrafted bamboo display stand is an ideal piece for showcasing your favorite items, whether at home or in a retail setting. Meticulously crafted by local artisans, this stand offers a blend of elegance and sustainability. Its natural bamboo finish complements various decor styles, while its sturdy construction ensures longevity. Perfect for holding plants, books, or decorative items, this versatile stand enhances any space with its simple yet sophisticated design.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Ideal for displaying plants, books, or decor items",
        "Care Instructions: Wipe clean with a dry cloth"
      ],
      
      
      rate: 45,
      cost: 3500,
    },
    {
      image: "../images/vases.jpg",
      title: "Handcrafted Bamboo Vases | Set of 3 | Natural and Sustainable Decor",
      ads: "Ads by Green Home",
      description:
        "Enhance your living space with this set of 3 handcrafted bamboo vases. Each vase is carefully made by skilled artisans, highlighting the natural beauty and texture of bamboo. These eco-friendly vases are perfect for displaying fresh or dried flowers, adding a touch of nature to your home decor. The minimalist design allows them to blend seamlessly into any interior style, from modern to rustic. Sustainable and stylish, these bamboo vases are an excellent choice for environmentally-conscious home decor enthusiasts.",
      specifications: [
        "Material: 100% Bamboo",
        "Set Includes: 3 vases of varying sizes",
        "Color: Natural Bamboo",
        "Usage: Ideal for displaying fresh or dried flowers",
        "Care Instructions: Wipe clean with a dry cloth"
      ],
      
      
      rate: 33,
      cost: 1500,
    },
    {
      image: "../images/decor.png",
title: "Portable Bamboo Cutlery Set | Eco-Friendly Travel Essentials",
ads: "Ads by EcoLiving",
description:
  "This portable bamboo cutlery set is the perfect companion for eco-conscious travelers. The set includes a fork, knife, spoon, and chopsticks, all made from 100% biodegradable bamboo. Designed for durability and convenience, each piece is lightweight and easy to carry, making it ideal for picnics, camping trips, or everyday use. The natural bamboo finish offers a stylish and sustainable alternative to single-use plastic cutlery, helping you reduce your environmental footprint wherever you go.",
specifications: [
  "Material: 100% Bamboo",
  "Set Includes: Fork, Knife, Spoon, Chopsticks",
  "Weight: Lightweight and portable",
  "Color: Natural Bamboo",
  "Usage: Perfect for travel, camping, and daily use",
  "Care Instructions: Hand wash and air dry for best results"
],

      
      rate: 50,
      cost: 1200,
    },
    {
      image: "../images/board.webp",
title: "Bamboo Cutting Board | Eco-Friendly | Durable & Knife-Friendly",
ads: "Ads by Earthwise",
description:
  "Upgrade your kitchen with this eco-friendly bamboo cutting board, designed to be both durable and knife-friendly. Made from 100% sustainable bamboo, this cutting board is perfect for all your chopping, slicing, and dicing needs. Its natural bamboo surface is gentle on knives, reducing wear and tear while providing a sturdy surface for food preparation. The board's sleek and minimalist design makes it a stylish addition to any kitchen, blending seamlessly with modern and traditional decor. Easy to clean and maintain, this bamboo cutting board is a must-have for eco-conscious chefs.",
specifications: [
  "Material: 100% Bamboo",
  "Dimensions: 15 x 11 x 0.75 inches",
  "Weight: 1.2 kg",
  "Color: Natural Bamboo",
  "Usage: Ideal for chopping, slicing, and dicing",
  "Care Instructions: Hand wash with warm water and mild detergent, air dry"
],

      
      rate: 37,
      cost: 1800,
    },
    {
      image: "../images/full.jpg",
title: "Sustainable Bamboo Fiber Dinnerware Set | 16-Piece | Stylish & Durable",
ads: "Ads by Nature's Choice",
description:
  "Enhance your dining experience with this sustainable bamboo fiber dinnerware set. The set includes 4 plates, 4 bowls, 4 cups, and 4 saucers, all crafted from eco-friendly bamboo fiber. These lightweight yet durable pieces are perfect for both everyday meals and special occasions. The natural bamboo fiber material not only adds a unique touch to your table but also reflects a commitment to sustainability. Whether you're hosting a dinner party or enjoying a casual meal, this set offers a perfect blend of style, functionality, and environmental responsibility.",
specifications: [
  "Material: Bamboo Fiber",
  "Set Includes: 4 Plates, 4 Bowls, 4 Cups, 4 Saucers",
  "Color: Natural Bamboo Fiber Finish",
  "Usage: Ideal for everyday dining, picnics, and special occasions",
  "Care Instructions: Hand wash with mild detergent, avoid microwave use"
],



      
      rate: 42,
      cost: 2400,
    },
  ];
  //Lighting
  const array1 = [
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
    { image: "../images/floorlamp.jpg",
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
  //personal care
  const array2 = [
    {
      image: "../images/2.jpg",
      title: "muji sala kawadi Eco-Friendly Bamboo Cutlery Set | 25 Plates, 25 Forks, 25 Knives",
      ads: "Ads by Etsy seller",
      description:
        "This eco-friendly bamboo cutlery set is perfect for your next event or gathering. The set includes 25 biodegradable plates, 25 sturdy bamboo forks, and 25 knives, offering a sustainable alternative to disposable plasticware. These plates and utensils are made from 100% natural bamboo, ensuring durability while being gentle on the environment. Ideal for both indoor and outdoor occasions, this set combines elegance with functionality, making it a great choice for any eco-conscious host.",
      specifications: [
        "Material: 100% Natural Bamboo",
        "Includes: 25 Plates, 25 Forks, 25 Knives",
        "Plate Dimensions: 10 inches (diameter)",
        "Weight: Lightweight and portable",
        "Color: Natural Bamboo",
        "Usage: Suitable for picnics, parties, and events",
        "Care Instructions: Single-use, biodegradable"
      ],
      
     
      rate: 29,
      cost: 2000,
    },
    {
      image: "../images/stand.jpg",
      title: "Handcrafted Bamboo Display Stand | Versatile and Eco-Friendly",
      ads: "Ads by Local Artisan",
      description:
        "This handcrafted bamboo display stand is an ideal piece for showcasing your favorite items, whether at home or in a retail setting. Meticulously crafted by local artisans, this stand offers a blend of elegance and sustainability. Its natural bamboo finish complements various decor styles, while its sturdy construction ensures longevity. Perfect for holding plants, books, or decorative items, this versatile stand enhances any space with its simple yet sophisticated design.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Ideal for displaying plants, books, or decor items",
        "Care Instructions: Wipe clean with a dry cloth"
      ],
      
      
      rate: 45,
      cost: 3500,
    },
    {
      image: "../images/vases.jpg",
      title: "Handcrafted Bamboo Vases | Set of 3 | Natural and Sustainable Decor",
      ads: "Ads by Green Home",
      description:
        "Enhance your living space with this set of 3 handcrafted bamboo vases. Each vase is carefully made by skilled artisans, highlighting the natural beauty and texture of bamboo. These eco-friendly vases are perfect for displaying fresh or dried flowers, adding a touch of nature to your home decor. The minimalist design allows them to blend seamlessly into any interior style, from modern to rustic. Sustainable and stylish, these bamboo vases are an excellent choice for environmentally-conscious home decor enthusiasts.",
      specifications: [
        "Material: 100% Bamboo",
        "Set Includes: 3 vases of varying sizes",
        "Color: Natural Bamboo",
        "Usage: Ideal for displaying fresh or dried flowers",
        "Care Instructions: Wipe clean with a dry cloth"
      ],
      
      
      rate: 33,
      cost: 1500,
    },
    {
      image: "../images/decor.png",
title: "Portable Bamboo Cutlery Set | Eco-Friendly Travel Essentials",
ads: "Ads by EcoLiving",
description:
  "This portable bamboo cutlery set is the perfect companion for eco-conscious travelers. The set includes a fork, knife, spoon, and chopsticks, all made from 100% biodegradable bamboo. Designed for durability and convenience, each piece is lightweight and easy to carry, making it ideal for picnics, camping trips, or everyday use. The natural bamboo finish offers a stylish and sustainable alternative to single-use plastic cutlery, helping you reduce your environmental footprint wherever you go.",
specifications: [
  "Material: 100% Bamboo",
  "Set Includes: Fork, Knife, Spoon, Chopsticks",
  "Weight: Lightweight and portable",
  "Color: Natural Bamboo",
  "Usage: Perfect for travel, camping, and daily use",
  "Care Instructions: Hand wash and air dry for best results"
],

      
      rate: 50,
      cost: 1200,
    },
    {
      image: "../images/board.webp",
title: "Bamboo Cutting Board | Eco-Friendly | Durable & Knife-Friendly",
ads: "Ads by Earthwise",
description:
  "Upgrade your kitchen with this eco-friendly bamboo cutting board, designed to be both durable and knife-friendly. Made from 100% sustainable bamboo, this cutting board is perfect for all your chopping, slicing, and dicing needs. Its natural bamboo surface is gentle on knives, reducing wear and tear while providing a sturdy surface for food preparation. The board's sleek and minimalist design makes it a stylish addition to any kitchen, blending seamlessly with modern and traditional decor. Easy to clean and maintain, this bamboo cutting board is a must-have for eco-conscious chefs.",
specifications: [
  "Material: 100% Bamboo",
  "Dimensions: 15 x 11 x 0.75 inches",
  "Weight: 1.2 kg",
  "Color: Natural Bamboo",
  "Usage: Ideal for chopping, slicing, and dicing",
  "Care Instructions: Hand wash with warm water and mild detergent, air dry"
],

      
      rate: 37,
      cost: 1800,
    },
    {
      image: "../images/full.jpg",
title: "Sustainable Bamboo Fiber Dinnerware Set | 16-Piece | Stylish & Durable",
ads: "Ads by Nature's Choice",
description:
  "Enhance your dining experience with this sustainable bamboo fiber dinnerware set. The set includes 4 plates, 4 bowls, 4 cups, and 4 saucers, all crafted from eco-friendly bamboo fiber. These lightweight yet durable pieces are perfect for both everyday meals and special occasions. The natural bamboo fiber material not only adds a unique touch to your table but also reflects a commitment to sustainability. Whether you're hosting a dinner party or enjoying a casual meal, this set offers a perfect blend of style, functionality, and environmental responsibility.",
specifications: [
  "Material: Bamboo Fiber",
  "Set Includes: 4 Plates, 4 Bowls, 4 Cups, 4 Saucers",
  "Color: Natural Bamboo Fiber Finish",
  "Usage: Ideal for everyday dining, picnics, and special occasions",
  "Care Instructions: Hand wash with mild detergent, avoid microwave use"
],



      
      rate: 42,
      cost: 2400,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<Form />} />
          {/* <Route path="/signup" element={<Signup/>} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/decor" element={<Decor />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/personalcare" element={<PersonalCare />} />

          {array.map((data, index) => {
            return (
              
              <>
                {" "}
                <Route
                  path={`/productdetail/${index}`}
                  element={
                    <ProductDetail
                      title={data.title}
                      description={data.description}
                      cost={data.cost} 
                      specifications={data.specifications} 
                      image={data.image} 
                    />
                  }
                />
              </>
            );
          })}
 {/* //Lighting */}
{array1.map((data, index) => {
            return (
              
              <>
                {" "}
                <Route
                  path={`/productdetail/lighting/${index}`}
                  element={
                    <ProductDetail
                      title={data.title}
                      description={data.description}
                      cost={data.cost} 
                      specifications={data.specifications} 
                      image={data.image} 
                    />
                  }
                />
              </>
            );
          })}
 {/* //Personalcare */}
{/* Personal Care */}
{array2.map((data, index) => {
  return (
    <Route
      key={index}
      path={`/productdetail/personalcare/${index}`}
      element={
        <ProductDetail
          title={data.title}
          description={data.description}
          cost={data.cost} 
          specifications={data.specifications} 
          image={data.image} 
        />
      }
    />
  );
})}

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
