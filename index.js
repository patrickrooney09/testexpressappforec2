const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (error) {
    res.send("Error:", error);
  }
});

app.listen(port, () => {
  console.log(`Example app running on http://localHost:${port}`);
});
