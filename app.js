const http = require("http");
const express = require("express");
const routes = require("./routes");
const simpleLogger = require("./middleware/logger");
const handleGlobalError = require("./middleware/globalError");
const cors = require("cors");
const notFoundHandler = require("./middleware/notFound");
const PORT = 4000;
const app = express();

app.listen(PORT, () => console.log(`server listening on ${PORT}`));

app.use(cors());
app.use(simpleLogger);
app.use(express.json());

app.use(routes);
app.use(notFoundHandler);
app.use(handleGlobalError);
