const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  transaction_id: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  

});

module.exports = mongoose.model("PaymentEsewa", PaymentSchema);
