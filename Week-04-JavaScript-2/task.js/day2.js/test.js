            console.log(Number.isFinite(100));     // true
            Number.isFinite(Infinity); // false
            Number.isFinite("100");    // false (its a string!)

       // Number.isNaN():- Checks if a value is actually NaN (not just “not a number” string).
            Number.isNaN(NaN);       // true
            Number.isNaN("abc");     // false
            isNaN("abc");            // true (try to convert value to number.Then checks whether it is a number)

      //Number.isInteger():- check the number is a whole number(without decimal)

           Number.isInteger(2.5);
          let  a = console.log(Number("54.56")) ;        
          let  a1 = console.log(Number(" 54.56 ")); //if space is there, trim & remov     