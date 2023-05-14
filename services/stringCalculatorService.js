const stringCalculator = require("../utils/stringCalculator");

const stringCalculate = async (str) => {
  try {
    return await stringCalculator(str);
  } catch (e) {
    throw error("Internal server error", 500);
  }
};

module.exports = stringCalculate;
