import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/Home";
import Form from "./components/Login";
// import Signup from "./components/Signup";
import AboutUs from "./components/AboutUs";
import ProductDetail from "./components/product/ProductDetail";

import { Decor } from "./components/Decor";

function App() {
  const array = [
    {
      image: "../images/2.jpg",
      title:
        "Premium Biodegradable Plates Set | 25 Plates, 25 Forks, 25 Knives",
      ads: "Ads by Etsy seller",
      description:
        "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth",
      ],
      rate: 29,
      cost: 2000,
    },
    {
      image: "../images/stand.jpg",
      title:
        "Handmade Bamboo Stand | Elegant and Sustainable | Perfect for Home Decor",
      ads: "Ads by Local Artisan",
      description:
        "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth",
      ],
      rate: 45,
      cost: 3500,
    },
    {
      image: "../images/vases.jpg",
      title: "Bamboo Vases | Set of 3 | Eco-Friendly | Natural Home Decor",
      ads: "Ads by Green Home",
      description:
        "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth",
      ],
      rate: 33,
      cost: 1500,
    },
    {
      image: "../images/decor.png",
      title: "Bamboo Cutlery Set | Travel-Friendly | 100% Biodegradable",
      ads: "Ads by EcoLiving",
      description:
        "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth",
      ],
      rate: 50,
      cost: 1200,
    },
    {
      image: "../images/board.webp",
      title:
        "Sustainable Bamboo Kitchen Utensils | 5-Piece Set | Ergonomic Design",
      ads: "Ads by Earthwise",
      description:
        "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth",
      ],
      rate: 37,
      cost: 1800,
    },
    {
      image: "../images/full.jpg",
      title: "Bamboo Fiber Dinnerware Set | 4 Plates, 4 Bowls, 4 Cups",
      ads: "Ads by Nature's Choice",
      description:
        "This beautiful handmade bamboo stand is the perfect addition to any home. Crafted with care by local artisans, it features a sleek and elegant design that fits seamlessly into both modern and traditional decor. Made from sustainable bamboo, it's not only eco-friendly but also durable and long-lasting.",
      specifications: [
        "Material: 100% Bamboo",
        "Dimensions: 12 x 8 x 20 inches",
        "Weight: 1.5 kg",
        "Color: Natural Bamboo",
        "Usage: Suitable for indoor and outdoor use",
        "Care Instructions: Wipe with a dry cloth",
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
