import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import { useCart } from "../CartContext";
import Navbar from "../navbar/Navbar";

const ProductDetail = () => {
  const location = useLocation();
  const { addToCart } = useCart();
  const { product } = location.state || {};  

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center px-4">
        <div className="my-[50px] flex w-full max-w-5xl flex-col lg:flex-row">
          <div className="w-full lg:w-[45%] lg:mb-0 flex justify-center items-center mb-6 lg:mb-0">
            <img
              className="shadow-lg w-[100%] lg:w-[85%] h-[40vh] lg:h-[60vh] rounded-lg object-cover"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="w-full lg:w-[55%] lg:pl-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="mb-4">
              {product.specifications.map((spec, index) => (
                <li key={index} className="text-gray-700">
                  - {spec}
                </li>
              ))}
            </ul>
            <div className="text-xl lg:text-2xl font-bold text-green-600 mb-6">
              <div>RS {product.cost}</div>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="w-full py-3 px-6 bg-green-400 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
