import React, { useState } from "react";
import { API } from "../utils";

function AddProduct({formOpeningStateTrigger}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    specifications: [], // Initialize as an array
    cost: 0,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle specifications (comma-separated)
  const handleSpecsChange = (e) => {
    setFormData({
      ...formData,
      specifications: e.target.value.split(",").map((spec) => spec.trim()), // Split and trim whitespace
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    API.post("/decor",formData)
    formOpeningStateTrigger(false);
    // Submit form data to server or perform necessary action
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Add New Decor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Specifications (comma-separated):
          </label>
          <input
            type="text"
            name="specifications"
            placeholder="example Material: Bamboo Fiber,Dimensions: Varies by Vase"
            value={formData.specifications.join(", ")} // Display the array as a string
            onChange={handleSpecsChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Cost:</label>
          <input
            type="text"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
