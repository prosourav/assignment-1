const error = (msg = "Something went wrong", status = 500) => {
  const e = new Error(msg);
  e.status = status;
  console.log(e);
  return e;
};

module.exports = error;