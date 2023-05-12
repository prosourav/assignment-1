const http = require("http");
const express = require("express");
const routes = require("./routes");
const PORT = 8000;
const app = express();

app.listen(PORT, () => console.log(`server listening on ${PORT}`));

app.use((req, _res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(express.json());
app.use(routes);

app.use((_req, res) => res.status(404).json({ message: "resource not found!" }));

