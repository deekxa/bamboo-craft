const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  items: [{ title: String, cost: Number }],
  total: { type: Number, required: true },
});

module.exports = mongoose.model("Payment", PaymentSchema);
