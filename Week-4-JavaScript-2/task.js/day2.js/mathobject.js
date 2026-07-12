   //Math Object:-
     //Math.sqrt
const a = 100;
  console.log(Math.sqrt(a));   // 10
  console.log(Math.sqrt(-a));   //NaN
  console.log(Math.sqrt(""));  //0
  console.log(Math.sqrt("Apple"));  //NaN
  console.log(Math.sqrt(25));   //5
  console.log(Math.sqrt("81"));  //9
  console.log(Math.sqrt([]));//   0    ([] → coerced to "" (empty string) → 0)
  console.log(Math.sqrt(false));  //0
  console.log(Math.sqrt(true));   //1




      //Math.abs:-will get non-negative value. if we give positive value, will get posituve value...if we give negative value, we will get positive value
             console.log(Math.abs(-5));   // 5
             console.log(Math.abs(7));   // 7

      // Math.min:- To get minimum value
            const scores = [44, 12, 88, 5];
            console.log(Math.min(...scores));  // 5

            console.log(Math.min(...[]));  //  Error: Math.min() with no arguments

            console.log(Math.min("5", 3, true, null));  //0
                                    //("5"-->5, true->1,null-->0)  (5,3,1,0)...so output is 0.



      // Math.max:- To get maximum value


            console.log(Math.max());   //  -infinity (There is no arguments)
            console.log(Math.max("100", 200, true)); //200 ("100"--> 100, true-->1)
            console.log(Math.max([10, 20, 30]));  //NaN  (Math.max() needs separate arguments, not one array.will take only individual values)
            console.log(Math.max(...[10, 20, 30]));  //30  (if we spread it by using spread operator.)
                                                        //The spread operator ... takes the array [10, 20, 30] and "spreads" it into individual arguments:

            console.log(Math.max(5, [15], "30", false));    //30
                                          //([15]-->15,"30"-->30,false-->0)
            console.log(Math.max(...[10, 20, 30, "40", "abc"])); // NaN   (If any argument is NaN, the result of Math.max is NaN.)

                              //"abc" → string "abc" → cannot be converted to a number → becomes NaN


    //Math.pow

           console.log(Math.pow(2,10));   // 1024  =2×2×2×… (10 times))

            console.log(Math.pow(5, 0));   //1 (Any number to the power of 0 is 1)



     //Math.floor:- will round the value if we use decimal number

           console.log(Math.floor(6.9))  //6
           console.log(Math.floor(4.1)) //4

     // Math.ceil:- will round to the next value if we use with decimal value

            console.log(Math.ceil(6.9))  //7
            console.log(Math.ceil(5.1))  //6

     //Math.round:- normal round
            console.log(Math.round(6.9))  //7
            console.log(Math.round(6.1))  //6


    //Math.random:- will get random number

            console.log(Math.random());  
                            //will get any random number...will  get another random numbers if we refresh again

    //if i want to get random number between 1-10:-

           const b = Math.random();
           const rounded = b*10;
          console.log(rounded);  //will get any random number between 1-10 3.1515007191.....
                                 
          //if we want to round this number,
            const b1 = Math.random();
            const rounded1 = Math.floor(b1*10);
            console.log(rounded1);  //will get any random number between 1-10 like this 6
                                 

