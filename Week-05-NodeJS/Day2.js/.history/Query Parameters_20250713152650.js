//                                  Query Parameters


// We can give key-value pair in URL
// Query parameters are key-value pairs sent in the URL after a ? and separated by &.


// Eg:- http://localhost:30001/search?name=Shanu&age=35
                               //name=shanu -> key is name, value is shanu
                               //age=25 -> key is age, value is 25

//Syntax: req.query

   app.get('/search',(req,res)=>{
    const name = req.query.name;
    const age = req.query.age
    res.send(`You  searched for name: ${name}, age:${age}`);
   })
   // if we give,    in browser, we will get,You searched for name: Shanu, age:35(This will be the out put).
    


       // Tried  query parameters in another file(express.js) with whole codes.
                       // Refer(express.js)

