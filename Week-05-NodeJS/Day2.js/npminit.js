//                                     NPMinit
//                                     ------


//  npminit is a command help to create package.json


//                                       package.json:- 
//                                       -------*------

//            * package.json is a file that stores important info about  Node.js project.
//            * It is npm's configuration file.
//            * Settings file used by npm helps to sort of set up and configure the project.
//                     * We can add scrits,dependencies,define all version information,names,author of project nama,description and keywords
//            * Everything information of the project is inside this file.


//                                   How to create packsage.json ?



//                                     Terminal
//                                        |
//                                        |
//                                        |
//                                        v
//                                    New terminal
//                                        |
//                                        |
//                                        |
//                                        v
//                                   npm init -y  / npm init



//                                Structure of package.json 


//                    {
//                       "name": "my-app",
//                       "version": "1.0.0",
//                       "description": "My first Node.js project",
//                       "main": "index.js",
//                       "scripts": {
//                         "start": "node index.js"
//                        },
//                        "author": "Shanu Shahanas",
//                        "license": "ISC",
//                        "dependencies": {
//                          "express": "^4.18.2"
//                         },
//                        "devDependencies": {
//                           "nodemon": "^3.0.1"
//                         }
//                     }




//  Uses:-

//        *  Organizes project info.

//        *  Makes it easy to share the project.

//        *  Allows running project commands easily (npm start, npm test).

//        *  Automatically installs all tools and packages via npm install.

//        *  Keeps track of which tools are needed for production vs development.




//                               How Node.js uses package.json ?

//        *  Reads main to know which file to start.

//        *  Reads dependencies to install necessary packages.

//        *  Reads scripts to run commands like npm start.

//        *  Provides metadata for sharing or publishing projects.





//                                  package-lock.json:- 
//                                  ---------*---------

//  package-lock.json is a file automatically created by npm when we install packages (npm install).

//         * Ensures everyone working on the project gets the same versions of packages.
//         * Prevents bugs caused by package updates.
//         * Makes the project more predictable and stable.

//  Eg:-  
//              If we  use express version 4.18.2.
//              Later, a new version 4.19.0 comes out.
//              If someone else runs npm install, package-lock.json makes sure they still get 4.18.2, not 4.19.0.


//                          Working of package-lock.json 
//                          -------*-------------*------  

//                       If we run npm install express
//                                      |
//                                      |
//                                      |
//                                      v
//                              npm updates both --------------> next time someone clones our project from github and runs npm install
//                                      |                                             |
//                                      |                                             |
//                 _____________________v______________________                       |
//                |                                            |                      v
//                |                                            |      npm reads package-lock.json and installs exactly the same versions as had before.  
//                |                                            |  
//                v                                            v
//           package.json                              package-lock.json
//       (adds "express": "^4.18.2")               locks exact version(depencies)


//  In simple words  package.json is the recipe, and package-lock.json is the grocery list with quantities and brands.


// utility:- nodemon  :- which helps to run changes automatically. we dont need to type every time. Eg:- if we change anything in our text or somethimg in node.js, we have to run by writing like this (node server.js) and press enter button. But with help of nodemon, we dont want to write everytime. It will run automatically.
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