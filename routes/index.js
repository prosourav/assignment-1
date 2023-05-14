const router = require("express").Router();
const stringCalculatorController = require("../controller/stringCalculatorController");
const generateRandomNumberController = require("../controller/randomNumberController");
const generateRandomPersonController = require("../controller/randomPersonController");

// random number generator route
router.get("/api/v1/random-number", generateRandomNumberController);

// string observation route
router.get(`/api/v1/stringCalculator/:str`, stringCalculatorController);

// random person generator route
router.get("/api/v1/randomPerson", generateRandomPersonController);

//  server health checkup route
router.get("/", (_req, res) => res.status(200).json({ success: true }));

module.exports = router;
