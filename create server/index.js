const http = require("http");

http
  .createServer(function demo(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(req.url + "\n");
    res.end("\nHello World !");
    res.end();
  })
  .listen(8000);
