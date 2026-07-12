const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Show the HTML page when someone visits localhost:3000
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/message') {
    // When button is clicked, this runs
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the server!');
  } else {
    // For anything else
    res.writeHead(404);
    res.end('Not Found');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
});
