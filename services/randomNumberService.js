const error = require("../utils/customError");
const generateRandomNumber = require("../utils/randomNumber");

const generateRandomNumberService = async (min, max) => {
  try {
    return await generateRandomNumber(min, max);
  } catch (e) {
    throw error("Internal server error", 500);
  }
};

module.exports = generateRandomNumberService;
