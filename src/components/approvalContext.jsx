// // import React, { createContext, useContext, useState } from "react";

// // const ApprovalContext = createContext();

// // export const useApproval = () => {
// //   const context = useContext(ApprovalContext);
// //   if (context === undefined) {
// //     throw new Error("useApproval must be used within an ApprovalProvider");
// //   }
// //   return context;
// // };

// // export const ApprovalProvider = ({ children }) => {
// //   const [approvals, setApprovals] = useState([]);

// //   const addToApproval = (product) => {
// //     if (product && product.title) {
// //       // Only add if it's a valid product
// //       setApprovals((prevProducts) => [
// //         ...prevProducts,
// //         {
// //           ...product,
// //           image: product.img || "../images/full.jpg", // Add default image if not provided
// //         },
// //       ]);
// //     }
// //   };

// //   const handleApprove = async () => {
// //     try {
// //       // Implement the approval logic here
// //       console.log("Items approved");
// //       setApprovals([]); // Clear approvals after successful approval
// //     } catch (error) {
// //       console.error("Error approving items:", error);
// //     }
// //   };

// //   return (
// //     <ApprovalContext.Provider
// //       value={{ approvals, addToApproval, handleApprove }}
// //     >
// //       {children}
// //     </ApprovalContext.Provider>
// //   );
// // };
// import React, { createContext, useContext, useState } from "react";

// const ApprovalContext = createContext();

// export const useApproval = () => {
//   const context = useContext(ApprovalContext);
//   if (context === undefined) {
//     throw new Error("useApproval must be used within an ApprovalProvider");
//   }
//   return context;
// };

// export const ApprovalProvider = ({ children }) => {
//   const [approvals, setApprovals] = useState([]);

//   const addToApproval = (product, productType) => {
//     if (product && product.title) {
//       setApprovals([
//         {
//           ...product,
//           img: product.img || "../images/full.jpg",
//           productType: productType,
//         },
//       ]);
//     }
//   };

//   const handleApprove = async () => {
//     try {
//       console.log("Items approved");
//       setApprovals([]); // Clear approvals after successful approval
//     } catch (error) {
//       console.error("Error approving items:", error);
//     }
//   };

//   return (
//     <ApprovalContext.Provider
//       value={{ approvals, addToApproval, handleApprove }}
//     >
//       {children}
//     </ApprovalContext.Provider>
//   );
// };

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
      setApprovals([
        {
          ...product,
          img: product.img || "../images/full.jpg",
        },
      ]);
    }
  };

  const handleApprove = async () => {
    try {
      console.log("Items approved");
      setApprovals([]); // Clear approvals after successful approval
    } catch (error) {
      console.error("Error approving items:", error);
    }
  };

  return (
    <ApprovalContext.Provider
      value={{ approvals, addToApproval, handleApprove }}
    >
      {children}
    </ApprovalContext.Provider>
  );
};
