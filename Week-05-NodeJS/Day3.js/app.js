const express = require('express');
const app = express();

const userRoutes = require('./routes/users.router'); // Import user routes

app.use('/users', userRoutes); // Mount user routes on /users path

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});




//  ref users.router.js in Router folder










//                                 Mount with app.use()
//                                 -------------------


// Based on URL and HTTP method(GET or POST), responding to client request is Routing.
// Express Router use, to separate routes into different files to make the code clean and organized. We can mount these routers in our main files using app.use






