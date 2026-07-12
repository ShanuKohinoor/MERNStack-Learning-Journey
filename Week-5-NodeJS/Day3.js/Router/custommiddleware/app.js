//                               app.js (main file for logging)



                          const express = require('express');
                          const app = express();

                         const logger = require('./logger'); // import the custom middleware

                         app.use(logger);               // here, use the logger middleware globally

                          app.get('/', (req, res) => {
                              res.send('Hello from Home Page!');
                          });

                          app.get('/about', (req, res) => {
                             res.send('About Page');
                          });

                          app.listen(3000, () => {
                             console.log('Server started at http://localhost:3000');
                          });
