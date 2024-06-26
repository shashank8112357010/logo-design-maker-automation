const express = require("express");
const { sendGreetingsMorning, sendGreetingsEvening } = require("../controllers/userController");

const router = express.Router();

// send greeting:
router.get("/sendGreetingMorning", sendGreetingsMorning, sendGreetingsEvening);

module.exports = router;