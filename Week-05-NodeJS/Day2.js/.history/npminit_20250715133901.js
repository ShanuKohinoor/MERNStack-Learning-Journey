//                                     NPMinit


//  npminit is a command help to creat package.json
// package.json:- 


// utility:- nodemon  :- which helps to run changes automatically. we dont need to type every time. Eg:- if we chane anything in our text or somethimg in node.js, we have to run by writing like this (node server.js) and press enter button. But with help of nodemon, we dont want to write everytime. It will run automatically.
//                          *  we can get it by installing nodemon utility.
//                          *  we must to install it globally. 
//                                        -  npm install -g nodemon
//                                        - then press enter
//                                        - How to check whether it install or not??
//                                                 * terminal -> new terminal -> nodemon (here we use nodemon,instead of node )
//                                                              - and when we save/ refresh(in browser), it will automatically run without enter every time 
//                                                             


const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type':'text/plain',
        "access-control-allow-origin":'*'

    })
    if (req.url == '/' && req.method == 'GET'){
        res.end('Hello, Welcome to my page')

        } else if (req.url == '/'  && req.method == 'POST'){
            res.end ('Hello,Welcome to my post')
    } else if (req.url == '/about'){
        req.end('Hello, Welcome to about page')
    } else if ( req.url == '/contact'){
        req.end('Welcome to contact page')
    }
})

server.listen(6000,()=>{
    console.log('Server running http://localhost:6000');
    
})