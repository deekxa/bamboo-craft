const Payment = require("../models/Payment");

exports.createPayment = async (req, res) => {
  try {
    const { email, items, total } = req.body;

    const newPayment = new Payment({
      email,
      items,
      total,
    });

    await newPayment.save();

    // Optionally send an email confirmation (using a service like SendGrid or Nodemailer)

    res.status(201).json({ message: "Payment created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Payment failed" });
  }
};
