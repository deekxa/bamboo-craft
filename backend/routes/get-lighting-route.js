const express = require("express");
const { getLighting } = require("../controllers/getLightening"); 

const router = express.Router();

router.get("/getLighting", getLighting); 

module.exports = router;
