const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my HOMEPAGE!");
    return;
  }
  if (req.url === "/about") {
    res.end("This is my ABOUT PAGE!");
    return;
  }
  res.end(`
  <h1>Oops! </h1>
  <p>We can't seem to page that you're looking for!</p>
  <a href="/">Back Home</a>
  `);
});

server.listen(3000);
