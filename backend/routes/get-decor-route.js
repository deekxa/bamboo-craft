const express = require("express");
const { getDecor } = require("../controllers/getDecor"); 

const router = express.Router();

router.get("/getDecor", getDecor); 

module.exports = router;
