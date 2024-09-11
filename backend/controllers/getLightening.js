const Lighting = require("../models/lighting"); 

const getLighting = async (req, res) => {
  try {
    const lightingItems = await Lighting.find(); 
    res.status(200).json(lightingItems); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getLighting };
