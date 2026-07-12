



// server.js
import http from 'http';   // Import the built-in Node.js http module to create a server
import { add, subtract, multiply, divide } from './math.js';  // Import math functions from math.js using ES module syntax

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

 
  // Define two numbers for math operations
  const a = 10;
  const b = 2;

const result = `
Add: ${add(a, b)}
Subtract: ${subtract(a, b)}
Multiply: ${multiply(a, b)}
Divide: ${divide(a, b)}
`;

  res.end(result);    // End the response and send the result string back to client (browser)
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//                                    Output:-
//                                        Add: 12
//                                        Subtract: 8
//                                        Multiply: 20
//                                        Divide: 5



//  How this works??

//   When run node server.js in the terminal.
//                         |
//   Node loads server.js, which imports math functions from math.js.
//                         |
//   Node creates an HTTP server using http.createServer() that listens on port 3001.
//                         |
//   When opens http://localhost:3001 in a browser, the server’s callback runs.
//                         |
//   The server calls math functions add, subtract, multiply, and divide with fixed numbers (10 and 2).
//                         |
//   Browser shows the result with the math operation outputs.

