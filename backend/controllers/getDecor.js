const Decor = require("../models/decor"); // Import the Decor model

// Controller to get all Decor documents
const getDecor = async (req, res) => {
  try {
    const decorItems = await Decor.find(); // Fetch all documents
    res.status(200).json(decorItems); // Return the fetched data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getDecor };
