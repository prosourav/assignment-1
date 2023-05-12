const router = require("express").Router();
const stringCalculator = require("../controller/stringCalculaterController");
const generateRNC = require("../controller/randomNumController");
const generateRPC = require("../controller/randomPersonController");

// not working
// random person
router.get("/api/v1/randomPerson", (req, res) => {
  return generateRPC(req,res);
});
// rando number
router.get("/api/v1/randomnumber", (req, res) => {
  return generateRNC(req, res);
});
// string problem
router.get(
  `/api/v1/stringCalculator/:str`,
  (req, res) => {
    return stringCalculator(req, res);
  }
);

// not working
// random person
// router.get("/api/v1/randomPerson", (req, res) => {
//   return generateRPC(req, res);
// });

router.get("/api/v1/", (_req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

router.get("/", (_req, res) => {
  return res.status(200).json({ success: true });
});

module.exports = router;
