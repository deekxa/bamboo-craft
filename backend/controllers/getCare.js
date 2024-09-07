const Care = require("../models/care"); // Import the Decor model

// Controller to get all Decor documents
const getCare = async (req, res) => {
  try {
    const careItems = await Care.find(); // Fetch all documents
    res.status(200).json(careItems); // Return the fetched data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCare };
