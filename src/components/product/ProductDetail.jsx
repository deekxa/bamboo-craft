import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";

const ProductDetail = ({ image, title, description, specifications, cost }) => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className=" flex justify-center ">
        <div className=" justify-center  my-[50px]  flex w-[65%] flex-col lg:flex-row">
          <div className=" w-[45%] lg:mb-0 flex justify-center items-center">
            <img
              className=" shadow-lg w-[85%] h-[60vh] rounded-lg"
              src={image}
              alt={title}
            />
          </div>
          <div className=" w-[55%] lg:pl-8">
            <h2 className="w-full text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="mb-4">
              {specifications.map((spec, index) => (
                <li key={index} className="text-gray-700">
                  - {spec}
                </li>
              ))}
            </ul>
            <div className="text-2xl font-bold text-green-600 mb-6">
              RS {cost}
            </div>
            <button className="  w-full py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200">
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
