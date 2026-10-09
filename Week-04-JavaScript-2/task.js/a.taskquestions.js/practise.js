//call back hell with synchronous

function step1 (cb){
  console.log("Step 1");
  cb()
}

function step2(cb1){
    console.log("Step 2");
    cb1();
}

function step3(cb2){
    console.log("step 3");
    cb2();
}


step1(()=>{
    step2(()=>{
        step3(()=>{

        })
    })
})










//call back hell with asynchronous



function stp1(callback1){
    setTimeout(()=>{
        console.log("A")
            callback1()

    },2000)
}

function stp2(callback2){
    setTimeout(()=>{
        console.log("B")
           callback2()
 
    },3000)
}
function stp3(callback3){
    setTimeout(()=>{
        console.log("C")
           callback3()
 
    },2000)
}

stp1(()=>{
    stp2(()=>{
        stp3(()=>{
console.log("Asynchronous done")
        })
    })
})

 //CODE EXECUTION:- Global execution done

                                 //MEMORY CREATION PHASE

//Memory space created for variables and function.
//Here memory space created for function.

                                //CODE EXECUTION PHASE


//Line by line execution done with the help of call stack.


//1. Function stp1 is called
           // stp1 push to the call stack
           //Inside stp1 
                    // setTimeout(() => {
                       // console.log("A");
                       //callback1();
                    //}, 2000);
              //this step will takes place and print A.













  //  Write a function called checkNumber that takes a number as input and returns a Promise.

        //If the number is even, the Promise should resolve after 2 seconds with the message:
        //"The number X is even" (where X is the input number).

        //If the number is odd, the Promise should reject immediately with the message:
        //"The number X is odd".

        //Then, call this function with a number and handle the result using .then() and .catch() to print the messages.

          

   let promise = new Promise((resolve,reject)=> {
    let X=10;
    if (X %2 === 0){
        setTimeout(()=>{
        resolve(`The number ${X}  is even`)

        },2000)
    } else{
        reject("The number X is odd")
    }

   })

   promise
   .then(result=>console.log(result))
   .catch(error=>console.log(error))








                                 // Question



  //2. Check if a string is long or short
//Write a function checkLength that takes a string as input and returns a Promise.

//If the string length is greater than 5, resolve after 1 second with:
//"The string '${str}' is long".

//If it’s 5 or less, reject immediately with:
//"The string '${str}' is short".
// Call the function and handle result with .then() and .catch().

let promise1 = new Promise((resolve, reject) => {
    let strng = "Hello world"
    if(str.Length>=5){
        setTimeout(()=>{
         resolve(`The string ${str} is long`)
        },1000)

    } else {
        reject(`The string ${str} is short`)
    }
})
promise1
   .then((result)=>console.log(result))
   .catch((error)=>console.log(error));





//3. Temperature Check
//Write a function checkTemperature(temp) that returns a Promise.
//Use setInterval to simulate checking the temperature every second.

//If the temperature is above 30, resolve after 2 seconds with:
//"It's hot: ${temp}°C"

//If the temperature is 30 or below, reject after 1 second with:
//"It's cool: ${temp}°C"
//Make sure to clear the interval when the Promise is resolved or rejected.


