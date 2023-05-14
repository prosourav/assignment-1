const stringCalculatorService = require("../services/stringCalculatorService");
const error = require("../utils/customError");

const stringCalculatorController = async (req, res) => {
  const str = String(req.params.str);
  try {
    if (typeof str === "string") {
      const result = await stringCalculatorService(str);
      return res.status(200).json({ msg: result });
    } else {
      return res.status(422).json({ msg: "unprocessable entity" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = stringCalculatorController;
