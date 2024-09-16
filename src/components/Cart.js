import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useCart } from "./CartContext";
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
    navigate(`/payment/product1234/${amount}`);
    console.log(cart);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-gray-700 hover:text-gray-900 transition-colors flex items-center"
        >
          <svg
            className="w-6 h-6"
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

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 text-center mb-6 sm:mb-8">
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
                  className={`flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 transition-opacity duration-300 ${
                    removingIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full sm:w-20 sm:h-20 h-40 object-cover rounded-md"
                    />
                    <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 w-full sm:w-auto">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-700 truncate">
                        {item.title}
                      </h3>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-0">
                    <div className="text-lg flex gap-1 font-bold text-green-600 mr-0 sm:mr-4">
                      <span>Rs</span> <span>{item.cost}</span>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-600 hover:text-red-800 mt-2 sm:mt-0"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8">
              <div className="text-lg sm:text-xl font-bold">
                Total:
                <span className="text-green-600 ml-1">
                  Rs {cart.reduce((sum, item) => sum + Number(item.cost), 0)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-4 sm:mt-0 py-3 px-4 sm:px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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
