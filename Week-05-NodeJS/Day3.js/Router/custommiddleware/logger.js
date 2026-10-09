
//                                         LOGGER FILE



//                                    Example: Custom Logging Middleware
//                                    ----------------------------------





//    What is Custom Logging Middleware?
//         Middleware is a function in 'Express' that runs during the processing of a request, before sending a response.

//         * Logging means recording information about each request, like:

//                   -  What URL was requested?
//                   -  What HTTP method was used? (GET, POST, etc.)
//                   -  When the request was made?



//  if we write a middleware function, that automatically logs info about every incoming request to the server.

// Use of logging:-  
//               *  To monitor and debug what users are doing on our app.

//               *  To see errors or suspicious activity.

//               *  To keep a record for later analysis.



//How does it work?
//                   step 1. A request comes in.

//                   step 2. The logging middleware runs first, prints info like GET /home at 10:00AM.

//                   step 3. Then it passes the request along to your actual route handler.

//                   step 4. The response is sent back to the user.



// For logging:-
//                       Step 1: Create logger.js
//                       Step 1: Create app.js











//                                           logger.js file

                       // Middleware function to log method and URL


                  function logger(req, res, next) {
                       console.log(`${req.method} request to ${req.url}`);
                       next();                             // pass to next middleware
                 }

                module.exports = logger;
