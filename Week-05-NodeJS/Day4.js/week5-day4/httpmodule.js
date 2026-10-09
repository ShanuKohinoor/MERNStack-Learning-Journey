//                     httpModule


// Http module can create an Http server that listens to server ports and gives a response back to a client.




   const http = require('http')
   const url = require('url')   // The 'url' module helps us parse the incoming request URL.


   const server = http.createServer((req,res)=>{
    const rUrl = url.parse(req.url,true).pathname;

    if (rUrl === '/'){
        res.write ('Home Page');           // Send response for Home page
        res.end();                         // End the response
    } else if ( rUrl === '/about'){        
        res.write('About Page')            // Send response for About page
        res.end();
    }  else if (rUrl === '/contact'){      // Send response for Contact page
        res.write('Contact Page')
        res.end();
    }   else {
        res.write ('404 not found')        // Send 404 response for unknown routes
        res.end();
    }

   })
   server.listen(5000,()=>{
    console.log('Server is running at http://localhost:5000');
    
   })