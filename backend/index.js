const mongoose = require("mongoose");
const express = require("express");
const { connection } = require("./database/db");
const { router } = require("./routes/allRoutes");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/user", router);

const dbConnect = async (req, res) => {
  await connection;
};

dbConnect().then(() => {
  app.listen(process.env.Port, (req, res) => {
    console.log("Server is Working");
  });
});
