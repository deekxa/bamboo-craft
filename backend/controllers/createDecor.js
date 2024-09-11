const Decor = require("../models/decor"); 

const createDecor = async (req, res) => {
  try {
    const { title, description, specifications, cost } = req.body;

    if (!title || !description || !specifications || !cost) {
      return res.status(400).json({ message: "All fields are required" });
    }
    console.log(req.body);

    const newDecor = new Decor({
      title,
      description,
      specifications,
      cost
    
    });

    
    await newDecor.save();

    return res.status(201).json({
      message: "Decor created successfully",
      decor: newDecor,
    });
  } catch (error) {
    
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createDecor };
