const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const router = require("./routes/userRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/", router);

app.get("/", (req, res) => {
  res.send("Hey");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}..`.bgGreen.bold);
});
