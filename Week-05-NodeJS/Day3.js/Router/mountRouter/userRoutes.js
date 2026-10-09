//                                     ROUTER FILE


//                            Mount with app.use()
//                            --------------------


//  Mount means attach to specific path
// Here we mount a router using app.use().

// For mounting:-
//                      Step 1: Create userRoutes.js (a router file)
//                      Step 2: Create app.js (main server file)


// In this file, i am going to create, a router file. And i will create a main server file named app.js

                           

  //                              userRouter
  //                              

        const express = require('express');
        const router = express.Router();


        router.get('/profile', (req,res)=>{
            res.send('User profile page')
        })

        router.get('/settings',(req,res)=>{
            res.send('User settings page')
        })
       
        module.exports = router;              // export router

