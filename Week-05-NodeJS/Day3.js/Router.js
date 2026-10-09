 //                                 Router



 //                              What is a Router??
 //                              -----------------
 
 // Definition : Way to organise and separate route  handling logic
 //  Express Router is like a mini express app.
//         * It helps to organize routers separately.
// If we put all routers in a single file. It will be messy. Instead of putting all routers in a single filre, split it into separate files.
// It helps the file to be clean and easy to maintain.

// create separate module


//                      Why we split routes into separate files??
//                      ----------------------------------------


// Answer:- When the app gets bigger, splitting routes like /users, /products, etc. into separate files keeps the code clean, organized, and easy to manage.





//                    Create a separate route file using express.Router()
//                    ---------------------------------------------------

//                refer users.router.js file in 'Router' named folder




//                 Export the router and import it into the main app1     12112
//                 -------------------------------------------------------------

//                       refer app.js file


//                        Mount with app.use()
//                        --------------------



 //                   Mount with app.use()
            
                      app.use('/users', userRoutes)             // means


//                                                     For any request that starts with /users, use the userRoutes router.

//                                                     Inside userRoutes, the paths are relative, so:

//                                                     GET /users/ → matches router.get('/')

//                                                      GET /users/:id → matches router.get('/:id')

