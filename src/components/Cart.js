import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useCart } from "./CartContext";
import { API } from "../utils";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeFromCart, removingIndex } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const paymentData = {
      email: user.emailAddresses[0].emailAddress,
      items: cart,
      total: cart.reduce((sum, item) => sum + Number(item.cost), 0),
    };
    const amount = cart.reduce((sum, item) => sum + Number(item.cost), 0);
    navigate("/payment/product1234/"+amount)


    console.log(cart);
  
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <svg
            className="w-6 h-6 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="ml-2">Back</span>
        </button>

        <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-600">Your cart is empty!</p>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between py-4 transition-opacity duration-300 ${
                    removingIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-700">
                        {item.title}
                      </h3>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg flex gap-1 font-bold text-green-600 mr-4">
                      <span>Rs</span> <span>{item.cost} </span>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-8">
              <div className="text-xl font-bold">
                Total:
                <span className="text-green-600 ml-1">
                  Rs {cart.reduce((sum, item) => sum + Number(item.cost), 0)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
