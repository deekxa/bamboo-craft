
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import { useCart } from "../CartContext";
import Navbar from "../navbar/Navbar";

const ProductDetail = () => {
  const location = useLocation();
    const { addToCart } = useCart();
  const { product } = location.state || {};  // Safely extract the product from state
  if (!product) {
    return <div>Product not found</div>;  // Handle case where no product is found
  }

  return (
    <>
    <Navbar />
      <div className="flex justify-center">
        <div className="my-[50px] flex w-[65%] flex-col lg:flex-row">
          <div className="w-[45%] lg:mb-0 flex justify-center items-center">
            <img
              className="shadow-lg w-[85%] h-[60vh] rounded-lg"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="w-[55%] lg:pl-8">
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="mb-4">
              {product.specifications.map((spec, index) => (
                <li key={index} className="text-gray-700">
                  - {spec}
                </li>
              ))}
            </ul>
            <div className="text-2xl font-bold text-green-600 mb-6">
              <div>RS {product.cost}</div>
            </div>
            <button  onClick={() => addToCart(product)} className="w-full py-3 px-6 bg-green-400 text-white rounded-lg hover:bg-green-600 transition-colors duration-200">
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
