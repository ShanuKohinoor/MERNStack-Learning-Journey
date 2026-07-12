//                              TASK.1(DAY 1)
// Create a basic Node.js server using the http module that sends a plain text response



// STEP 1: Import the http module

const { log } = require('console');
const http = require('http');   // Node.js has built- in module called http.
                                // http module helps to create a web server.
                                // import http module using require()




// STEP 2: Create a Server

 const server = http.createServer((req,res)=>{         
                                                        // const  server , saves created server into the server variables.
                                                        // http.createServer(...) is a function from the http module that creates a new HTTP server.
                                                       // it takes callback function as argument. This function runs every time when a server recieves request from browser.
                                                       // req and res are the  two parameters of callback function.

                                                             // req — the request object; it contains details about the client’s request (URL, headers, method, etc.)

                                                            // res — the response object; used to send a response back to the client.

        // step 2 a:- Set response header to plain text

          res.writeHead(200,{'content-type': 'text/plain'});
                                             // res.writeHead(statusCode, headers):-
                                                     //This method sets the HTTP status code and response headers that tell the browser what’s coming.
                                                     //  here 200 is the status code means OK (the request was successful).

                                            // { 'Content-Type': 'text/plain' } sets the header to tell the browser that the content type of the response is plain text (not HTML, JSON, or something else).


       // step 2 b:- Send a response message

          res.end('Hello, This is my first Node.js server')

                                         // res.end() is a method which helps to 

                                               // Sends the response body to the client.

                                              // Ends the response process (no more data will be sent).

                                              // inside this, pass the actual message string the client wants to recieve.


 })



 // STEP 3 : Start (listen to) the server
               //  We need this step to tell which port to listen on

        server.listen(3000,()=>{     
            console.log('Server is running on http://localhost:3000');
                                       //server.listen(3000, ...) means it tells Node.js  “Please start the server and listen for incoming requests on port 3000.”
                                
                                       //() => { :- This is the callback function runs after server starts successfully

        })
