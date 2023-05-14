const generateRandomPersonService = require("../services/randomPersonService");
const error = require("../utils/customError");

const generateRandomPersonController = async (req, res, next) => {
  const params = req.body.params;
  try {
    if (params.length) {
      const result = await generateRandomPersonService(params);
      return res.status(200).json(result);
    } else {
      return res.status(422).json({ msg: "unprocessable entity" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = generateRandomPersonController;
