












//Write a function inside another function, where inner function uses outer function's variable (closure).
       
    function cick(){
       let outer=2;
        function cicked(){
            let inner=6;
           let  x= outer+inner;
            console.log(x)
        }
        cicked();    
    }
    cick();
               //cicked() remembers outer from cick()’s scope.

               //Even though outer is not global, cicked() can access it.

               //This is closure in action!




//Q7. What will be the output of this code? And why?


    console.log(a);
var a = 10;         //Undefined

console.log(b);
let b = 20;         //Reference error
        



//Q8. Explain the call stack for this code:

function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.log("Inside C");
}
a();

//Step-by-step call stack work:



//The program starts and calls a().
    // -> Push a() onto the call stack.

//Inside a(), it calls b().
     // -> Push b() on top of the stack.

//Inside b(), it calls c().
     //-> Push c() on top of the stack.

//Inside c(), it runs console.log("Inside C").
                                  // -> Prints: Inside C

//c() finishes, so pop c() off the stack.

//b() finishes, so pop b() off the stack.

//a() finishes, so pop a() off the stack.

//Now the call stack is empty — the program is done.


     //so output:-   inside C


// Q9. Spot the error in this code using "use strict":
               "use strict";
                x = 5;
                console.log(x);   //didnt declared variable here


                //correct answer:-In strict mode, variables must be declared with var, let, or const before use.
                     //In this code, x = 5; assigns a value to an undeclared variable x, which is not allowed in strict mode.
                     //Therefore, JavaScript throws a ReferenceError: x is not defined.







