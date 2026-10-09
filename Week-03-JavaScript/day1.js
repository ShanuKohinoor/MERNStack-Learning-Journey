// JAVASCRIPT:- Most popular and widely used programming language

// Because it can be used as small programs that automate the tasks inside an application(so, it is called scripting language). It runs inside the browser, and can be used for big program building like full website or  full apps etc(so, it is called programming language as well).It runs outside the browser( in Node.js).

     //VARIABLES:- To store the datas which is related to program in the computer memory.

// Let,Const,Var:- To declare variables  in javascript by 3 types. They are:-
             //var:-
                  var name1 = "Shanu";
                  console.log(name1); // Output = Shanu


             //const:- 
                  let age1 = 25;
                  console.log(age1); // Output = 25
                       //WE CAN USE IN MAP

             //Let:-
                  const country = "UK";
                 console.log(country); // Output = UK

                       // WE CAN USE IN LOOP


// Variable Reassignment and Redeclaration
// Declare a variable
var n;

//Redeclare this variable
var n;

//Assign it a value
n=6;

//Reassign it another value
n=7;

//Declare a variable and assign it a value
var m=6;

//var can redeclare and reassign
     var greeting="Hello"; //Declaration using var
     console.log(greeting); //Output:Hello

    //Reassign the variable
    greeting= "Hi";
    console.log(greeting); //Output:Hi

    //Redeclaring the same variable using var
    var greeting= "Hey";
    console.log(greeting); //Output:Hey

//Let can be reassign but cannot be redeclare
     let score= 10; //Declaration using let
     console.log(score); //Output: 10

     score= 20;  //Reassign the variable
     console.log(score); //Output:20

     // let score= 30; //Trying to redeclare
                    // But showing Syntax Error: score has already declared.

// Const cannot be reassign or redeclare
    const age= 25;
    console.log(age);  //Output:25

    //Reassigning const variable-not allowed
    //age= 30; //TypeError
    //Redeclaring const variable in same scope-not allowed
    // const age= 40; //syntaxError

//SCOPE:- Scope means where the variable can visible in which function.
             //Depends upon function. There are two types of scope:-
             // 1.Global variable
             // 2.Local variable

              const a = 20;  //Global variable
              function myFunction(){
               const b =50;   //Local variable
              }

    // 1.GLOBAL 
       let city = "London"; // Global variable

       function showCity() {
       console.log("Inside function: " + city); // Can access global variable
       }

       showCity();
       console.log("Outside function:" + city); // Can access here too 

    // 2.LOCAL
       //Block scope {}
        {
         let age = 25;
         const city = "London";
         console.log(age);  // Work only inside the block
         console.log(city); // Work only inside the block
        }

        console.log(age);  //  Error. wont work outside the block
        console.log(city); // Error. wont work outside the block
    
         //Function scope

        function sayHello() {
        var message = "Hello!";
        console.log(message); //  Works inside
        }

        //sayHello();
        //console.log(message); //   wont work outside the function

//JavaScript Data Types - Primitive Data Types, Non-Primitive (Reference) Data Types

     // A) Primitive Data type:-
          // 1. Can hold only single value.
          // 2. Are immutable:- their values once assigned cannot be change.
          // 3. Eg:- Number,string,Boolean,undefined,null are primitive datatypes.
          // 4. They are simple datatypes.

          let patientName = "Fathima";       // String
          let patientAge3 = 28;              // Number
          let hasXray = true;              // Boolean
          let lastCheckup;                 // Undefined
          let previousvisit = null;            // Null


    // B) Non-Primitive Data type:-

          // 1. Can hold multiple Values.
          // 2. Are Mutable:- Their values can change.
          // 3. Eg:- Object, array,function,RegExp, are non-primitive datatypes.
          // 4. They are complex datatypes.
          // 5. Stored by reference(have memory address).

          let patient = {        // inside the{} is the object. Patient is the variable name it holds the address of the object.
              name: "Ayesha",    //These are key value pairs. name is key and ayesha is value
              age: 40,           //age is key with value 40
              hasCavities: false  // hasCavities is key with value false
          };
          //This is non-primitive because the object is stored in memory, and the variable patient holds a reference (link) to that memory location.
          console.log(patient.name); // Output= Ayesha
          console.log(patient.age); // Output= 40
          console.log(patient.hasCavities); // Output= false






//Type Conversion in JavaScript – implicit,explicit
       
    //implicit:- Done automatically without written by programmer
        let result = "5" + 2;  
        console.log(result);         // "52" (number 2 is converted to string)
          
        let result1 = "5" - 2;
        console.log(result1);        // 3 ( - operator only works with numbers.So string 5 is converted to number 5)

        let result2 = true + 1;  
        console.log(result2);         // 2 (true becomes 1) 

        let result3= false + 1;
        console.log(result3);        //1 (false coereced to 0) when '+' operator b/w a boolean & a number,Javascript performs implicit types coercion.

        console.log(null + 1);       //  1 (Null is treated as 0)
        console.log(null * 5);       //  0 
  
        console.log("10" == 10);            // true → string "10" is converted to number
        console.log("10" === 10);         //  false (The === operator(strict equality) does not perform type coercion. It checks for both value and type equality.


