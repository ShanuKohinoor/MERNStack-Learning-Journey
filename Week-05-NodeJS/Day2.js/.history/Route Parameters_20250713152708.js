//                                      Route Parameters


//   Route Parameters:- Variables inside URL     
//    Eg:- We can write req.params.id




             app.get('/user/:id',(req,res)=>{
                  res.send(`Your Id is ${req.params.id}`)           //if we give 10, we will get Your Id is 10(in Thunder client/browser)
             })                                                             // we can search depends upon id of the student



                    // Tried  route parameters in another file(express.js) with whole codes.
                       // Refer(express.js)

