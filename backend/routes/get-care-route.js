const express = require("express");
const { getCare } = require("../controllers/getCare"); 

const router = express.Router();

router.get("/getCare", getCare); 

module.exports = router;
