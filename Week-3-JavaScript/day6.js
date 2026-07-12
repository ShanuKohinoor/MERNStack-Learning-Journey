//1. What is the output and why?
     console.log("5" - 1 + 1); //  Output=5 
                                         //"5" is a string, but - operator forces type coercion to number ("5"to 5 ).So, 5-1=4
                                         // 4+1=5.(step 2)

     console.log("5" + 1 - 1); // Output=50
                                        //"5" + 1 ➝ String concatenation happens (because + is the string concatenation operator when a string is involved).so, (1 t0 "1").
                                        //"5"+"1" ==51(step 1)
                                        //51-1=50   (step 2)




// 2. Remove all falsy values from this array without using .filter():
     [0, 1, "", "text", undefined, null, NaN, 42]
         const arr = [0,2,false,5,"",NaN,10];
   const truthyArr = [];
        for( let i=0;i<arr.length;i++){
          if (arr[i]){
            truthyArr.push(arr[i]);
          }
        }
        console.log(truthyArr);







//3. Predict and explain the results:
     console.log(1 + true);        //2
     console.log("10" * "2");      //20
     console.log("10" + true);     // 10true
     console.log(undefined + 1);    //NaN 
                                      //undefined is a special value that, when used in arithmetic, turns into NaN (Not a Number).
                                     //So: undefined + 1 ➝ NaN + 1 ➝ NaN



//4. Write a function that uses a callback to return the first vowel in a string.

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





//5. Use reduce to flatten the array:
     const data = [
       { name: "Ali", scores: [10, 20] },
       { name: "Sara", scores: [30, 40] }
     ];
     //Expected: [10, 20, 30, 40] 
      const final= data.reduce((acc,item)=>{
        return acc.concat(item.scores);
      },[]);
   console.log(final);



//6. Use RegEx to check if a string starts with a vowel (a/e/i/o/u).

let pattern = /^[aeiou]/i;   //check this pattern exist or not. /i   means modifier
console.log(pattern.test("Apple"));   // true (it  starts with A)
console.log(pattern.test("Banana"));  // false (it starts with B)
console.log(pattern.test("grape is orange")); // false (it starts with G)




//7. What will each log?
      const user1 = {
         profile: {
           address: {
             city: "Dubai"
           }
         }
       };
       console.log(user1.profile?.address?.city);   //Dubai .Here we use opyional chaining
       console.log(user1.profile?.contact?.phone);  //Undefined. While checking with optional chaining, couldnt find out phone and contact inside the profile. 

//8. Use destructuring with rest:
     const [a, b, ...rest] = [10, 20, 30, 40];
     console.log(a, b);     // ?  10,20(Here use spread operator)
     console.log(rest);     // ?  30,40(Rest operator)




//9. Explain object property shorthand:
     const name = "Ali";
     const age = 25; 
     const user2 = { name, age };
     console.log(user2); //  object property shorthand use when the variable name and property name same.

     



//10. Use call() to bind this:
       function greet() { 
          return `Hello, ${this.name}`;
        }
       const user = { name: "Reem" };
       console.log(greet.call(user3)); // ?




//11. Shallow copy vs deep copy:
       const original = { name: "Ali", info: { city: "Dubai" } };
       const copy = { ...original };   //this will give shallow copy only. so we wont get nested objects
       copy.info.city = "Abu Dhabi";
       console.log(original.info.city); // ? Abu Dhabi
                                          








//12. Demonstrate prototype inheritance:
       const base = { role: "user" }; 
       const admin = Object.create(base); 
       admin.name = "Aisha"; 
       console.log(admin.role);



