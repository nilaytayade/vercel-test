const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;
const emails = [];

// Parse JSON bodies
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send(emails);
});

app.post("/pushemail", (req, res) => {
  // Check if the request is from AWS SNS
  if (req.headers["x-amz-sns-message-type"] === "Notification") {
    // Parse the SNS message JSON
    const snsMessage = JSON.parse(req.body);
    console.log("Received SNS message:", snsMessage);
    // Process the SNS message as needed
    // For example, you can extract relevant information and store it
    // in your `emails` array or perform any other desired actions
    emails.push(snsMessage);
  }

  res.send(emails);
});

// Export the Express API
module.exports = app;
