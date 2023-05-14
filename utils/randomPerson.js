const generateRandomNumber = require("./randomNumber");
const path = require("path");
const fs = require("fs");

const generateRandomPerson = (data) => {
  const res = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/users.json"), "utf-8")
  );
  const random = generateRandomNumber(1, 30);
  const randomPerson = res[random];

  const result = data.reduce((acc, cur) => {
    if (cur in randomPerson) acc[cur] = randomPerson[cur];
    else acc[cur] = "N/A";
    return acc;
  }, {});
  result["name"] = `${randomPerson.firstName} ${randomPerson.lastName}`;
  return result;
};
module.exports = generateRandomPerson;