//Explicit Type Conversion (Manual):- The developer writes code by manually like  type conversion, declaring variables, or returning values.
                
    //String Conversion
        let num = 100;
        let str = String(num);      // turns number into string "100"
        console.log(str);           // "100"
        console.log(typeof str);    // string

    //Number Conversion
        let str1 = "45";
        let num1 = Number(str1);      // turns "45" into number 45
        console.log(num1);               // 45
        console.log(typeof num1);     // number

    // Boolean Conversion
        let value = Boolean(0);          // false
        console.log(value);              // false

        let name5 = Boolean("Shanu");        // true (non-empty string = true)
        console.log(name5);                  // true

 // FALSY VALUES IN JAVASCRIPT:- In JavaScript, falsy values are values that behave like false when used in a condition (like an if statement).
      //Even if they are not the word false, JavaScript treats them as false.


 
        // If Boolean true, truthy values. If Boolean false, falsy values.
              //FALSY VALUES:-
                  // Zero
                  // Null
                  // Undefined
                  // Empty string
                  // Not a Number (NaN)
        let patientName2 = "";

        if (patientName2) {
           console.log("Call patient " + patientName2);
        } else {
          console.log("No patient name entered.");
        }       // No patient name entered. Because "" (empty string) is a falsy value.So else block runs.

// JavaScript Operators
 //Arithmetic, comparison, logical operators

    // Arithmetic operators:- Addition, Subtraction,Division,Multiplication, Modulus,Increment, Decrement

    // 1. Addition
         let cleaning = 40;
         let filling = 80;
         let total = cleaning + filling;        
         console.log("Total Cost: £" + total);  // Output = Total Cost: £120
    // 2.Subtraction
         let discount = total - 20;             
         console.log("After Discount: £" + discount); // Output = After Discount: £100
    // 3.Division
          let patients = 10;
          let totalFee = 1000;
          let avgFee = totalFee / patients;      
          console.log("Average Fee: £" + avgFee); // Output = Average Fee: £100
    // 4. Multiplication
          let trays = 5;
          let toolsPerTray = 4;
          let totalTools = trays * toolsPerTray; 
          console.log("Total Tools: " + totalTools); // Output= Total Tools: 20
    // 5.Increment
            let patientCount = 7;
            patientCount++;                        
            console.log("Updated count: " + patientCount); // Output= Updated count: 8
    // 6.Decrement
            patientCount--;       
            console.log("Cancelled appoinment: " + patientCount); // Output= Cancelled appoinment: 7// Comparison

          let patientAge = 65;
          let isSenior = patientAge >= 60;
          console.log("Senior citizen discount eligible:", isSenior); // Output=true

// Logical operators:-  Will be true if both conditions are satisfied.
          let hasAppointment = true;
          let hasPaid = false; //Here this condition is false.So it doesnt satisfy the condition
          console.log("Can see dentist:", hasAppointment && hasPaid); // Output =false


//Ternary Operators:-it is a short way of writing an if...else statement in JavaScript.
     //syntax:- condition ? expressionIfTrue : expressionIfFalse;
            let toothPain = true;
            let advice = toothPain ? "Advise dental X-ray." : "No X-ray needed.";
            console.log(advice);  // Advise dental X-ray


            // Eg 2:- 
               let x = 5;
               let y= x !=5 ? 10 : x; // Here,check if x=5 or !=5, if x !=5, print 10. otherwise print value of x.
               console.log(y);


// Typeof Operator:- To check which data type is.
         let patientName1 = "Fatima";
         let patientAge1 = 30;
         console.log(typeof patientName); // Output = "string"
         console.log(typeof patientAge);  // Output= "number"

 // Nullish coalescing operator ??:- Returns the right-hand value only if the left-hand value is null or undefined.
            // It checks if a value is null or undefined.

            // If yes, it returns a default value.

            // Otherwise, it returns the original value.
           // Eg 1:- 
            let patientNotes = null;  // null

            let message = patientNotes ?? "No notes"; // patientNotes is null here, So output will be "No notes"

            console.log(message);  // Output= No notes

           // Eg 2:-
             let patientNotes1 = "Patient needs a filling";

             let message1 = patientNotes ?? "No notes yet"; // no null or undefined. So original value will display

            console.log(message);  // Output= Patient needs a filling

    
// Conditional statement:- Allow the program to run depending on  a condition  true or false.
     //1 . if statement:- runs the code if the condition is true
           let hasCavity = true;

          if (hasCavity) {
          console.log("Patient needs a filling.");
          }
    //2. if-else statement
          let hasCavity1 = false;

          if (hasCavity1) {
          console.log("Patient needs a filling.");
          } else {
  console.log("No cavity detected.");
          }

    //3.else-if statement :- check multiple condition one by one
          let painLevel = 2;

         if (painLevel > 5) {
          console.log("Severe pain. Immediate treatment needed.");
         } else if (painLevel > 0) {
         console.log("Mild pain. Schedule a checkup.");
         } else {
         console.log("No pain.");
         }

    // Switch statement:- Checking a single variable against multiple specific values


        let toothStatus = "missing";

          switch (toothStatus) {
          case "healthy":
          console.log("Tooth is healthy.");
          break;
          case "decayed":
          console.log("Tooth needs treatment.");
          break;
          case "missing":
          console.log("Tooth is missing.");
          break;
          default:
          console.log("Unknown status.");
        }
// JAVASCRIPT LOOP:- for loop, while loop,do-while loop

    //for loop
         for (let i = 1; i <= 5; i++) {
         console.log("Checkup number " + i);
          }                             // Output =Checkup number 1
                                        //Checkup number 2
                                        //Checkup number 3
                                        //Checkup number 4
                                        //Checkup number 5

    //while loop

          let patientsWaiting = 3;
          while (patientsWaiting > 0) {
             console.log("Calling next patient. Patients consultation left: " + patientsWaiting);
              patientsWaiting--;
          }                         // Output = Calling next patient. Patients consultation left: 3
                                    // Calling next patient. Patients consultation left: 2
                                    // Calling next patient. Patients consultation left: 1

    //do-while loop
          let patientsWaiting1 = 1;

          do {
          console.log("Calling next patient. Patients left: " + patientsWaiting);
          patientsWaiting--;
          } while (patientsWaiting > 0);   // Output = Calling next patient. Patients left: 0



