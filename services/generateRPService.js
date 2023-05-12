const generateRandomPerson = require("../utils/genaratePerson");


// function is not working
const generateRNP = async (req,_res) => {
  try {
    console.log("Generating");
    const result = await generateRandomPerson(req);
    console.log('service result',result);
  } catch {
    console.log('error')
  }
};

module.exports = generateRNP;
