const generateRandomNumber = (minNum, maxNum) => {
  console.log(typeof minNum);
  console.log(typeof maxNum);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

module.exports = generateRandomNumber;