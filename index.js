// index.js
const express = require("express");

const app = express();
const PORT = 4000;
emails = [];
app.use(express.json());

app.get("/", (req, res) => {
  res.send(emails);
});

app.post("/pushemail", (req, res) => {
  emails.push(req.body);
  emails.push(req.headers);
  res.send(emails);
});

app.get("/darttest", (req, res) => {
  res.json({
    username: "ak1932",
    email: "aryankadole95@gmail.com",
    first_name: "Aryan Kadole",
    last_name: "",
    current_level: 1,
    hidden_on_leaderboard: false,
    id: 1190,
    keys: 2,
  });
});
// Export the Express API

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});