let promise3 = new Promise((resolve,reject)=>{
    let temp = 60;
    let count = 0;             
                                                                     

    let interval = setInterval(() => {
               count++; // Increase count every time interval runs (every 1 second)

    if (temp>=30 &&count === 2){     // After 2 intervals (2 seconds)

        clearInterval(interval)
            resolve(`It's hot: ${temp}°C`)
            
        }
    if (temp<30 && count === 1){
        clearInterval(interval)
    
        reject(`it's cool: ${temp}°C`);
    }
        
    
}, 1000);  // Runs every 1 second
})
 
 promise3
   .then((result)=>console.log(result))
   .catch((error)=>console.log(error))
   
              // In memory  creation phase:-
                        // sets memory for promise3,temp,count
                        // function definition for set interval,resolve,reject 

             // code execution phase:-
                        // new promise constructor called.

                        // inside this:-
                              // temp sets 60
                              // count is initialized to 0
                              // set interval is called with callback with delay of 1000ms
                                   //setinterval registered in web API.


                        //until this resolve or reject wont be called
                        //promise in pending state




                     //Web API environment
            //After 1 sec,
                              //setinterval reaches its 1 sec and call callback

                    //Callback queue
                            //callback of setinterval placed in the callback queue

                    //Event loop
                           // call stack empty-> eventloop pushes callback to the call stack

                    //inside call stack
                           // count becomes 1
                           //if(temp >=30 && count ===2)  false
                           //if (temp<30 && count ===1)  false
                           //nothing happens  -> call back exist

            //After 2 seconds,
                          //callback again pushed into the queue ->  call stack -> executes
                          // inside callback
                                //count =2
                               // temp =60
                               
                          //if(temp >=30 && count ===2)  True

                                  // clearinterval called-> stops further interval
                                  // resolve called with (`It's hot: ${temp}°C`)

                          //Promise resolved
                               //  The Promise promise3 now becomes fulfilled with value "It's hot: 60°C"

                          //Microtask queue
                               //.then(...) is pushed into the microtask queue

                          //Event loop
                               // after current task finishes, event loops check microtask queue -> runs .then()

                               // .then((result) => console.log(result))
                               // It's hot: 60°C


                       










//4. Divisibility Checker
//Write a function checkDivisibleBy5(num) that returns a Promise.

//If num is divisible by 5, resolve immediately with:
//" ${num} is divisible by 5"

//Otherwise, reject after 1.5 seconds with:
//"${num} is not divisible by 5"


let promise4 = new Promise((resolve, reject) => {
    let num = 20;
    if(num%5 === 0){
            resolve(`${num} is divisible by 5`)
     } else {         
        setTimeout(()=>{

            reject(`${num} is not divisible by 5`)
        },1500)

        }
    })


promise4
.then((result)=>console.log(result))
.catch((error)=>console.log(error))






//5. Age Verification (Immediate)
//Write a function verifyAge(age) that returns a Promise.

//If age is 18 or above, resolve immediately with:
//"You are an adult (age ${age})".

//If under 18, reject after 1 second with:
//"You are too young (age ${age})"


let promise5 = new Promise((resolve,reject)=>{
    let age = 15;
    if (age >= 18){
        resolve(`You are an adult(age${ age })`)
    } else{
        setTimeout(()=>{
            reject(`You are too young(age${ age })`)
        },1000)
    }
})
promise5
.then((result)=>console.log(result))
.catch((error)=>console.log(error))






//Write a function called checkPositive that takes a number as input and returns a Promise.

//If the number is positive (greater than zero), the Promise should resolve after 1 second with the message:
//"The number X is positive".

//If the number is zero or negative, the Promise should reject immediately with the message:
//"The number X is not positive".

//Then call this function with a number and handle the result using .then() and .catch() to print the outcome.


let promise6 = new Promise((resolve,reject)=>{
    let X = -7
    if( X > 0){
        setTimeout(()=>{
            resolve(`The number ${X} is  positive`)
        },1000)
    } else {
        reject(`The number ${X} is not positive`)

    }
})

promise6
.then((result)=>console.log(result))
.catch((error)=>console.log(error))












//Write a function called countdownCheck(number) that returns a Promise.

//Use setInterval to simulate a countdown, decreasing the number by 1 every 1000ms (1 second).

//The countdown should stop when the number reaches 0.

//If the starting number is 5 or more, resolve when countdown ends with:
//"Countdown complete: Started from X"
//(where X is the starting number)

//If the starting number is less than 5, reject after 1 second with:
//"Too short to start countdown: X"

