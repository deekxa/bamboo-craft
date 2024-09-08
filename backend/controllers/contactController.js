const nodemailer = require("nodemailer");

const sendContactEmail = async (req, res) => {
  const { name, email, message, userEmail } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.YOY_KNOW_WHAT_IS_IT,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: "New Contact Us Form Submission",
    text: `You have a new contact form submission from ${name} (${email}). 
    Message:
    ${message}
    
    User's Email: ${email}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Error submitting form" });
  }
};

module.exports = { sendContactEmail };
