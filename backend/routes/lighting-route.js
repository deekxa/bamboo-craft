const express = require("express");
const { createLighting } = require("../controllers/createLighting");

const router = express.Router();

router.post("/lighting", createLighting);

module.exports = router;
