const generateRNS = require("../services/randomNumService");

const generateRNC = async(req, res) => {
  const [min, max] = [parseInt(req.query.min), parseInt(req.query.max)];
  if (typeof min === "number" && typeof max === "number") {
   const result = await generateRNS(min, max);
   return res.status(200).json({ msg: `random number: ${result}`});
  }
  else return res.status(422).json({ message: "unprocessable entity" });
};

module.exports = generateRNC;
