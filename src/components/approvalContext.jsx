// src/components/approvalContext.jsx
import React, { createContext, useContext, useState } from "react";

const ApprovalContext = createContext();

export const useApproval = () => {
  const context = useContext(ApprovalContext);
  if (context === undefined) {
    throw new Error("useApproval must be used within an ApprovalProvider");
  }
  return context;
};

export const ApprovalProvider = ({ children }) => {
  const [approvals, setApprovals] = useState([]);

  const addToApproval = (product) => {
    if (product && product.title) {
      setApprovals((prevApprovals) => [
        ...prevApprovals,
        {
          ...product,
          img: product.img || "../images/full.jpg",
        },
      ]);
    }
  };

  const removeFromApproval = (index) => {
    setApprovals((prevApprovals) =>
      prevApprovals.filter((_, i) => i !== index)
    );
  };

  const handleApprove = async () => {
    try {
      console.log("Items approved");
      setApprovals([]);
    } catch (error) {
      console.error("Error approving items:", error);
    }
  };

  return (
    <ApprovalContext.Provider
      value={{ approvals, addToApproval, removeFromApproval, handleApprove }}
    >
      {children}
    </ApprovalContext.Provider>
  );
};
