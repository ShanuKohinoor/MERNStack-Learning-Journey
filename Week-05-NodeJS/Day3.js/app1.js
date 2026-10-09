//                         app1.js(for static)





          const express = require('express')
          const app = express()


          app.use(express.static('public'))   // Serve files from the "public" folder
    

          app.listen(3000,()=>{                         // start the server
            console.log('Server running at http://localhost:3000');
            
          })
