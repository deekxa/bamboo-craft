const Payment = require("../models/Payment");
const nodemailer = require("nodemailer");

exports.createPayment = async (req, res) => {
  try {
    const { email, items, total } = req.body;
console.log("total",total);
    const newPayment = new Payment({
      email,
      items,
      total,
    });

    await newPayment.save();

    sendPaymentConfirmationEmail(email, items, total);
    

    res.status(201).json({ message: "Payment created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Payment failed" });
  }
};

const sendPaymentConfirmationEmail = async (email, items, total) => {
  console.log(process.env.MY_EMAIL, process.env.YOY_KNOW_WHAT_IS_IT);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.YOY_KNOW_WHAT_IS_IT,
    },
  });

  const emailUi = `${items.map((item)=>{
    return `
    - Title: ${item.title}
    - Price: RS ${item.cost}
    - Description: ${item.description}
    `
  }).join("\n")}`

  let mailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: "Payment Confirmation",
    text: `Thank you for your purchase! Here are your purchase details:
    - Items:
     ${emailUi}


    - Total: RS${total}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });


  
  
}


