



let date = new Date();
let futureDate =new Date (date.getTime()+5*24*60*60*1000);
console.log(futureDate)
console.log(futureDate.toISOString());


let date5 = new Date();
date5.setDate(date5.getDate()+5);
console.log(date5);



//To create timer(with seconds)
   setInterval(()=>{
    let now = new Date();
    //console.log(now.toLocaleTimeString())
   },1000)



 // Another method to create timer
     setInterval(()=>{
        let now1 = new Date();
       // console.log(now1.getHours()+":"+now1.getMinutes()+":"+now1.getSeconds())
     },1000);  




//To find difference in two date
let d1 = new Date("2025-04-10");
let d2 = new Date("2025-06-22");
console.log(d2.getMonth()-d1.getMonth())    //2
console.log(d2.getDate()-d1.getDate())      //12


//find difference in another method
let d3 = new Date("2025-04-10");
let d4= new Date("2025-06-22");
console.log(d4.getDate()-d3.getDate())
let diff = (d4-d3 )/(1000*60*60*24)
console.log(diff)











                   //GUESSTHE OUTPUT

1.console.log(0.1 + 0.2 === 0.3); //false("In JavaScript, 0.1 + 0.2 is not exactly 0.3 because of decimal rounding issues. So, it gives false.")


2.
let now = new Date("2025-06-20");
console.log(now.getFullYear());  // 2025 
console.log(now.getMonth());     // 5     (June)
console.log(now.getDate());      // 20   


//3. Difference btween Set vs Array
//A Set is similar to an Array, but the  difference is:

  //A Set can only stores unique values — duplicates are automatically removed.

  //An Array allows duplicates.

   //Also, Set has built-in methods like .add(), .has(), and .delete().
   //  it doesn’t use index positions like arrays do."





//4. Difference between map and object

           // Both are store key-value pair.
           //In object keys should be symbol/ string..
           //But in map it can primitive or non-primitive datatype.



