
//                 View Engine & Dynamic Rendering
//                 -------------------------------



//                 What is a View Engine
//                 ---------------------

// Answer:- A view engine allows to generate HTML pages dynamically by combining templates with data.
//  It is the tool used to render html files dynamically.

// How it Works?? 

//        * User requests a page (e.g., /profile)
//                             |                     
//        * Then Server fetches data (e.g., user info)
//                             |
//        * Server uses the view engine to insert that data into an HTML file
//                             |
//        * The completed HTML page is sent to the browser
 


//                Why use it in Backend?
//                ---------------------

// Answer:- 
//        * Can pass data from backend(Node.js/Express) to a template and it will display in a browser
//        * Helps in creating dynamic websites (like showing a user’s profile, orders, etc.).
//        * Keeps HTML structure separate from your server logic.



//              Popular Options (EJS, Pug, Handlebars)
//              --------------------------------------

// Answer:-
//       A view engine helps  dynamically build HTML pages using data from our backend.



// There are 3 popular view engines:-



//       1. EJS (Embedded JavaScript Templates)
//              Syntax Style:- HTML + <%= %>
// Eg:-  

//              <!-- profile.ejs -->
//               <h1>Hello, <%= name %>!</h1>
//               <p>Age: <%= age %></p>



//       2. Pug (formerly Jade)
//            Syntax Style: Indentation-based (no HTML tags)


// Eg:-
//           profile.pug
//             h1 Hello #{name}           :- no html like <h1>, <p> etc. Only indentation here
//             p Age: #{age}              :- #{variable} is used to insert values



//      3. Handlebars
//         Syntax Style: Mustache-style {{ variable }}

//         <!-- profile.handlebars -->
//            <h1>Hello {{name}}</h1>
//            <p>Age: {{age}}</p>



//                       ejs
//  1.res.render 
         res.render('page','data')   // two Arguments
//                                         1. Page
//                                         2. data






//                          Setting up EJS in Express
//                          -------------------------

//  STEP 1. Create a project

//Enter following in terminal, which will creates a folder and initializes a package.json file:-
//                 mkdir ejs-example
//                 cd ejs-example
//                 npm init -y          


//    STEP 2: Install Express and EJS
 //              npm install express ejs   ( Now the project has both Express and EJS installed.)



//    STEP 3:  Project folder structure

//              ejs-example/

//                     ├── views/                 :- Folder for EJS template
//                     │   └── home.ejs           :- EJS template
//                     ├── app.js                 :- server file
//                     ├── package.json



//    STEP 4 : Create app.js file(main server file)

//                    
                   const express = require('express');
                   const app = express();

                  //  Set the view engine to ejs
                  app.set('view engine', 'ejs');   // here we tell Express to use EJS as the 'view engine.'

//                                                What is EJS?

//                                                  * EJS means Embedded JavaScript Templates.
//                                                  * It helps to write HTML with JavaScript code 
//                                                  * It helps to create dynamic HTML pages on the server.


//                    Passing Data with res.render()             
//                    ------------------------------

                  //  Create a route
                  app.get('/', (req, res) => {
                    res.render('home', { name: 'Shanu' });    // when we write  res.render('file'), Express knows to look for an .ejs file and process it using EJS.
                                                              // It renders an HTML page from the EJS template file called home.ejs.
                                                              // It passes data { name: 'Shanu' } to the template.
                  });

                  //  Start the server
                  app.listen(3000, () => {
                 console.log('Server is running on http://localhost:3000');
                 });


//                           Views Folder & .ejs Files
//                           --------------------------


//    STEP 5: Create the EJS file in HTML

//                   <!DOCTYPE html>
 //              <html>
//                  <head>
//                      <title>Home Page</title>
//                  </head>
//                  <body>
  //                  <h1>Welcome <%= name %>!</h1>
//                  </body>
//                </html>




//    STEP 6: Run the server
//           node app.js







