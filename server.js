const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head></head>
      <body>
        <p>Hi, my name is Hasan. I am a full-stack developer.</p>
        <a href="/about">About me</a>
      </body>
    </html>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <html>
      <head></head>
      <body>
        <p>I am a full-stack developer with proficiency in HTML, CSS, JavaScript, Node.js, Express.js, React.js, and MongoDB.</p>
        <p>I have a Bachelor's degree in Programming from Polytechnic Bahrain.</p>
        <p>I am hoping to get a job as a Software Engineer or full-stack developer at a great Company.</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>MongoDB</li>
        </ul>
        <a href="/">Back</a>
      </body>
    </html>
  `);
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
