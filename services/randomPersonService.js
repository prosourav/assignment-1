const error = require("../utils/customError");
const generateRandomPerson = require("../utils/randomPerson");

const generateRandomPersonService = async (req, _res) => {
    return await generateRandomPerson(req);
};

module.exports = generateRandomPersonService;
