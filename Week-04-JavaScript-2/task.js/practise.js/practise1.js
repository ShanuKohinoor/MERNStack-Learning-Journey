// Day 1-5 practise questions



                                 //Day 1: 
                   //Scope, Hoisting, Execution Context, etc.



//Q1. What is a variable’s scope?
     //Simple: Where can we use this variable in our code?

       //Answer:- place where variable can be used or accessed.
          // eg:-

// Global Scope
let a1 = 5; //  Global variable (accessible anywhere in this file)

function number() {
    // Function Scope (only accessible inside this function)
    let b = 10; //  Local variable (exists only inside this function)

    console.log(a1); //  Can access a1 (global)
    console.log(b);  //  Can access b (local to this function)
}

//  Outside the function                    
                            //if we call call function here(number()),we can acess b also here
console.log(a1); //  Can access a1 (global)
console.log(b);  // ERROR! b is not defined outside the function








// Q2. What will this print?

console.log(x);
var x = 5;      


    //Answer:-undefined
                       //This is because of hoisting.
                       //in case of let and cons also hoisted. But they will be in temporal dead zone untill it declared. And output will be referrence error




//Q3. What does this mean: JavaScript runs in two phases?
    //Hint: Memory first, code later.

     //Answer:- in two phases memory creation phase and code execution phase.

        // phase 1:- memory creation phase
             //sets memoryspace for variables and function

        //phase 2:-code execution phase

            //js runs line by line execution.
            //replace variables with sactual values.
            //it calls function if they are called
            //it handles,console,math etc




//Q4. Which error will happen here and why?

console.log(a);
let a = 10;

//Answer:- Reference error
              //This happens because when using let, the variable 'a' is in the Temporal Dead Zone (TDZ)—JavaScript knows about 'a' but it isn’t ready to use until it’s initialized. That's why we can see a ReferenceError instead of undefined.







                                  // Day 2: 
                       //Numbers, Math, Set/Map, etc.



//Q1. What is the output?

console.log(Math.max(5, 10, 2));
     //Answer:-10

//Q2. What is the difference between an array and a Set?
     //Answer:-
           //Array can hold duplicate values.
               //can access by index.


          //Set can only stores unique values.
              //Useful to store a collection of unique items.
              //No index (can’t access by position).








//Q3. What is BigInt used for?

     //Answer:- used for large numbers
               //Explanation:- BigInt lets us work with very large whole numbers beyond the safe limit of regular numbers.










                        //Day 3:
                   //DOM, window, events




//Q1. What is window in JavaScript?
     //Answer:-
           // The window object is the browser’s global object that represents the browser window and lets JavaScript interact with the web page and browser features.
           // The window object is like the room that holds everything for your webpage.

      //Difference between webpae and browser
            //Web Page
                 //A web page is like a document or a page we can see on the internet.

                 //It contains text, images, buttons, videos, and everything you interact with on a website.

                //written using languages like HTML, CSS, and JavaScript.

           //Browser
                 //A browser (like Chrome, Firefox, Edge) is a software program we use to open and view web pages.

                 //It loads, interprets, and shows the web page on your screen.



            


//Q2. How do you select an element by its id?
     //Answer:-document.getElementById("myId")


//Q3. What happens when you click a button with this code?

button.addEventListener("click", () => {
  console.log("Clicked!");
});
     //Answer:-when we take console..we can see clicked
            // Explanation:- When the button is clicked, the message "Clicked!" will be printed in the browser console.






                            // Day 4: 
                 //Async, setTimeout, Event Loop








//Q1. What is the difference between synchronous and asynchronous?
     //Answer:-
     // synchroonous means line by line execution. one at a time. 
             //It wait untill each step to complete.
     // asynchronous means it wont wait each step.


//Synchronous means the code runs line by line, and each step waits for the previous one to finish before moving to the next.

//Asynchronous means the code does not wait — it can start a task and move on to the next step without waiting for the previous one to finish (like timers, API calls).




//Q2. What will this code print?

console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");

     //Answer:-
        //A
        //C
        //B(After 1 second)   here it is asynchronous



//Q3.What is callback hell?
     //Answer:-
         // nested asynchronous functions
         // also known as pyramid of Doom



      //  Callback hell happens when you write many nested asynchronous functions (callbacks) inside each other, making the code hard to read and manage.
     // It looks like a pyramid or staircase — also jokingly called the "Pyramid of Doom" (not "pyramid of DOM").









                        //DAY 5
                // Promises, Async/Await, Error handling






//Q1. What are the 3 states of a Promise?
     //Answer:-
       //Pending
       //Fullfilled
       //Reject


//Q2. What does this do?

async function getData() {
  try {
    let result = await fakeAPICall();
    console.log(result);
  } catch (err) {
    console.log("Error:", err);
  }
}
     //Answer:- Will print result


//Q3. What happens here?

try {
  throw "Oops!";
} catch (e) {
  console.log(e);
}


     //Answer:- Oops!
