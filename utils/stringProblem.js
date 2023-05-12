const stringDetails =(str) =>{
  let letters = 0;
  let numbers = 0;
  let special = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i].match(/[a-z]/i)) {
      letters++;
    } else if (str[i].match(/[0-9]/)) {
      numbers++;
    } else {
      special++;
    }
  }
  return { letters: letters, numbers: numbers, special: special };
}
module.exports = getStringDetails;
