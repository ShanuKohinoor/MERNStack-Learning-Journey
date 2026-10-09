//async and await are special keywords in JavaScript used to handle Promises in a cleaner and simpler way, just like writing synchronous code.
       //Using of .then() chaining may get messy.
       //To resolve this we use async and await.
       //async keyword makes a function always return a Promise.
       //await pauses the function until the Promise resolves.
       //Error handling with try...catch
       //only inside asynch function





        function waitOneSecond() {
            return new Promise(resolve => {    // returns a promise
               setTimeout(() => {
                 resolve(" 1 second passed");  //After 1 second,it calls resolve
                },1000);
            });
        }                     //waitOneSecond() is a function that waits for 1 second without stopping everything, then returns a message.
                      
        async function run() {    //Declaring run() as async means we can use await inside it.
                                      //async also means run() returns a Promise.
            console.log("Start");  // prints: Start
            const result = await waitOneSecond();  //waitOneSecond() returns a Promise (which resolves after 1 second).

            console.log(result);  //  prints: 1 second passed
            console.log("End");   //prints:End
        }
        
        run();










function getName (){
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve("Shanu")
          },3000)

     })
     
}
function getNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("98765432")
        },5000)
    })
}
//Promise.all([getName(),getNumber()]).then((result)=>{
//console.log(result)           //will get output like this:-
                                    //[ 'Shanu', '98765432' ]   in a single line with together. wont print separately...wont wait for number of seconds.

//});


//we can use async await instead of .then()...await used to wait until the promise resolve.
    async function getUser(){
        let name = await getName();
        console.log(name)
    }
    async function getUser1(){
        let number = await getNumber();
        console.log(number);
    }
getUser();
getUser1();          //Shanu
9                    //8765432









        //From Callback Hell ➝ Promises ➝ Async/Await

        //Callback
             //Callback:- When in nested callbacks (callbacks inside other callbacks), the code gets very messy and hard to read or fix.
        
        
        //Promises 
             //Promises help avoid many nested callbacks by using .then() one after another.
             //This makes the code easier to follow and read.
             //Also, errors are easier to catch with .catch().

        //Asynch/Await
             //Makes asynchronous code look synchronous.

             //Easier to write, read, and debug.

             //Uses try...catch blocks for error handling.


















