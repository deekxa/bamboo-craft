const Care = require("../models/care"); 

const createCare = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { title, description, specifications, cost } = req.body;

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

    await newCare.save();

    return res.status(201).json({
      message: "Care created successfully",
      decor: newCare,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createCare };
