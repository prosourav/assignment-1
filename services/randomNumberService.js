const error = require("../utils/customError");
const generateRandomNumber = require("../utils/randomNumber");

const generateRandomNumberService = async (min, max) => {
    return await generateRandomNumber(min, max);
};

module.exports = generateRandomNumberService;
