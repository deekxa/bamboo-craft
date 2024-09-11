const mongoose = require("mongoose");

const DecorSchema = new mongoose.Schema({
  image:{
    type: String,
    default: "../images/full.jpg"
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

const Decor = mongoose.model("Decor", DecorSchema);

module.exports = Decor;