let promise7 =  new Promise((resolve, reject) => {

    let X = 6
    let count = 0
     
    let interval = setInterval =>{
        count ++;
        while(X<=0){
        if(X>=5){
            clearInterval(interval)
        resolve(`Countdown complete:Started from X`)
        X--;

    } 
    if(X<5 ){
        reject(`Too short to start countdown: X`)
    }

    }
}

    
},1000)


promise7
.then((result)=>console.log(result))
.catch((error)=>console.log(error))













//Question 4: checkPrime
//Task:
//Write a function called checkPrime that takes a number as input and returns a Promise.

//If the number is a prime number, the Promise should resolve after 2.5 seconds with the message:
//"The number X is prime".

//If the number is not prime, the Promise should reject immediately with the message:
//"The number X is not prime".

//Then, call the function with a test number and handle the result using .then() and .catch().

//(Hint: A simple way to check for prime numbers: a number greater than 1 is prime if it has no divisors other than 1 and itself.)










//Create two promises. First returns "First done" after 1 second.
//Second returns "Second done" after 2 seconds.
//Chain them using .then()
let firstPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First done")
    },1000)
})
let secondPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second done")
    },2000)
})
firstPromise
.then((result)=>{
    console.log(result);
    return secondPromise;          //return secondPromise here
})
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error);   
})







// Create a promise that resolves after 1 second with the message "Hello,Shanu !". Then log the message using .then().


let promise8 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Hello, Shanu!")
    },1000)
})
promise8
.then((result)=>console.log(result))
.catch((error)=>console.log(error))






//🔶 Task:
//Start with a promise that resolves after 3 second with "Hello, Shahanas!", then:

//Add " How are you?"

//Add " Let's learn Promises!"

let promise9 = new Promise((resolve, reject) => {
    setTimeout(()=>{
         resolve("Hello,Shahanas!")
    },3000)
})

let promise10 = new Promise((resolve, reject) => {
    resolve("How are you?")
})

let promise11 = new Promise((resolve, reject) => {
    resolve("Let's learn Promise!")
})

promise9
.then((result1)=>{
    console.log(result1);
    return promise10;   
})

.then((result2)=>{
    console.log(result2);
    return promise11  
})
.then((result3)=>{
    console.log(result3);   
})
.catch((error)=>console.log(error))
                            //Output
                                //Hello,Shahanas!
                                //How are you?
                                //Let's learn Promise!




// we can also write code like,

let promise12 = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve("Hello,Shahanas!");
    }, 3000);
});

promise12
.then((result1) => {
    console.log(result1);
    return result1 + " How are you?";
})
.then((result2) => {
    console.log(result2);
    return result2 + " Let's learn Promise!";
})
.then((result3) => {
    console.log(result3);
})
.catch((error) => console.log(error));   // Output will be in single line
                                                //Hello,Shahanas!
                                                //Hello,Shahanas! How are you?
                                                //Hello,Shahanas! How are you? Let's learn Promise!











//Write a function doubleNumber(num) that returns a promise. It should double the number after 1 second. Chain .then() to:
//Double the number again
//Log the final value
 //Input: doubleNumber(5) → Output should be: 20        
 function doubleNumber(num) {
    return new Promise((resolve, reject) => {
        let number = 5
        setTimeout(()=>{
            resolve(2*num)
        },1000)
    })   
 }
 doubleNumber(5)
 .then((result)=>doubleNumber(result))
 .then((finalresult)=>console.log(finalresult))
 .catch((error)=>doubleNumber(error))












function sendToServer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data send successfully")
        },1000)
    })
}
//sendToServer()
//.then((result)=>console.log(result))


async function sendData(){
    const result = await sendToServer()
        console.log(result);
        
    }
sendData()



















//Gopika ma'am review questio



function eventLog(eventName){
    console.log("Event logged:",eventName);
    
}


function throttle(fnctn,delay){
    let lastCall=0;
    return function(...args){
        let now = new Date().getTime();
        if(now-lastCall>=delay){
             lastCall = now;
            fnctn(...args);
        }
    }
}

let throttled = throttle(eventLog,2000)
throttled.addEventListener("click",throttled)

