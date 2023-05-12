const generateRN = require("../utils/randomNumber");

const generateRNS = async(min, max) => {
  try {
    const res =  await generateRN(min, max);
    return res;
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = generateRNS;
