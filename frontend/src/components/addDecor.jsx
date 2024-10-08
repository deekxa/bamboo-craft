import React, { useState } from "react";
import { useApproval } from "./approvalContext";
import { useNavigate } from "react-router-dom";

function AddProduct({ formOpeningStateTrigger }) {
  const { addToApproval } = useApproval();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    specifications: [],
    cost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSpecsChange = (e) => {
    setFormData({
      ...formData,
      specifications: e.target.value.split(",").map((spec) => spec.trim()),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sanitizeInput = (input) => {
      if (input === "") {
        return "0";
      }
      const extractedNumber = input.match(/\d+/);
      return extractedNumber ? extractedNumber[0].toString() : "0";
    };

    const sanitizedFormData = {
      ...formData,
      cost: sanitizeInput(formData.cost),
      productType: "decor",
    };

    console.log("Adding decor product:", sanitizedFormData);
    addToApproval(sanitizedFormData);

    navigate("/decor");
    formOpeningStateTrigger(false);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg sm:max-w-md md:max-w-lg">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">
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
            placeholder="e.g., Material: Bamboo Fiber, Dimensions: 10x15 cm"
            value={formData.specifications.join(", ")}
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
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
