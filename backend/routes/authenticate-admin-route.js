// routes.js
const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../controllers/authenticate-admin");

// Define the authentication route
router.post("/authenticate", (req, res) => {
  const { username, password } = req.body;

  // Call the controller function
  const result = authenticateUser(username, password);

  // Send back the response
  res.send(result);
});

module.exports = router;