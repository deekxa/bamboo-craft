const Lighting = require("../models/lighting"); // Import the Decor model

// Controller to create a new Decor document
const createLighting = async (req, res) => {
  try {
    const { title, description, specifications, cost } = req.body;

    // Ensure the required fields are provided
    if (!title || !description || !specifications || !cost) {
      return res.status(400).json({ message: "All fields are required" });
    }
    console.log(req.body);

    const newLighting = new Lighting({
      title,
      description,
      specifications,
      cost,
    });

    // Save the new Decor to the database
    await newLighting.save();

    // Return a success response
    return res.status(201).json({
      message: "Lighting created successfully",
      Lighting: newLighting,
    });
  } catch (error) {
    // Handle any errors
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createLighting };
