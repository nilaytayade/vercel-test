// index.js
const express = require("express");

const app = express();
const PORT = 4000;
emails = [];
app.use(express.json());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send(emails);
});

app.post("/pushemail", (req, res) => {
  console.log(req.body);
  emails.push(req.body);
  emails.push(req.headers);
  res.send(emails);
});

// Export the Express API
module.exports = app;
