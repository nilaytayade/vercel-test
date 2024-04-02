// index.js
const express = require("express");

const app = express();
const PORT = 4000;
emails = [];
express.request(json());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send(emails);
});

app.get("/pushemail", (req, res) => {
  emails.push(req.body);
  res.send(emails);
});

// Export the Express API
module.exports = app;
