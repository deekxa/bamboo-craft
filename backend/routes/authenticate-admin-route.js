const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../controllers/authenticate-admin");

router.post("/authenticate", (req, res) => {
  const { username, password } = req.body;

  const result = authenticateUser(username, password);
  if (result === "authorized") {
    res.send(result);
  } else {
    res.send("Unauthorized");
  }
  res.send(result);
});

module.exports = router;
