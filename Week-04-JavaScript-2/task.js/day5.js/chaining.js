// CHAINING:-Chaining means connecting multiple .then() methods one after another on the same Promise — where each .then() gets the value returned from the previous one.

    new Promise (function(resolve,reject){      // new promise is created
        resolve(1);                             // it resolve with the value 1
    })                                          //Now, the promise is fulfilled and goes to next first .then()


    .then(function(result){                     //result = 1 (from resolve(1))
        console.log("First then:",result);      //Prints: First then: 1
        return result + 1;
    })


    .then(function(result) {                    // result = 2 (from the return of previous .then)
        console.log("Second then:", result);    // Prints: Second then: 2
        return result + 1;                      //Returns 2 + 1 = 3 to the next .then()
    })


    .then(function(result) {                    // result = 3 (from previous .then)
        console.log("Third then:", result);     // Prints: Third then: 3
    });
                                
                           //Output:-
                                // First then: 1
                                //Second then: 2
                                //Third then: 3
//mutiple then method use inside a promise.
//To avoid callback hell
//each then return a promise
     

