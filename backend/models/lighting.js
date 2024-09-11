const mongoose = require("mongoose");

const lightingSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "../images/tablelamp.jpeg",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specifications: {
    type: [String], 
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
});

const Lighting = mongoose.model("Lighting", lightingSchema);

module.exports = Lighting;
