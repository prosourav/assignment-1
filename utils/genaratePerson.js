const generateRandomNumber = require("./randomNumber");
const fs = require("fs");

const generateRandomPerson = async (data) =>{

  const raw = await fs.readFileSync("../data/dummyUsers.json");
  const users = await JSON.parse(raw);

  // const random = generateRandomNumber(1,users.length);
  console.log("Random",users)
};
module.exports = generateRandomPerson;