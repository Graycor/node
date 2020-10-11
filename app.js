const http = require('http');
var dt = require('./source/tools/dateTime');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World! You suck! Minnie <3\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
