const express = require("express");
const authController = require("../controllers/authController");
const apiController = require("../controllers/apiController");

const router = express.Router();

router.post("/authenticate", authController.authenticate);
router.post("/accessProtectedEndpoint", apiController.accessProtectedEndpoint);

module.exports = router;
