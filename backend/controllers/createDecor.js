const Decor = require("../models/decor"); // Import the Decor model

// Controller to create a new Decor document
const createDecor = async (req, res) => {
  try {
    const { title, description, specifications, cost } = req.body;

    // Ensure the required fields are provided
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

    // Save the new Decor to the database
    await newDecor.save();

    // Return a success response
    return res.status(201).json({
      message: "Decor created successfully",
      decor: newDecor,
    });
  } catch (error) {
    // Handle any errors
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createDecor };
