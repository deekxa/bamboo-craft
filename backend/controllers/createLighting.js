const Lighting = require("../models/lighting"); 

const createLighting = async (req, res) => {
  try {
    const { title, description, specifications, cost } = req.body;

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

    await newLighting.save();

    return res.status(201).json({
      message: "Lighting created successfully",
      Lighting: newLighting,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createLighting };
