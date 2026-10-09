// Create a basic HTML page with a button that fetches data from your Node server and displays it in a <div>.





   const http = require('http')
   const server = http.createServer((req,res)=>{
    res.writeHead(200, {  
      'Content-type':'text/plain',
      'Access-Control-Allow-Origin': '*'    // allows requests from any origin (needed for CORS(CROSS ORIGIN RESOURCE SHARING))
                                               // This line helps the HTML file (on one port) is allowed to get data from your Node server (on another port).
                                                   // Eg:-
                                                      //  if HTML is running on: http://127.0.0.1:5500 and Node server is on: http://localhost:4000

                                                          //By default, the browser blocks this.
                                                          //So we add this line: 'Access-Control-Allow-Origin': '*'

})

    res.end('Hello,This is my file')
   })

   server.listen(4000,()=>{
    console.log('server is running on http://localhost:4000');
    
   })

      