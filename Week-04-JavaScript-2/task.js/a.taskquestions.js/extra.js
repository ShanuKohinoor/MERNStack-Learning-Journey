console.log("start")      //this is a normal synchronous function.
                          //goes into call stack and console. Will get the output.
                                                    //output:- start

let myPromise = new Promise((res,rej)=>{     // new promise created
                                             // Js immediately call executor function

    let data = true                          //stores true in variable data. nothing prints
    console.log("Inside promise function")   //synchrous. so print this
                                                   //output:- 
                                                             // start
                                                             // Inside promise function
    if(data){
        res("Success")                         //data is true 

                                               //So res("Success") is called
                                               // But it does not run .then() right now.
                                               //Instead, .then() goes into the microtask queue and waits until all normal code is finished.
                                               //Promise is resolved
                                               //.then() is waiting in line



    }
    else{
        rej("failed")
    }
    
})
myPromise
.then((data)=>{console.log(data)})        //If the promise is resolved -> run console.log(data) in .then()

.catch((data)=>{console.log(data)})       //If rejected -> run console.log(data) in .catch()
   
console.log("end")                 // Normal synchronous. will print
                                           //output:-
                                                    // start
                                                    //Inside promise function
                                                    //end


                                 
       //After all synchronous code finished, Js checks micro tasks queue.
                     // it finds .then() 
                        //.then((data) => { console.log(data); })
                          //runs with resolved value "Success" and prints 'Success'.





                                     // Final  Output:-
                                         // start
                                         //Inside promise function
                                         //end
                                         //Success

//Question 1.
                           console.log("A");

                          let p14 = new Promise((resolve, reject) => {
                               console.log("B");
                               resolve("C");
                           });

                           p14.then((value) => {
                              console.log(value);
                            });

                            console.log("D");
                                   //Output:-
                                          //A
                                          //B
                                          //D
                                          //C
//Question 2.

let p = new Promise((resolve, reject) => {
  resolve("Hello");
});

console.log("Before then");

p.then((value) => {
  console.log("Inside then:", value);
});

console.log("After then");
                                 //Output
                                       //Before then
                                      //After then
                                      //Inside then: Hello

//Question 3.
console.log("Start");

let p1 = new Promise((res, rej) => {
  console.log("Inside Promise");
  res("Done");
  console.log("After resolve");
});

console.log("Middle");

p1.then((data) => {
  console.log("Result:", data);
});

console.log("End");
                                  // Output:-
                                     // Start
                                     // Inside Promise
                                     // After resolve
                                     // Middle
                                     // End
                                     // Result: Done

//Question 4.
console.log("Start");

let p2 = new Promise((res, rej) => {
  console.log("Inside Promise");

  setTimeout(() => {
    res("Resolved after timeout");
  }, 0);

  console.log("After setTimeout");
});

p2.then((data) => {
  console.log("Then:", data);
});

console.log("End");    //Output:-
                                //Start
                                 // Inside promise
                                // After setTimeout
                                //End
                                /// Then: Resolved after timeout





//Question 5.
console.log("Start");

let p3 = new Promise((res, rej) => {
  console.log("Inside Promise");
  rej("Something went wrong");
  console.log("After reject");
});

p3.then((data) => {
  console.log("Then:", data);
}).catch((err) => {
  console.log("Catch:", err);
});

console.log("End");
                                //Output:-
                                   // Start
                                   // inside promise
                                   //After reject
                                   //End
                                   // Catch: Something went wrong





//Question 6.
console.log("Start");

let p4 = new Promise((res, rej) => {
  console.log("Inside Promise");

  setTimeout(() => {
    rej("Error after timeout");
  }, 0);

  console.log("After setTimeout");
});

p4.then((data) => {
  console.log("Then:", data);
}).catch((err) => {
  console.log("Catch:", err);
});          

console.log("End");                     //  Output:-
                                               // Start
                                               // Inside promise
                                               // After setTimeout
                                               // End
                                               // Catch: Error after timeout

//Question 7.
console.log("Start");

let p5 = new Promise((res, rej) => {
  res(1);
});

p5.then((val) => {
  console.log("First then:", val);
  return val + 1;
}).then((val) => {
  console.log("Second then:", val);
});

console.log("End");
                                    //Output:-
                                        // Start
                                        //End
                                        //First then: 1
                                        //Second then: 2

//Question 8.
console.log("Start");

let p6 = new Promise((res, rej) => {
  res(10);
});

p6.then((val) => {
  console.log("First then:", val);
  throw "Error in first then";
})
.then((val) => {
  console.log("Second then:", val);
})
.catch((err) => {
  console.log("Catch:", err);
});

console.log("End");
                     // Output:-
                         //Start
                         //End
                         //First then:10
                         //Catch:Error in first then



//Question 9.
console.log("Start");

let p7 = new Promise((res, rej) => {
  rej("Initial rejection");
});

p7.then((val) => {
  console.log("Then:", val);
}).catch((err) => {
  console.log("Catch:", err);
}).then(() => {
  console.log("After catch then");
});

console.log("End");
                           //Output:-
                              // Start
                              // End
                              // Catch:Initial rejection
                              //After catch then  
//Question 10.
console.log("Start");

let p8 = new Promise((res, rej) => {
  res(5);
});

p8.then((val) => {
  console.log("First then:", val);
  return new Promise((resolve) => {
    setTimeout(() => resolve(val * 2), 100);
  });
}).then((val) => {
  console.log("Second then:", val);
});

console.log("End");
                       //Output
                          //Start
                          //End
                          //First then: 5
                          //Second then:10


//Question 11.
//Question 12.
//Question 13.
//Question 14.
//Question 15.



