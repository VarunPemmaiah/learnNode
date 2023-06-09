const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ text: "Restart node journey !" }));
  })
  .listen(port, hostname, () => {
    console.log("Server running at 3000 port");
  });

// server.listen(port, hostname, () => {
//   console.log("Server running at 3000 port");
// });
