const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes");
const cors = require("cors");
dotenv.config({});
//db.config
require("./config/db");
const port = process.env.PORT || 8000;
app.use(express.static("public"));
app.use(cors("*"));
const logger = require("morgan");
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).json({ message: "path not found" });
});
app.listen(port, (req, res) => {
  console.log(`app running on port http://localhost:${port}`);
});
