const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // <-- Add this line
const userRouter = require("./routers/user.route");
const teamRouter = require("./routers/team.route");

const app = express();

app.use(bodyParser.json());

// Add CORS middleware
app.use(cors());

// Routes
app.use("/", userRouter);
app.use("/", teamRouter);

module.exports = app;
