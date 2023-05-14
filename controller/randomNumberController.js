const generateRandomNumberService = require("../services/randomNumberService");
const error = require("../utils/customError");

const generateRandomNumberController = async (req, res, next) => {
  const [min, max] = [parseInt(req.query.min), parseInt(req.query.max)];

  try {
    if (typeof min === "number" && typeof max === "number" && min < max) {
      const result = await generateRandomNumberService(min, max);
      return res.status(200).json({ msg: `random number: ${result}` });
    } else {
      return res.status(422).json({ msg: "unprocessable entity" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = generateRandomNumberController;
