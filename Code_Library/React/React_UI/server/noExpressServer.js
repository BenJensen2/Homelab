const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.rawHeaders);
  console.log(res.socket._server._connectionKey);
  res.statusCode = 200;
  console.log("Header",res.getHeader('content-type'));
  res.setHeader("Content-Type", "text/plain");
  console.log("Header",res.getHeader('content-type'));
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
