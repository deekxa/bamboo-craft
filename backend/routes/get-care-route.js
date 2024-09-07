const express = require("express");
const { getCare } = require("../controllers/getCare"); // Import the controller

const router = express.Router();

router.get("/getCare", getCare); // Define the route for fetching all decor items

module.exports = router;
