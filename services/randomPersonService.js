const error = require("../utils/customError");
const generateRandomPerson = require("../utils/randomPerson");

const generateRandomPersonService = async (req, _res) => {
  try {
    return await generateRandomPerson(req);
  } catch (e) {
    throw error("Internal server error", 500);
  }
};

module.exports = generateRandomPersonService;
