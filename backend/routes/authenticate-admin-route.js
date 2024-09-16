

const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../controllers/authenticate-admin");

router.post("/authenticate", (req, res) => {
  const { username, password } = req.body;

  const result = authenticateUser(username, password);
  if (result === "authorized") {
    return res.send(result); 
  } else {
    return res.send(result);
  }
});

module.exports = router;



exports.authenticateUser = (username, password) => {
  if (username !== process.env.ADMIN_USER) {
    return "incorrect username"; 
  }
  if (password !== process.env.ADMIN_PASSWORD) {
    return "incorrect password"; 
  }
  return "authorized";
};
