const express = require("express");
const { getLighting } = require("../controllers/getLightening"); // Import the controller

const router = express.Router();

router.get("/getLighting", getLighting); // Define the route for fetching all decor items

module.exports = router;
