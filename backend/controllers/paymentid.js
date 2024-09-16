const PaymentEsewa = require("../models/PaymentEsewa");
const crypto = require("crypto");
exports.initiatePayment = async (req, res) => {
  var { email, transaction_id, amount } = req.body;
  const timestamp = Date.now();
  transaction_id = transaction_id + timestamp;

  const newPayment = new PaymentEsewa({
    email,
    transaction_id,
    amount,
    status: "PENDING",
  });

  await newPayment.save();
  var msg =
    "total_amount=" +
    amount +
    ",transaction_uuid=" +
    transaction_id +
    ",product_code=EPAYTEST";

  var secret = "8gBm/:&EnhH.1/q";
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(msg);

  const signature = hmac.digest("base64");
  return res.json({ msg, signature, transaction_id });
};

exports.finalizePayment = async (req, res) => {
  const { data } = req.query;

  const decodedString = Buffer.from(data, "base64").toString("utf-8");

  const { status, transaction_uuid } = JSON.parse(decodedString);
  const result = await PaymentEsewa.updateOne(
    { transaction_id: transaction_uuid },
    { status },
    {
      runValidators: true,
    }
  );
  return res.send(
    "payment " +
      status +
      "<br> <a href= 'http://localhost:3000'> Go To Home Page </a> "
  );
};
