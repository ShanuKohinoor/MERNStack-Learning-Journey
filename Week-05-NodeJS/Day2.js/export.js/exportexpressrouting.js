

//    Here i implement export code method. writing code here and 'app.use' in another file and export that

          const express = require('express')
          const app = express()

             app.get('/',(req,res)=>{
                res.send('Hello from Eonix!')                        // Route '/'
                
             })

             app.post('/', (req,res)=>{                                // Route '/'
                res.send('Hello Everyone !')
             })

             app.get('/about',(req,res)=>{                             // Route '/about'
                res.send('Hello, About me')
             })


             app.post('/contact',(req,res)=>{
                res.send('Hello,contact me ')                      //Route   '/contact'
             })


            require('./notFoundHandler')(app);  // use routes, do not listen here


          app.listen(3000,()=>{
            console.log('Server is running in http://localhost:3000');
            
          })

































