const express = require("express");
const { createPayment } = require("../controllers/paymentController");
const { initiatePayment, finalizePayment } = require("../controllers/paymentid");

const router = express.Router();

router.post("/payment", createPayment);
router.post("/payment_esewa", initiatePayment);
router.get("/finalizePayment", finalizePayment);


module.exports = router;
