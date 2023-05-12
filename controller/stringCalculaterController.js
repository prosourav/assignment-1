const stringCalculate = require("../services/stringCalculaterService");

const stringCalController = async (req, res) => {
  const str = String(req.params.str);
  if (typeof str === "string") {
    const result = await stringCalculate(str);
    return res.status(200).json({ msg: result });
  } else return res.status(422).json({ message: "unprocessable entity" });
};

module.exports = stringCalController;
