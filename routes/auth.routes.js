const express = require("express");

// controller
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get("/signup", authController.getSignup);

router.get("/login", authController.getLogin);

module.exports = router;
