// JAVASCRIPT OBJECT:- object is used to store one or more RELATED datas. 
       // We can store values(property) and functions(method).
       // Collection of properties and methods.
       // Object is non-primitive datatype.

 //How to create object in Javascript?
   let student = {}
   console.log(typeof(student));  // Output = Object

//Property:- key-value pairs are known as property.
    // Pass values by key: value to object
    //Eg:-
        let student1={
        name1: "Anu",
        age : 6,
        class : 1,
        gender : "Female"
       }
       console.log(student1);

       //we can access single value by use dot operator or []..
       // 'object.value or object['value']/ object["value"]. Eg:-
             console.log(student1.age);
             console.log(student1['age']);

    // We can create mutiple object by array.Eg:-
     let students =[
        { name : "Faraza", age: 11},
        { name : "Filza", age :6}
     ]
            console.log(students[1]); //if we want to get a single student detail, use students[array index]
            console.log(students[0].name);//if we want a value of object inside one element in array

//METHOD:- when we declare function as value in key value pair. It is known as method.            
      //Method is a function inside object.

let patient = {
  name: "Amina",
  age: 28,
  condition: "Toothache",
  describe: function() {
    console.log(this.name + " has " + this.condition);
  }
};

patient.describe(); // Amina has Toothache


//  Shorthand Method Syntax
let patient3 = {
  name: "Amina",
  describe() {
    console.log("Patient: " + this.name);
  }
};

// CONSTRUCTOR METHOD :- This is special type of function to creat object. 
            // Not like c program
            //To declare a constructor method by using constructor key word
            // we have to use super keyword to use other classes
            // we can use only one constructor

            //syntax:- 
                 function Person(name,age)   //P should be in capital
                 {
                  this.name = name;
                  this.age = age;
                 }
                 const details = new Person ("Adheepa",10)
                 console.log(details);

//This: refers to the executing context of an object
        const myObj = {
          a: 1,
          b: 2,
          c: function(){
            console.log(this);
          }
        }
        myObj.c();  //In Javascript this means, the context of who call the function
                    //here myObj is the context
                    //context means if we call a function with a dot(.). That is context.
                    //A functions context is its parents functions context. if there is no function, then window will be the parent.
        // if myObj.c  declare inside another variable , and we call that, will be window is the parent object here. so window will be the output, not the object.Eg:-
        const aa = myObj.c;
        aa();  //will print window only




        //If you change the function to an arrow function, the behavior of this changes:

              const myObj1 = {
                   a: 1,
                   b: 2,
                   c: () => {
                      console.log(this); //  `this` does not refer to myObj
                    }
              }
                  myObj1.c();  //In this case, this refers to the outer lexical scope.



  //Call, apply,bind:- To directly connect  function to the object

    //CALL
        const myObj2 = {
          a: 1,
          b: 2,
          c: function(){
            console.log(this);
          }
        }
                const yourObj ={
          k: 12,
          j:22
        };
        

        //if we want to call with object aa and we want 'this' to print myObj2, we can use call by function.Eg:-
         aa.call(myObj2);
         aa.call(yourObj); //we can call second one also like this


    //BIND:- If we want set the context permantly while writing itself not like call. in call only when call,here when writing itself
        const myObj3 = {
          a: 7,
          b: 8,
          c: function(){
            console.log(this);
          }
        }
        const yourObj2 ={
          k: 14,
          j:24
        };
        myObj3.c = myObj3.c.bind(myObj3);
      
         myObj3.c();  //will get the output { a: 7, b: 8, c: [Function: bound c] }
         
         // we can call after store into variable also.like,
                 //const k = myObj3.c();
                 //k();   because we bind here. output will be same.{a:7,b:8,c:[Function:bound c]}

  //APPLY:- similar to call function
      //we can see the difference
        //by using call:-
            const myObj4 = {
              a: 5,
              b: 6,
              c: function(a,b){
                console.log(this,a,b);
              }
            };
            const k1 =myObj4.c;
            k1.call(myObj4,5,6); //this is by call

          // by Apply:-there is  change when writing the argument.will change (coma,) , to [],like
                      k1.apply(myObj4, [5 ,6]); //this is by apply. here it should be in square bracket.


            
             


//Arrays of Objects & Nested Structures

// Array of Objects

let patients = [
  { name: "Ali", age: 30, condition: "Root Canal" },
  { name: "Sara", age: 25, condition: "Cleaning" }
];

patients.forEach(p => {
  console.log(p.name + " is waiting for " + p.condition);

});


//Array inside object

let assistant = {             //assistant is object
  name: "Zoya",
  tasks: ["Sterilize tools", "Prepare room", "Call patient"]  //This is array
};

console.log(assistant.tasks[1]); 


// Nested Objects
   let clinic = {           // object is clinic
  name: "Bright Smiles",
  address: 
  {
    street: "123 Dental Lane",
    city: "London"
  },
  patient: {
    name: "Zain",
    treatment: {
      type: "Filling",
      cost: 100
    }
  }
};

console.log(clinic.patient.treatment.type); // Filling


// in Operator:-It checks if a property exists in an object (not the value).




let patient4 = {       //check whether patient has specific field
  name: "Fatima",
  age: 29
};

console.log("age" in patient); // true
console.log("condition" in patient); // false


//Optional Chaining ?.:-It is used to safely access nested properties in an object.


let patient5 = {
  name: "Yusuf"
};

console.log(patient5.condition?.type); // undefined (no error!)
        // Here trying to access condition.type. But it is not available.



