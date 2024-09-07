const Lighting = require("../models/lighting"); // Import the Decor model

// Controller to get all Decor documents
const getLighting = async (req, res) => {
  try {
    const lightingItems = await Lighting.find(); // Fetch all documents
    res.status(200).json(lightingItems); // Return the fetched data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getLighting };
