require("express-async-errors");
require("dotenv").config();

const express = require("express");

const chats = require("./data/data");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
