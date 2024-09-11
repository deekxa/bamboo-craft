const Care = require("../models/care"); 


const getCare = async (req, res) => {
  try {
    const careItems = await Care.find(); 
    res.status(200).json(careItems); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCare };
