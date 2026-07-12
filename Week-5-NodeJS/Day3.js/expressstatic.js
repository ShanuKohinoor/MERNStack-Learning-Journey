//                        Using express.static() to Serve Static Files
//                        --------------------------------------------

// Express.static is a built-in middleware.
//  It allows  to serve static files like HTML, CSS, images, or JavaScript from a public folder to the browser.

                   const express = require('express');
                   const app = express();

                    // Serve static files from the 'public' folder
                    app.use(express.static('public'));

                     app.listen(3000, () => {
                          console.log('Server is running at http://localhost:3000');
                     });


//  Syntax:- 
        app.use(express.static('Folder name'))    // here i use 'public' as the folder name.
                                               //  This helps to serve everything inside 'public' folder.

 //                    URL                                 What It Shows  

 //       `http://localhost:3000/index.html`                 HTML file 
 //       `http://localhost:3000/style.css`                  CSS file  
 //       `http://localhost:3000/logo.png`                   image     




 
//   Folder structure:-

 //                              project/
 //                                  │
 //                                  ├── public/
 //                                  │     ├── index.html
 //                                  │     ├── script.js
 //                                  │     └── style.css
 //                                  │
 //                                  └── app1.js






 


 // Serve static files in Express by setting up a public folder and using express.static() to access HTML, CSS, and JS files.
 // -------------------------------------------------------------------------------------------------------------------------
  


 //Answer :-      Refer 'public' named folder and app1.js for this answer.


 // We need to create a new folder named 'public'
 //               inside that we have create,
 //                   * index.html
 //                   * script.js
 //                   * style.css

 //  Create a file outside 'public' folder named app1.js







 //                                static-example/

 //
 //              │
 //              ├── app.js                ← main Express server file
//               ├── public/               ← folder to store static files
//               │     ├── index.html      ← your HTML file
//               │     ├── style.css       ← CSS file
│//                    └── script.js       ← JS file
