const generateRandomNumber = require("../utils/randomNumber");

const generateRNC = (req, res) => {
  const [min, max] = [req.query.min, req.query.max];
  [min, max].forEach((item) => parseInt(item));
  if (min === NaN || max === NaN)
    return res.send(422).json({ message: "unprocessable entity" });
  return generateRNS(min, max);
};

module.exports = generateRNC;
