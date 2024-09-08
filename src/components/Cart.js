import React from "react";

import { useUser } from "@clerk/clerk-react"; // Get user email from Clerk
import { useCart } from "./CartContext";
import { API } from "../utils";
 // Import the cn utility

const Cart = () => {
  const { cart, clearCart } = useCart();
  const { user } = useUser(); // Get authenticated user's email


  const handleCheckout = async () => {
    // Handle checkout logic (e.g., creating a payment entry)
    const paymentData = {
      email: user.emailAddresses[0].emailAddress,
      items: cart,
      total: cart.reduce((sum, item) => sum + Number(item.cost), 0),
    };
console.log(cart);
    API.post("/payment", paymentData);

   
    clearCart();
    alert("Payment successful! A confirmation email has been sent.");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">
        Your Cart
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
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
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image} // Ensure you have image URLs in your product data
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
                  <div className="text-lg flex gap-1 font-bold text-green-600">
                    <span>Rs</span> <span>{item.cost} </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-8">
              <div className="text-xl font-bold">
                Total:
                <span className="text-green-600 ml-1">
                  RS {cart.reduce((sum, item) => sum + Number(item.cost), 0)}
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
