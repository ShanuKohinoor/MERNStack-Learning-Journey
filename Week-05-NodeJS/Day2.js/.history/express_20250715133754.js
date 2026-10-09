//                                         EXPRESS


// Its the frame work of Node.js
// In every language there is frame work.
//           - In java, frame work called 'Hibernate','Spring' etc. 
//           - In python, frame work is 'Django', 'Flask' etc
//           - Like that, frame work of Node.js is 'Express'. 
//                 * Node.js has another frame works also. But popular and most commonly used is 'Express'.


// What is the use of framework? why we use in program?
//            Answer:- In small program, without framework like express is possible. Instead of frameworks, we can use Routes.
//                        But for large programs, frameworks will be very useful to ease the code.                    


//  Structured system with certain some rules and tools
// To make code easy we use express.
// We can  call package,library etc also. That means frame work includes of package,library etc


// Express is not an inbuilt module like http. So, we need to install express.
// Eg:- If i want to create a web server, 
//                 * Install express package.
//                        How to install express package??
//                          * a. Should be  in exact folder.
//                          * b. Make sure package.json installed
//                                        - package.json can install by running npm init.
//                                        - then it creates a package.json file, which keeps track of our installed packages.

//                          * c. now run 'npm install express '.
//                          * d. now express package downloaded in node_module.
//                          * e. add express to package.json under dependencies
//                                        - when we add more packages later, it will add to the dependencies.


//     If we use 'express', we dont need to write res.writehead,res.end, res.url === '/'(routes) etc. Instead of that we can use express. 
//      That means, we can write 'app.get'
//      Express helps to simplify the code.




          const express = require('express')         // Import express module with the help of require
                                                     // This can possible only after installing 'express'.
          const app = express()               //Express create new express application.

                                        // Application has many built-in methods like:-
                                             //    app.get()
                                             //    app.post()
                                             //    app.put()
                                             //    app.delete()
                                             //    app.listen()


// express()            Creates an Express app
// app                  Your server app        
// app.get(...)         Add route for GET `/`  
// app.listen(...)      Start the server       



        app.get('/',(req,res)=>{
             //  res.send('Hello from Express!')                    // Route '/'
                                                                    // We use text here.

            //   res.send('<h1>Hi</h1>Everyone')                    // We use HTML here . Not text
                                                                   // Output will be :-
                                                                                 // Hi 
                                                                                 //  Everone

              // res.json({name:'Shanu Shahanas'})                   // We use json format here. Not text

        })

             app.post('/', (req,res)=>{                                // Route '/'
                res.send('Hello Everyone')
             })

             app.get('/about',(req,res)=>{                             // Route '/about'
               res.send('Hello, About me')
             })


             app.post('/contact',(req,res)=>{
                res.send('Hello,contact me here')                      //Route   '/contact'
             })

             app.get('/user/:id',(req,res)=>{
                  res.send(`Your Id is ${req.params.id}`)             //  Here is an example for Route Parameters(explained in another file named Route Parameters.js)
             })


                app.get('/search',(req,res)=>{
                   const name = req.query.name; 
                   const age = req.query.age
                  
                                              //  Here is an example for Query Parameters(explained in another file named Query Parameters.js)
                  res.send(`You  searched for name: ${name}, age:${age}`);
                })                                                 //Output will be:- You searched for name: Shanu, age:35



             app.use((req,res)=>{                                //By using 'app.use',we can handle unmatched route
                res.status(404).send('Invalid Route')           //If we dont mention status(404) here, we will get status ok. but we will get Invalid Route  as well. So,we must have to write status(404) 
             })

                app.use((req,res,next)=>{
               console.log("Hit on middleware")                  // middleware example. Explained middleware in day3 middleware.js file
              })

          app.listen(3001,()=>{
            console.log('Server is running in http://localhost:3001');
            
          })



















