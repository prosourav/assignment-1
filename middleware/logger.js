const simpleLogger = (req, _, next) => {
  console.log(`${req.url}--${req.method}--${new Date().toISOString()}`);
  next();
};

module.exports = simpleLogger;
