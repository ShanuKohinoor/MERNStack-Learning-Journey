// Promise.all(), Promise.race(), Promise.any()
   

   //JAVASCRIPT PROMISES:-

      //Javascript promises are objects that represent the eventual completion or failure of an asynchronous operation.
      //They provide a cleaner way to work with asynchronous code compared to traditional callback functions.





                         //Promise.all()



// 1. Promise.all():- Takes an array of promises and returns a new promise that fulfills when all the promises in the array fulfilled or rejects when any of them reject.
       //That means wait for all promises to succeed.
       //If anyone fails,the whole thing fails.
       //Syntax:-
           //Promise.all[promise1,promise2,promise3]


    //Eg  for success case:-
           const p1 = new Promise((resolve,reject)=>{            
            resolve(10);                                  //Promise resolved with 10
           })                                             // p1 is a Promise object.

                                                          // It's already resolved.

                                                          // It gives the value 10 when we use .then() on it.

           const p2 = new Promise((resolve, reject) => {    
            resolve(20);                                  //Promise resolved with 20
           })
 
           const p3 = new Promise((resolve, reject) => { 
            resolve(30);                                  // Promise resolved with 30
           })

    //We can write these steps like this way also:-
            //const p1 = Promise.resolve(10);
            //const p2 = Promise.resolve(20);
            //const p3 = Promise.resolve(30);


     Promise.all([p1,p2,p3])
     .then(values => console.log("Successfully completed All:", values))
     .catch(error => console.log("Error:", error))
                                 // Output:- Successfully completed All: [ 10, 20, 30 ]



     //Eg  for Failure case:-

     const p4 = new Promise((resolve,reject)=>{
       resolve(50);
     })

      const p5 = new Promise((resolve, reject) => {
       reject("Failed");
      })

      const p6 = new Promise((resolve, reject) => {
       resolve(60);
      })


      Promise.all([p4,p5,p6])
      .then(value =>console.log("Successfully completed All:" ,value))
      .catch(error =>console.log("Error:",error))    //Output:-Error: Failed










                            //Promise.race()



//Promise.race():- same like Promise.all() but this one fulfills or rejects as soon as one of the promises in the variable fulfills or rejects.
    //Returns the first promise that finishes,no matter if it's a success or a failure.



     //Syntax:-
          Promise.race([promise1, promise2, promise3])

   const p7 = new Promise((resolve,reject)=>{
       setTimeout(()=>resolve("p7 success"),1000)
   })

   const p8 = new Promise((resolve,reject)=>{
       setTimeout(()=>reject("p8 failed"))
   })
   Promise.race([p7,p8])
   .then (result=>{
       console.log("Result:",result);
   })
   .catch(error=>{
       console.log("Error:",error)
   })
                           //Output:-Error:  p8 failed
                                //it takes eventhough it failed
















                  //Promise.any()



//Promise.any():-Returns the first promise that is successful(ignores failed ones).
       

     //Syntax:-
         Promise.any([promise1, promise2, promise3])

const p9 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p9 failed"), 100);
});

const p10 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p10 success"), 200);
});

const p11 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p11 success"), 300);
});

Promise.any([p9, p10, p11])
  .then(result => {
    console.log("Result:", result);
  })
  .catch(error => {
    console.log("All failed:", error);
  });
              //Output:-   Result: p 10 success
                           //p9 fails. So didnt take
                           //p10. first success. so take that