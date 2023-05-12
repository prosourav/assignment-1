const router = require("express").Router();
const rnc = require("../controller/randomNumController");

router.get("/api/v1/randomnumber", (req, res) => {
  return rnc(req, res);
});

router.get(
  `http://localhost:8000/api/v1/stringCalculator/`,
  (req, res) => {
    return stringCalculator(req, res);
  }
);

router.get("/api/v1/", (_req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

router.get("/", (_req, res) => {
  return res.status(200).json({ success: true });
});

module.exports = router;
