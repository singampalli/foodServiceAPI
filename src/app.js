const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const swaggerSetup = require("./swagger/swaggerConfig");

const app = express();

app.use(bodyParser.json());
app.use("/", userRoutes);

swaggerSetup(app);

module.exports = app;
