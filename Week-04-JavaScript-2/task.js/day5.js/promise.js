//Macro task queue/callback queue:-
         // callback queue is the queue before execution
         // eg:- setTimeout



// Microtask queue/job queue:- 
         // Promise work here.


// Eventloop checks whether call stack is empty or not. If it finds empty,it will go first to microtask queue.

     // Then goes to callback queue/macrotask queue.

     const functn1 = ()=>{
        console.log("function 1");
        
     }

     const functn2 = ()=>{
        console.log("function 2");
        

     }

     const mainfunctn = ()=>{
        console.log("Main function");
         
        setTimeout(functn1,0)
     }



     //PROMISE:- It helps js to wait for finishing some tasks, and inform us once it finishes(either success or fail)
          // It ensures it will give a result definetely.Either resolve or reject(These are two arguments in promise).
          //Promise constructor takes the function called executor function,which has two parameters(reject&resolve)
    //If there is an error in callback hell(nested call back), it will be diffcult to sort
          //To solve the call back hell, promise is introduced.
    //if it is succes,resolve and if it is reject, it should be in reject.




  //PROMISE STATES

    // Promise work in 3 fields. it has 3 states:-
         //1. Pending:- Initial state.it is in pending. Nothing happened . Either resolve or reject didnt happen.
         //2. Fulfilled:- Operation completed successfully. And the promise has a resulting value
         //3. Reject :- Operation failed. And the promise has a reason for the failure.




      //Creating a promise?
           //  Promise can create with the help of promise constructor by passing two parameters.
           // Inside this function ,there will be performing an asynchronous operation,and can resolve when success and reject when it fails. 


    // What are resolve and Reject?

        //resolve (value):-if the task is success,call resolve() to send the result to the next step.
               // we can take output of resolve with the help of .then().
               // (value) will be passed to .then().


        //reject(error):- If the task is failure, call reject() to send the result to the next step.
              //we can take output of reject with the help of .catch().
              //error will be passed tp .catch().

        //But in the code,if isSuccess is true, only .then() will run, and .catch() will be ignored.



        let myPromise = new promise ((resolve,reject)=>{ // Promise created with help of promise constructor and 2 parameters 
                                                           //new promise creates a promise object
                                                                    // Basically promise is an object(so give new).
            let success = true;              
            if (success){
                resolve("Task finished");
            } else {
                reject("Task failed")
            }
        })
        
       .then((result){
         console.log(result);         // if it is solved
                                      //we can take output of result with the help of .then().
       })
       .catch((error){
        console.log(error);           // if it is rejected
       })                             //we can take output of reject with the help of .catch.()


                                     //Output:-  Task finished
                                    
