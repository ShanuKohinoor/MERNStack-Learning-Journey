//                                        PRACTICAL QUESTIONS
//                                        -------------------





//                                         QUESTION -1


//Task:

//                 Create a simple Node.js server using the http module that:
//                  Listens on port 5000.
//                  Responds with this plain text:
//                  "Welcome to your first Node.js server!"
//                  The response should be shown only if the request URL is /.
//                  For any other route, respond with:
//                  "Page Not Found" and use HTTP status code 404.



   const http = require('http')
   const server = http.createServer((req,res)=>{
     if (req.url == '/'){
    res.writeHead(200,{'content-type':'text/plain'})

    res.end("Welcome to your first Node.js server!")

     } else{
        res.writeHead(404)
        res.end("Page Not Found")
     }
   })

   server.listen(5000,()=>{
    console.log('Servervis running on http://localhost:5000');
    
   })