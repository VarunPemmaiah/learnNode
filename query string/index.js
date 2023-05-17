const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    var qString = url.parse(req.url, true).query;

    var txt = qString.a + " " + qString.b;

    res.end(txt);
  })
  .listen(8000);

// var http = require("http");
// var url = require("url");

// http
//   .createServer(function (req, res) {
//     // res.writeHead(200, { "Content-Type": "text/html" });
//     res.writeHead(200, { "Content-Type": "application/json" });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);
