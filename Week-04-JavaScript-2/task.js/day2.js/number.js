
// 1. Number Methods

       // Number.isFinite():- Checks if a number is a real number, not Infinity or NaN.
            console.log(Number.isFinite(100));     // true
            console.log(Number.isFinite(Infinity)); // false
            console.log(Number.isFinite("100"));    // false (its a string!)

       // Number.isNaN():- Checks if a value is actually NaN (not just “not a number” string).
            console.log(Number.isNaN(NaN));       // true
            console.log(Number.isNaN("abc"));     // false
            console.log(isNaN("abc"));            // true (try to convert value to number.Then checks whether it is a number)

      //Number.isInteger():- check the number is a whole number(without decimal)

           console.log(Number.isInteger(2.5)); //false
           console.log(Number.isInteger(10));  //true

      //Number.isSafeInteger():- check for safe integerin javascript
          console.log(Number.isSafeInteger(963313908745));  //true
          console.log(Number.isSafeInteger(9340287503901234568));  //false


// Divided by 0 = Infinity



          let  a = console.log(Number("54.56")) ;   // 54.56 
          let  a1 = console.log(Number(" 54.56 ")); //if space is there, trim & remove

          // " "  --> 0
          // null --> 0
          //undefined -> NaN
          // undefined === undefined   //True
          // NaN === NaN    FALSE

          let b = console.log(parseInt("123"));  //123
          let b1= console.log(parseInt("123agd"));  //123
          let b2= console.log(parseInt("123.33")); //123
          let b3 = console.log(parseInt("123ghthjy"));  //123

           //In parseInt, if there is number will take that first.
                    let b4 = console.log(parseInt("advg123"));  //NaN


          // In normal conversion
                let b5 = console.log(Number("123ghthjy"));  //NaN

                //If number is present first  like ( 123abg), 
                        // in parseInt,output will be 123
                        // in normal,output will be NaN

                  let b6 = console.log(parseInt("123ghthjy"));  //123
                  let b7 = console.log(parseFloat("123.60"));  //123.60



          


//Tricky Questions

// Q1: What will be the output?

console.log(typeof NaN);  //number
console.log(NaN === NaN);  //false



//Q2: What will this print?

let x = "10.5px";
console.log(Number(x));    //NaN
console.log(parseFloat(x));   //10.5




//Q3: OUTPUT?

   console.log(Number("100px"))    //NaN
   console.log(parseInt("100px"))  //100
   console.log(parseFloat("100px"))    //100

//Q4. Output?

    console.log(parseInt("12.34"));   // 12
    console.log(Number("12.34"));     //12.34

//Q5. Output?

    console.log(parseInt(true));   //NaN  (try to convert true to number. but true cant convert to number)
    console.log(Number(true));     //true  (convert true to number. in number true will convert to 1.so output is true)

//Q6. Output?

      let z = "20px";
      let y = "30.5px";
      console.log(parseInt(z) + parseFloat(y));  // 50.5



   console.log(Number("abc123"))    //NaN
   console.log(parseInt("abc123"))  //NaN
   console.log(parseFloat("abc123"))    //NaN


   console.log(Number(" "))    // 0
   console.log(parseInt(" "))  //NaN
   console.log(parseFloat(" "))    //NaN


    console.log(Number(" "))    // 0
   console.log(parseInt(" "))  //NaN
   console.log(parseFloat(" "))    //NaN


          



          