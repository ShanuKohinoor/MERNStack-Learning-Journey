//                      HANDLING UNMATCHED ROUTE



//                With the help of 'app.use', we can get any type of handler 

            module.exports = function(app){                  //here instead of writing same code i exported my previous code. Otherwise it wont work 'app.use'. 'app.use must be in the end of app.js, if we write entire code. Both codes and app.use should be in the same file. 
                                                                // So, i exported here, instead of writing entire code again.
                app.use((req,res)=>{
                    res.status(404).send('Invalid Route we set')
                })
            }



