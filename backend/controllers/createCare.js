const Care = require("../models/care"); // Import the Decor model

// Controller to create a new Decor document
const createCare = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { title, description, specifications, cost } = req.body;

    // Ensure the required fields are provided
    if (!title || !description || !specifications || !cost) {
      return res.status(400).json({ message: "All fields are required" });
    }
    console.log(req.body);

    const newCare = new Care({
      title,
      description,
      specifications,
      cost,
    });

    // Save the new Decor to the database
    await newCare.save();

    // Return a success response
    return res.status(201).json({
      message: "Care created successfully",
      decor: newCare,
    });
  } catch (error) {
    // Handle any errors
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createCare };
