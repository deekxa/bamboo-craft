const Decor = require("../models/decor"); 


const getDecor = async (req, res) => {
  try {
    const decorItems = await Decor.find(); 
    res.status(200).json(decorItems); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getDecor };
