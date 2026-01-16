const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.static("public"));

// app.get(): takes 2 arguments
// 1. the route: /homepage
// 2. function
app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/test", (req, res) => {
  res.send("<p>Success!</p>");
});

app.get("/", (req, res) => {
  res.send("Hi, there! I am Hasan and I am developing this app!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port} now!`);
});
