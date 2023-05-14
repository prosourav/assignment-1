const error = require("../utils/customError");

const notFoundHandler = (req, _res, next) => {
  const err = error(`Resource not found!,${req.originalUrl}`);
  err.status = 404;
  next(err);
};

module.exports = notFoundHandler;
