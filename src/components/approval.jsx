import React from "react";
import { useApproval } from "./approvalContext";
import { useUser } from "@clerk/clerk-react";
import { API } from "../utils";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Approval = () => {
  const { approvals, handleApprove } = useApproval();
  const navigate = useNavigate(); // Initialize useNavigate

  const totalCost = approvals.reduce(
    (sum, item) => sum + Number(item.cost || 0),
    0
  );

  const handleApproveSubmit = async () => {
    if (approvals.length === 0) {
      alert("No items to approve.");
      return;
    }

    const item = approvals[0]; // There's only one item
    const { productType, ...sanitizedItem } = item; // Remove productType from the item data

    // Format the data according to the backend expectations
    const formattedData = {
      title: sanitizedItem.title,
      description: sanitizedItem.description,
      specifications: sanitizedItem.specifications,
      cost: sanitizedItem.cost,
    };

    console.log("Item being approved:", formattedData); // Debug log

    const endpoint = `/${productType}`; // This will be '/decor', '/care', or '/lighting'
    console.log("Endpoint:", endpoint); // Debug
    console.log("Approval Data:", formattedData); // Debug
    navigate("/");
    try {
      const response = await API.post(endpoint, formattedData);
      console.log("Server response:", response);
      handleApprove();
      alert("Product created successfully!");
    } catch (error) {
      console.error("Error submitting approval:", error);
      alert("There was an error creating the product. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">
        Your Approval
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {approvals.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Your approval list is empty!
            </p>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {approvals.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img || "../images/full.jpg"}
                      alt={item.title}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-700">
                        {item.title}
                      </h3>
                      <p className="text-gray-500">{item.description}</p>
                      {item.specifications &&
                        item.specifications.length > 0 && (
                          <p className="text-sm text-gray-500">
                            Specifications: {item.specifications.join(", ")}
                          </p>
                        )}
                      <p className="text-sm text-gray-500">
                        Type: {item.productType}
                      </p>
                    </div>
                  </div>
                  <div className="text-lg flex gap-1 font-bold text-green-600">
                    <span>Rs</span> <span>{item.cost}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-8">
              <div className="text-xl font-bold">
                Total:{" "}
                <span className="text-green-600 ml-1">Rs {totalCost}</span>
              </div>
              <button
                onClick={handleApproveSubmit}
                className="py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Approve
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Approval;
