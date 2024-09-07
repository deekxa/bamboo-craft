const express = require("express");
const { getDecor } = require("../controllers/getDecor"); // Import the controller

const router = express.Router();

router.get("/getDecor", getDecor); // Define the route for fetching all decor items

module.exports = router;
