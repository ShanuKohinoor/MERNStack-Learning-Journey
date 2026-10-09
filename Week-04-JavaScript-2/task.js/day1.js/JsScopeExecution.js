

    //JavaScript Scope & Execution Context
            //Scope is the area where variable is available or accessible.
            //Execution context:-It is an environment where js is executed and evaluated.
            //Everything in Javascript happens inside an execution context.
            //Before execution of code,a memory space for variables and function will create.
            //It has two components:- Memory execution component and code execution component.


    // What is Execution Context? (Global & Functional)
        //Global execution context

          //When we run the code, a global execution context will create.
          //Added to call stack firstly.
          //'this' value refers to global object.
          // GEC: Top-level code, created once.




        
        //Functional execution context.

          //When a function called,functional execution context will create.
          //Added  to call stack when a function called.
          //'this' value depends on how function is called
          // FEC: Per function call, multiple created as needed.

//Eg:-
        const name = "Shanu"

        function sayHello(){
            const message = "Hello" + name;
            console.log(message);
        }

        sayHello();            //HelloShanu

        //What happens here? How it works?
           //Call stack flow
             
              //1. GEC created(when run the code) --> name,sayHello loaded.
              //2.  sayHello called --> FEC is created for sayHello.
              //3. After sayHello finishes --> FEC removed.
              //4. Back to GEC --> Program ends.
               





    //How JavaScript Executes Code in Two Phases
          //The execution context is creted in 2 phases:-
              // 1) creative phase/ memory creation phase
              // 2) code execution phase



              // 1) creative phase/ memory creation phase

                    // JavaScript scans code from top-bottom. But doesn't execute it. Instead if that it allocate space for variables and functions.
                    // Actions in this phase
                          //1. sets up the scope
                          // 2. Creates the window object (in browsers) or global (in Node.js).
                          // 3. Creates 'this' keyword.
                          // 4. Hoists:

                                 //var -->Memory allocated and initialized to undefined

                                 // function declarations -->  Are stored fully during the memory creation phase.

                                 // let and const -->They are also hoisted, but stay in Temporal Dead Zone (TDZ) and are not initialized

                        //Eg:- 
                         console.log(x);                //undefined
                         console.log(greet());          // Hello

                         var x =10;

                         function greet(){
                            return "Hello";
                         }



              
                    // 2) code execution phase

                        // Actions in this phase:
                             // 1. Assign values to variables (x = 10)

                             // 2. Execute function calls (greet() is run)

                             // 3. Perform operations, expressions, and control flow (if, loops, etc.)

               console.log(x);       // undefined
               console.log(greet()); // "Hello"

               var x = 10;

                function greet() {
                  return "Hello";
                }



    //Hoisting:- we can access variables &functions before initialization,without any error
        //eg:- 
        display();                   // Hello javascript
        console.log(x);              //Undefined
        var x=8;             
         function display(){
            console.log("Hello Javascript")
         };                


        



//Temporal Dead Zone (TDZ) in JavaScript:- After the variable hoisted,before initialization this variables are in temporal deadzone.
  //To access such type of varaiables, it should be access.
  //In Javascript, let and const are hoisted but not initialized.The time between hoisting and actual initialization is TMD
          //If we try to access the variable before it declared, will get a ReferenceError.

             console.log(a); //  ReferenceError: Cannot access 'a' before initialization
             let a = 10;



//call stack
       //JavaScript uses the call stack to manage function calls, since it is single-threaded.
       //Handles everything to manage this execution context creation,deletion & the control. 
       //Bottom will have global execution context.
       //when a function invoked, new execution context is created. Te execution context will go inside the call stack.
       //After that, it will return and that execution context will delete.
       //After that new execution context will create.



// JavaScript is a Single-Threaded Language.Why?
      //In Javascript code execution takesplace in line by line 
      //It uses one line at a time to make the code simple
      //It uses event loop to handle other tasks in the background to avoid stopping the line by line flow.





//STRICT MODE:- 
           //if we run a Javascript, some times error happen.
           // To find and remove silent errors, even we get correct out put. 
           //◦ How to enable strict mode????
                    // script expression can enable / add  first statement inside either a script or function
                              
        
        
           x = 10;       //here x assigned without a variable.
        //console.log(x);  // Output will get. 10


        //but when we use strict mode
            "use strict"
               x1=10;
               //console.log(x1);

    //Eg 2:-
    //console.log(sum(10,20));
    //function sum (a,a){
        //"use strict"
        //return a+a;
    //}



// Summary Table
            // Behavior	                  Non-Strict Mode	        Strict Mode


     //Undeclared variable               Allowed	              ReferenceError
     //Silent assignment failure	      Fails silently	        TypeError
     //Delete variables/functions	         Allowed	            SyntaxError
     //Duplicate function parameters	     Allowed	            SyntaxError
     //this in regular functions	          window	             undefined





     //IIFE(Immediately Invoked Function Expression):-It is a function that runs as soon as it is defined.
            
             //(function() {
                  //console.log("I am an IIFE!");
              //})();
                   
                   //The function is wrapped in parentheses to make it an expression.

                   //Then it's immediately called with ().

//QUESTION: Convert this code into an IIFE:

                 function greet() {            //normal code
                    console.log("Hello");
                 }
                 greet();


               (function greet() {
                      console.log("Hello");
               })();

            



    //CLOSURES:-A closure is a function that remembers its outer scope even after the outer function has finished executing.

           //inner() still has access to message, even though outer() is already done.

           //This is because inner() forms a closure around message.
           //Think of a baby kangaroo (inner function) in its mother's pouch (outer function). Even when the mother hops away, the baby still has access to the pouch’s warmth and food.

           function outer() {
                 let count = 0;
                return function inner() {
                   count++;
                   console.log(count);
                };
               }

            const counter = outer(); // closure
            counter(); // 1
            counter(); // 2



          


