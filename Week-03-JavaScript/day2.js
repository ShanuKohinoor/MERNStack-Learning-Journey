//function declaration
     function Hi(){
        console.log('HELLO');
     }
     Hi();  
     
     // if we call before declaration also it will work.
     sayHello(); //We can call anywhere in the code. This works because of hoisting.
                 //Hoisting means Javascript moves declarations(not values)to the top of the code before it runs.
     function sayHello(){
        console.log('HELLO');
     }

//Function expression :- Anonymous function assigned to the variable. They are not hoisted. so must define before calling.

      const sayGoodbye = function() {  //we cant use before declare exactly like variable
      console.log("Goodbye!");
      };

      sayGoodbye(); // Output: Goodbye!
 
//Arrow Function:- Provide shorter syntax. To short the function expression, use arrow function.

           let a = () =>{
           console.log('How are you?')
           console.log('I am fine')
           }
           a();  // Output = How are you?
                           //I am fine
           
           // Eg:- 2           
            let b = () => console.log('hello')  // No need  of {}, if there is only one expression. No need of return statement here.
           
             b();  // Output = hello

            // Eg:- 3 
            let x= (a,b)=> a+b  //No {} needed because it's a one-line function. Arrow functions automatically return the result if there's no {} block.


// Anonymous function:- without a function name

     const sayHi = function () { // Here didnt give any function name
    console.log ('Hello World');

    }
    setTimeout(sayHi,5000);

//Named function Expression:- Has name,can be declared using function keyword followed by a name,or assigned to variables or object properties.
                                // can be reused. Here greet is the name of the function.
    
        function greet(){        // Here greet is the function name
        console.log("Hello,World")
        }
        greet();




//Callback Function:-  //passed as an argument to another function.And later called inside main function
function makeTea(callback) {
  console.log("Boiling water...");
  console.log("Adding tea leaves...");

  callback();    // Now call the callback function
                 // This will run the helper function
}

function addSugar() {
  console.log("Adding sugar to the tea.");
}

makeTea(addSugar);   // Pass addSugar as a callback to makeTea

     
     
// First-Class Functions:- Functions can be used just like variables — assigned, passed, and returned.
  //function stored in a variable

function add(a, b) {
  return a + b;
}

const sum = add; //function assigned to a variable
console.log(sum(5, 3)); // Output: 8



function cook(dish, helper) {
  console.log("Let's cook " + dish);
  helper();                            // helper function is called here

  return function cleanup() {
    console.log("Cleaning the kitchen...");
  };
}

let chop = function() {  // Helper function to chop vegetables

  console.log("Chopping vegetables...");
};

let afterCook = cook("Pasta", chop);   


afterCook();  // Call the returned function


// Higher-Order Functions :- Take another function as its argument or return. higher than normal function.

function doHomework(subject, helpFunction) {
  console.log("Starting homework for " + subject);
  helpFunction(); // function passed in (argument)
  return function thankYou() {  //function returned
  console.log("Thanks for helping with " + subject);
  };
}

let friendHelp = function() {
  console.log("Helping with homework...");
};

let done = doHomework("Math", friendHelp);
done();


//Factory Function:- returns object with an assigned value
function factory(){
    return {
        name1:n,
        age : a,
        greet(){
           console.log('Hello' +n) ;
        }
    }
}
const user1=factory('Shanu', 35)
user1.greet()
const user2=factory('Shahanas', 35)
user2.greet()


//Generator Function : - Special type of function. instead of running continously, it will pause at each yield and resume when we call .next()
 function* generator(){  //To declare generator function asterisk (*) is mandatory.
    console.log('Hello')
    console.log('Hello')
    console.log('Hello')
    yield 2
    console.log('How are you')
    yield 3
}
let x1= generator()
    console.log(x1.next())
    console.log(x1.next())
    console.log(x1.next())








// Lexical Scope vs Dynamic Scope:-Where a function is defined in the code decides what variables it can access.
           // It is determined by where the function is written in the code ( not where it is called from.)

   function outer() {
          let a = 10;  // 'a' is declared inside 'outer'
  
    function inner() {
        console.log(a);  // 'inner' accesses 'a' because it was defined inside 'outer'
    }
  
       inner();  // Inner function  call here
    }

    outer();  // Output = 10
