import React, { createContext, useContext, useState } from "react";


const approvalContext = createContext();

export const useApproval = () => useContext(approvalContext);

export const ApprovalProvider = ({ children }) => {
  const [approvals, setApprovals] = useState([]);

  const addToApproval = (product) => {
    setApprovals((prevProduct) => [...prevProduct, product]);
  };

  

  return (
    <approvalContext.Provider value={{ approvals, addToApproval }}>
      {children}
    </approvalContext.Provider>
  );
};

