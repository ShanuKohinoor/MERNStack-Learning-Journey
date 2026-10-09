
//                              app.js(for view dengine file)

//                     ├── views/                 :- Folder for EJS template
//                     │   └── home.ejs           :- EJS template
//                     ├── app.js                 :- server file
//                     ├── package.json



//  refer home.ejs inside views folder



                  const express = require('express');
                   const app = express();

                  //  Set the view engine to ejs
                  app.set('view engine', 'ejs');  //  here we tell  Express to use EJS as the 'view engine.'



                  //  Create a route
                  app.get('/', (req, res) => {
                    res.render('home', { name: 'Shanu' });
                  });

                  //  Start the server
                  app.listen(3000, () => {
                 console.log('Server is running on http://localhost:3000');
                 });
