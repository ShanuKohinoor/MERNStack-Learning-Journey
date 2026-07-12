//                                       MODULE





//                                   What are Modules?
//                                   -----------------    

// Modules:- Simply javascript file. 
//          * It contains codes- functions,variables or logic, that can use other places in the app by importing this module.
//          * We can resuse.
//          * we can organise our code better
//          * if we have large project, same functionality in different files, we can use this module for both files.

//                                   Types of Modules
//                                   ----------------
 //                         ◦ Core Modules (like fs, path, os,http)
 //                         ◦ Local Modules (your own files)
 //                         ◦ Third-party Modules (installed via npm)


 // There are 3 types of modules:-
 // 1. Core Modules :- built-in in node.js. No need to install. We can use directly
 //              Eg:- 
 //               1. fs -> For working with the file system
//                2. path -> For handling file and directory paths
//                3. os -> For getting OS-related info (like memory, CPU)
//                4. http


 // 2. Local Modules :- Created by ourselves.
 //                 Refer export.js in day2 node.js


 // 3. Third-party Modules :- These are created by others and shared via npm (Node Package Manager). We have to install them first.
//                Eg:-  
//                    First install express like:-  npm install express


                const express = require('express'); // importing third-party module

                const app = express();

                // Create a simple GET route
                app.get('/', (req, res) => {
                    res.send('Hello from Express!');
                });

                // Start the server
                app.listen(3000, () => {
                     console.log('Server running at http://localhost:3000');
                });






 //       ◦ Difference between CommonJS and ES Modules
 //       --------------------------------------------

 //  Both are module systems in javascript, which helps to organise and reuse the codes across files.

 //    Common JS:- which is old format,used by default in Node.js
 //    To import, we use require().
 //    To export, we use module.exports.
 //       Syntax:-
 //           Export:-        
 //                file math.js
                    function add(a,b){           
                        return a+ b;
                    }

                 module.exports = add;

//           Import :- 
 //                 file app.js
            const add = require('./math')
            console.log(add(2,3));     //OutPut = 5
            

 //   *  ES Modules :- Modern format, used in browsers and now supported in Node.js


 //  Used with "type": "module" in package.json 
 //  Uses import and export


 //       Export:-
//             file math.js
           
        export function add(a,b) {
            return a+b;
        }

//       Import:-
//             file app.js

        import {add} from './,math.js'
        console.log(add(2, 3));          // Output= 5


//  we can use ES Module in Node.js by two ways. They are:-

//  Option 1: Rename files to .mjs
//               node app.mjs


// Option 2: Add "type": "module" to package.json
//         {
//           "type": "module"
//         }













