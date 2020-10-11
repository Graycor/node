// Modules
const http = require('http');
const lib = require('./source/tools/generic');

// Config
const hostname = 'localhost';
const port = 3000;

// Server Block
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("The date and time is currently:\n" + lib.myDateTime());
  res.write(lib.myAwesomesauce());
  res.end('\n\nHello World! Yep\n');
});

// Server Listen
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});
