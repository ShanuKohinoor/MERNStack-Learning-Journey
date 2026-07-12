//console.log({} + []); //DOUBT   [object Object]
//console.log([] + {});  //DOUBT   [object Object]
       // Q1.
        // What are the falsy values in JavaScript? Write a simple code snippet to remove all falsy values from an array without using .filter() method.
   //false,0,null,empty string,NaN,Undefined

//Q2.
//  Write a simple code snippet to remove all falsy values from an array without using .filter() method.
   const arr = [0,2,false,5,"",NaN,10];
   const truthyArr = [];
        for( let i=0;i<arr.length;i++){
          if (arr[i]){
            truthyArr.push(arr[i]);
          }
        }
        console.log(truthyArr);

//Q3.
//Find output
       console.log("5" - 1 + 1);
       console.log("5" + 1 - 1);
      


//Q4.
//Create two functions:

//prepareLunch(callback)

//This function should log: "Lunch is being prepared..."

//Then it should call the callback function

//eatLunch()

//This function should log: "Yum! Lunch is ready to eat!"


//Then, call prepareLunch() and pass eatLunch as the callback.

function prepareLunch(callback){
  console.log("Lunch is prepared...");
  callback();
}
function eatLunch(){
    console.log("Yum! The Lunch is ready to eat.");
}

prepareLunch(eatLunch);




//Q5.

//makeTea(callback) — This function should:

//Print "Tea is being prepared...".

//Then call the callback function.

//drinkTea() — This function should:

//Print "Drinking the tea now!".

//Finally, call makeTea and pass drinkTea as the callback.

const makeTea = function(Tea){
    console.log("Tea is being prepared...");
    Tea();
}
function  drinkTea(){
    console.log("Drinking the Tea now!...")
}
makeTea(drinkTea);


//Q 6 
      //Write a function that uses a callback to return the first vowel in a string.

     //✅ Sample Output:
//Input: "javascript"
//Expected: 'a' (because it's the first vowel)


const str ="Javascript"
const vowel= function firstVowel(first){
    for(let i=0;i<str.length;i++){
        if ("AEIOUaeiou".includes (str[i] )){
            first(str[i]);
            return;
        }
    }
}
function showVowel(vowel){
    console.log("The first vowel is ",vowel)
}
vowel(showVowel);

//Q.7  Anonymois function

     const sayHi = function () { // Here didnt give any function name
    console.log ('Hello World');

    }
    setTimeout(sayHi,5000);

   //eg:- 2

    const sayhi = function (){
        console.log("hi shanu");
    }
  setTimeout(sayhi,5000);


  //Q.8 push

                let arr3 =[1,2,3];
                arr3.push(4);
                console.log(arr3);  // Output will be [1,2,3,4]. 


//Q.9 find output

     const obj = {
  x: 10,
  y: 20,
  sum() { return this.x + this.y; }
};
console.log(obj.sum());   // Output 30 because here sum is method...so it will take the object



//Q.10
               const obj1 = {
  greet: function(name) {
    return "Hello " + name;
  }
};
                // output:- 
                    const obj2= {
                        greet(name){
                            return "Hello" +name;
                        }
                    };

//Q.11

                  let a = 10;   //primitive data type. so immutable. refer the value
                  let b = a;
                   b = 20;
                   console.log(a); //so Output is 10

//Q.12
            let x = [1, 2, 3];  //because arrayscarevnon-primitive
            let y = x;
            y.push(4);
            console.log(x); // What will this print? Why?

//Q.13

          console.log(Boolean([]));  //true
           console.log(Boolean({}));  //true
            console.log(Boolean(""));  //false..Because emptystringbis falsy value

//Q.14

                 if ("0") {
                 console.log("Truthy");
                  } else {
                  console.log("Falsy");
                   }                    //Truthy

//Q.15
          const ages = [22, 34, 18, 27];

           const allAdults = ages.every(age => age >= 18);

           console.log(allAdults);   //True


//Q.16

           const fruits = ['apple', 'banana', 'cherry'];
           const result = fruits.forEach(fruit => fruit.toUpperCase());

           console.log(result);   //undefined(doesnt return an array)

//Q.17

             const nums = [10, 15, 20, 25];

             const filtered = nums.filter(num => {
             if (num > 15) {
             return;    // must return a truthy value in filter in this case. herevthere is no truthy.


              }
              });

            console.log(filtered);  //  output[]

//Q.18   Nested structure.Find sum of marks
      const obj3 = {
        name: "Shanu",
        marks:[80,85,90,92]
      }
      sum=0;
      obj3.marks.forEach(val=>console.log(val)); //to find the values alone
      obj3.marks.forEach(val=>sum=sum+val);
      console.log(sum);


//Q.19   same applywith reduce?
      const final =obj3.marks.reduce((acc,marks)=>acc+marks)
      console.log(sum);

//Q.20  

    


let x1= [{
  
  name:"Shanu",
  marks:{maths:90,malayalam:95}
},
{name:"Faraza",
  marks:{maths:92,malayalam:95}
}
]
 x1.forEach(obj)=>{
  let sum=obj.reduce((acc,val)=>console.log(name+ " " +sum))
 
 }