const handleGlobalError = (err, _req, res, _next) => {
  const message = err.message ? err.message : "Server Error";
  const status = err.status ? err.status : 500;
  return res.status(status).json({ message });
};

module.exports = handleGlobalError;
