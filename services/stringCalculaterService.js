const stringCalculation = require("../utils/stringProblem");

const stringCalculate = async (str) => {
  try {
    const res = await stringCalculation(str);
    return res;
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = stringCalculate;
