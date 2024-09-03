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
      image: "../images/Bamboo Plates.jpeg",
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
        "Care Instructions: Single-use, biodegradable",
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
        "Care Instructions: Wipe clean with a dry cloth",
      ],

      rate: 45,
      cost: 3500,
    },
    {
      image: "../images/vases.jpg",
      title:
        "Handcrafted Bamboo Vases | Set of 3 | Natural and Sustainable Decor",
      ads: "Ads by Green Home",
      description:
        "Enhance your living space with this set of 3 handcrafted bamboo vases. Each vase is carefully made by skilled artisans, highlighting the natural beauty and texture of bamboo. These eco-friendly vases are perfect for displaying fresh or dried flowers, adding a touch of nature to your home decor. The minimalist design allows them to blend seamlessly into any interior style, from modern to rustic. Sustainable and stylish, these bamboo vases are an excellent choice for environmentally-conscious home decor enthusiasts.",
      specifications: [
        "Material: 100% Bamboo",
        "Set Includes: 3 vases of varying sizes",
        "Color: Natural Bamboo",
        "Usage: Ideal for displaying fresh or dried flowers",
        "Care Instructions: Wipe clean with a dry cloth",
      ],

      rate: 33,
      cost: 1500,
    },
    {
      image: "../images/cutlarysets.jpeg",
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
        "Care Instructions: Hand wash and air dry for best results",
      ],

      rate: 50,
      cost: 1200,
    },
    {
      image: "../images/cuttingboard.jpeg",
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
        "Care Instructions: Hand wash with warm water and mild detergent, air dry",
      ],

      rate: 37,
      cost: 1800,
    },
    {
      image: "../images/full.jpg",
      title:
        "Sustainable Bamboo Fiber Dinnerware Set | 16-Piece | Stylish & Durable",
      ads: "Ads by Nature's Choice",
      description:
        "Enhance your dining experience with this sustainable bamboo fiber dinnerware set. The set includes 4 plates, 4 bowls, 4 cups, and 4 saucers, all crafted from eco-friendly bamboo fiber. These lightweight yet durable pieces are perfect for both everyday meals and special occasions. The natural bamboo fiber material not only adds a unique touch to your table but also reflects a commitment to sustainability. Whether you're hosting a dinner party or enjoying a casual meal, this set offers a perfect blend of style, functionality, and environmental responsibility.",
      specifications: [
        "Material: Bamboo Fiber",
        "Set Includes: 4 Plates, 4 Bowls, 4 Cups, 4 Saucers",
        "Color: Natural Bamboo Fiber Finish",
        "Usage: Ideal for everyday dining, picnics, and special occasions",
        "Care Instructions: Hand wash with mild detergent, avoid microwave use",
      ],

      rate: 42,
      cost: 2400,
    },
  ];
  //Lighting
  const array1 = [
    {
      image: "../images/tablelamp.jpeg",
      title:
        "Tatami Table Lamp | Design B | Compact & Elegant Lighting Solution",
      ads: "Illuminate Your Space with the Tatami Table Lamp - Modern & Minimalist Design",
      description:
        "The Tatami Table Lamp in Design B is a perfect blend of modern elegance and functional lighting. With a compact diameter of 18.5 cm and a height of 42 cm, this lamp is designed to add a touch of sophistication to any room. The minimalist aesthetic, combined with high-quality materials, makes it an ideal choice for those looking to enhance their home decor with a stylish and efficient lighting solution.",
      specifications: [
        "Design: B",
        "Dimensions: 18.5 cm (Diameter) x 42 cm (Height)",
        "Material: Premium Bamboo & Tatami",
        "Color: Natural & Neutral Tones",
        "Light Source: LED (Included)",
        "Usage: Table Lamp, Ideal for Living Rooms, Bedrooms, or Offices",
        "Care Instructions: Wipe clean with a dry cloth, avoid using abrasive cleaners",
      ],
      rate: 40,
      cost: 3500,
    },
    {
      image: "../images/solarlarteen.jpeg",
      title:
        "1 Pack Portable Waterproof Candle Light Outdoor Solar Lanterns | Dazuma",
      ads: "Brighten Your Outdoors with Dazuma Solar Lanterns - Durable & Eco-Friendly Lighting",
      description:
        "Illuminate your outdoor space with the Dazuma Portable Waterproof Candle Light Solar Lantern. Designed for durability and efficiency, this lantern features a solar-powered LED light, making it a sustainable choice for outdoor lighting. Its waterproof design ensures reliable performance in various weather conditions, while its portable nature makes it perfect for camping, hiking, or any outdoor adventure.",
      specifications: [
        "Type: Portable Solar Lantern",
        "Features: Waterproof, Solar-Powered LED",
        "Material: High-Durability Plastic and Metal",
        "Color: Neutral Tones",
        "Dimensions: Compact and Lightweight",
        "Usage: Outdoor Lighting, Camping, Hiking",
        "Care Instructions: Keep away from extreme weather conditions, clean with a damp cloth",
      ],
      rate: 25,
      cost: 1200,
    },
    {
      image: "../images/handknittedlampp.jpeg",
      title:
        "Modern Hand Knitted Bamboo Table Lamp | Diameter 17cm, Height 42cm | EU Plug",
      ads: "Elegant Hand Knitted Bamboo Table Lamp - Stylish & Eco-Friendly Lighting Solution",
      description:
        "Elevate your interior decor with this Modern Hand Knitted Bamboo Table Lamp. Crafted with intricate hand-knitted bamboo, this lamp combines natural aesthetics with contemporary design. Its compact diameter of 17cm and height of 42cm make it a versatile addition to any room. The EU plug ensures compatibility with European outlets, providing both functionality and style. Perfect for adding a touch of eco-friendly elegance to your living space.",
      specifications: [
        "Type: Hand Knitted Bamboo Table Lamp",
        "Dimensions: Diameter 17cm, Height 42cm",
        "Material: Bamboo",
        "Plug Type: EU Plug",
        "Design: Modern, Hand-Knitted",
        "Usage: Indoor Lighting",
        "Care Instructions: Wipe with a soft cloth, avoid moisture",
      ],
      rate: 45,
      cost: 2500,
    },
    {
      image: "../images/twistedlight.jpeg",
      title:
        "Creative Asian Style Twisted Bamboo Mesh Pendant Light | 1-Light Beige Ceiling Suspension Lamp",
      ads: "Elegant Asian-Inspired Twisted Bamboo Mesh Pendant Light - Unique & Stylish",
      description:
        "Illuminate your space with the Creative Asian Style Twisted Bamboo Mesh Pendant Light. This one-light ceiling suspension lamp features a unique twisted bamboo mesh design, offering a blend of traditional Asian aesthetics and modern elegance. The beige color and intricate craftsmanship make it a standout piece, perfect for enhancing the ambiance of any room. Ideal for living areas, dining spaces, or bedrooms, this pendant light brings a touch of sophistication and cultural charm to your home.",
      specifications: [
        "Type: Twisted Bamboo Mesh Pendant Light",
        "Light Source: 1 Light",
        "Color: Beige",
        "Design: Asian-Inspired, Ceiling Suspension",
        "Material: Bamboo",
        "Usage: Indoor Lighting",
        "Dimensions: Specific dimensions not provided",
        "Care Instructions: Wipe with a soft cloth, avoid moisture",
      ],
      rate: 50,
      cost: 3000,
    },
    {
      image: "../images/floorlamp.jpeg",
      title: "Bamboo Floor Lamp | Illuminate Your Space",
      ads: "Stylish Bamboo Floor Lamp - Perfect for Any Room",
      description:
        "Brighten up your home with the Bamboo Floor Lamp, a stylish and eco-friendly lighting solution that enhances any room. This floor lamp features a sleek bamboo design that adds a touch of natural elegance to your living space. With its minimalist and contemporary look, it's perfect for creating a warm and inviting atmosphere. Ideal for living rooms, bedrooms, or offices, this lamp combines functionality with sustainability, making it a practical choice for modern homes.",
      specifications: [
        "Type: Floor Lamp",
        "Material: Bamboo",
        "Design: Sleek and Modern",
        "Usage: Indoor Lighting",
        "Dimensions: Specific dimensions not provided",
        "Care Instructions: Dust regularly with a soft cloth",
      ],
      rate: 45,
      cost: 2500,
    },
    {
      image: "../images/bedroomlamp.jpeg",
      title: "Bamboo Lamps | Bedroom & Desk Lamps | Ambient Lighting",
      ads: "Japanese Hand-Made & Natural Bamboo Lamps | Unique Design",
      description:
        "Elevate your space with our Bamboo Lamps, designed to offer both style and functionality. Perfect for bedroom or desk use, these hand-made lamps feature a unique Japanese-inspired design that brings a touch of natural elegance to any room. Standing at a medium height of 40 cm, these lamps provide ambient lighting that enhances the atmosphere while being eco-friendly. Crafted from natural bamboo, each lamp showcases a blend of traditional craftsmanship and modern aesthetics.",
      specifications: [
        "Type: Bedroom and Desk Lamps",
        "Material: Natural Bamboo",
        "Design: Japanese Hand-Made, Unique",
        "Dimensions: Medium, 40 cm height",
        "Usage: Ambient Lighting",
        "Care Instructions: Wipe clean with a damp cloth",
      ],
      rate: 50,
      cost: 2200,
    },
  ];
  //personalcare
  const array2 = [
    {
      image: "../Images/cottonbud.jpeg",
      title:
        "Quest 200 Cotton Buds | Cotton Wool With Bamboo Stem | High Quality Ear Buds",
      ads: "Ads by Earthwise",
      description:
        "These high-quality ear buds feature 100% cotton wool tips with a durable bamboo stem, combining eco-friendliness with effective functionality. Perfect for daily hygiene needs, they offer a sustainable alternative to traditional plastic stemmed cotton buds.",
      specifications: [
        "Material: 100% Cotton Wool, Bamboo Stem",
        "Quantity: 200 Buds",
        "Weight: Lightweight",
        "Color: Natural Bamboo",
        "Usage: Personal Care, Hygiene",
        "Care Instructions: Store in a dry place",
      ],
      rate: 45,
      cost: 350,
    },
    {
      image: "../images/haircomb.jpeg",
      title:
        "Bamboo Pointed Wide Tooth Comb | Hair Care | Bathroom | Eco Friendly | Plastic Free | Sustainable | Plant Based | Compostable | Natural",
      ads: "Ads by Earthwise",
      description:
        "The Bamboo Pointed Wide Tooth Comb is designed for gentle detangling and everyday hair care. Made from 100% natural bamboo, this eco-friendly comb is perfect for all hair types, helping reduce breakage and maintain healthy hair. Its wide-tooth design is especially beneficial for curly and thick hair.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 20cm x 5cm",
        "Weight: Lightweight",
        "Color: Natural Bamboo",
        "Usage: Hair Care",
        "Care Instructions: Hand wash and dry thoroughly",
      ],
      rate: 42,
      cost: 1200,
    },
    {
      image: "../images/lotionbottle.jpeg",
      title:
        "Bamboo Lotion Bottle | Refillable | Eco-Friendly | Sustainable | Plastic-Free | Natural Skincare | Bathroom Essential",
      ads: "Ads by Earthwise",
      description:
        "This Bamboo Lotion Bottle offers a stylish and sustainable solution for your skincare routine. Made from 100% bamboo with a durable, refillable design, it helps reduce plastic waste while adding a touch of natural elegance to your bathroom. Perfect for lotions, creams, or liquid soaps.",
      specifications: [
        "Material: 100% Bamboo and Glass (Inner Bottle)",
        "Capacity: 200ml",
        "Dimensions: 15cm x 6cm",
        "Weight: Lightweight",
        "Color: Natural Bamboo",
        "Usage: Skincare, Liquid Storage",
        "Care Instructions: Hand wash and dry thoroughly; refill as needed",
      ],
      rate: 45,
      cost: 1500,
    },
    {
      image: "../images/toothbrush.jpeg",
      title:
        "NUDUKO Biodegradable Bamboo Toothbrushes | 10-Piece Set | BPA-Free Soft Bristles | Eco-Friendly | Compostable | Natural Oral Care",
      ads: "Sustainably Yours - Eco Conscious Living",
      description:
        "Switch to a greener lifestyle with the NUDUKO Biodegradable Bamboo Toothbrushes. This 10-piece set features soft, BPA-free bristles, ensuring a gentle yet effective clean. Made from natural bamboo, these toothbrushes are fully compostable and perfect for those committed to reducing plastic waste. Ideal for daily oral care.",
      specifications: [
        "Material: 100% Bamboo (Handle) and BPA-Free Nylon (Bristles)",
        "Bristle Type: Soft",
        "Quantity: 10 Toothbrushes",
        "Color: Natural Bamboo Handle with Green Bristles",
        "Usage: Daily Oral Care",
        "Eco-Friendly: Biodegradable and Compostable",
        "Care Instructions: Store in a dry place after use",
      ],
      rate: 55,
      cost: 1200,
    },
    {
      image: "../images/hairbrush.jpeg",
      title:
        "100% Compostable Plastic-Free Hair Brush Set | Bamboo & Natural Rubber | Includes Cotton Pouch & Brush Cleaner | Eco-Friendly Gift",
      ads: "Earth-Conscious Beauty - Your Sustainable Choice",
      description:
        "Embrace eco-friendly hair care with this 100% compostable, plastic-free hairbrush set. Crafted from sustainable bamboo and natural rubber, this set includes a brush cleaner and a cotton pouch, making it a perfect gift for those committed to reducing their environmental impact. Ships next day for quick delivery.",
      specifications: [
        "Material: 100% Bamboo (Handle), Natural Rubber (Bristle Base)",
        "Included: Cotton Pouch, Brush Cleaner",
        "Dimensions: Standard Hair Brush Size",
        "Weight: Lightweight and Durable",
        "Color: Natural Bamboo",
        "Usage: Suitable for All Hair Types",
        "Eco-Friendly: Fully Compostable and Plastic-Free",
        "Care Instructions: Hand wash brush and pouch, air dry",
      ],
      rate: 40,
      cost: 1500,
    },
    {
      image: "../images/soapbar.jpeg",
      title:
        "Brockton Bamboo Bathroom Accessories | Elegant & Sustainable | 5-Piece Set",
      ads: "Upgrade Your Bathroom - Go Green with Brockton",
      description:
        "Elevate your bathroom decor with the Brockton Bamboo Bathroom Accessories set. This 5-piece set includes everything you need for an elegant and eco-friendly bathroom upgrade. Crafted from premium bamboo, these accessories are not only stylish but also sustainable, making them the perfect choice for a green lifestyle.",
      specifications: [
        "Material: 100% Bamboo",
        "Included: Soap Dispenser, Toothbrush Holder, Soap Dish, Tumbler, Trash Bin",
        "Finish: Smooth and Water-Resistant",
        "Color: Natural Bamboo",
        "Usage: Bathroom Accessories",
        "Eco-Friendly: Sustainable and Renewable Material",
        "Care Instructions: Wipe clean with a damp cloth, avoid soaking",
      ],
      rate: 45,
      cost: 2200,
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
                  path={`/decor/${index}`}
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
                  path={`/lighting/${index}`}
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
                path={`/personalcare/${index}`}
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
