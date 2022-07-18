const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status :remote-addr"));

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello World from Express",
  });
});

app.get("/api", (req, res) => {
  return res.status(200).json({
    message: "API is working",
  });
});
app.get("/api2", (req, res) => {
  return res.status(200).json({
    message: "API 2 is working",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
