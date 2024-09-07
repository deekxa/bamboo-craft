const express = require("express");
const { createCare } = require("../controllers/createCare");

const router = express.Router();

router.post("/care", createCare);

module.exports = router;
