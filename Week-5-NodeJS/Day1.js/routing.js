// Understand routing in Node.js and implement manual routes (/, /about, /contact) with a 404 fallback using the core http module.

// Routing: Server gives response depending on URL

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end('Welcome to the home page');
  } else if (req.url === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end('This is about page');
  } else if (req.url === '/contact') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end('Click Contact us');
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    });
    res.end('404 Page not found');
  }
});

server.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});
