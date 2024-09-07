const express = require("express");
const { createDecor } = require("../controllers/createDecor");

const router = express.Router();

router.post("/decor", createDecor);

module.exports = router;
