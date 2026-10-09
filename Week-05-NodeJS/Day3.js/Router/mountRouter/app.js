//                      MAIN SERVER FILE(For mount)


//                            Mount with app.use()
//                            --------------------



const express = require('express');
const app = express();



const userRoutes = require('./userRoutes')      // import the router

app.use('/users', userRoutes)                // Mount the router with app.use
app.get('/',(req,res)=>{
    res.send('Home page')
})

app.listen(3000,()=>{
    console.log(('Server running on http://localhost:3000'));
    
})