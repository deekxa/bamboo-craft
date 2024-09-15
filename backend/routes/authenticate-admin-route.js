// routes/authenticate.js

const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../controllers/authenticate-admin");

router.post("/authenticate", (req, res) => {
  const { username, password } = req.body;

  const result = authenticateUser(username, password);
  if (result === "authorized") {
    return res.send(result); // Send the response and exit the function
  } else {
    return res.send(result); // Only one res.send is needed
  }
});

module.exports = router;

// controllers/authenticate-admin.js

exports.authenticateUser = (username, password) => {
  if (username !== process.env.ADMIN_USER) {
    return "incorrect username"; // Ensure the message is consistent with the frontend
  }
  if (password !== process.env.ADMIN_PASSWORD) {
    return "incorrect password"; // Ensure the message is consistent with the frontend
  }
  return "authorized";
};
