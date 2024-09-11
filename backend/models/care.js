const mongoose = require("mongoose");

const careSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "../images/cottonbud.jpeg",
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

const Care = mongoose.model("Care", careSchema);

module.exports = Care;
