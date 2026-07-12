//ARRAYS IN JAVASCRIPT 
      // Syntax
          // var array_name = [ item1,item2,item3...];
          // Eg:- 
             var cars = ["Maruti", "Hyundai", "BMW"];
               cars[0] = "Maruti";
               cars[1] = "Hyundai";
          // In js arrays are in object category. So with the help of type of operator, if we give array, return object.

       //Properties
           // 1)Length:- With the help of length property, we can obtain number of elements in array
                 var x = cars.length;  // (property)  
                 console.log(x);// output=3

       //Array method   
            //1.push():- Adds one or more elements to the end of the array
                const arr =[1,2,3];
                arr.push(4);
                console.log(arr);  // Output will be [1,2,3,4]. 
                // arr.push(4,5,6,7)  We can add 4,5,6,7... together also
                // console.log(arr); //Output will be [1,2,3,4,5,6,7]


            //2.pop() :- Removes the last element from the array and returns it
    
                 arr.pop();
                 console.log(arr);  //Output [1,2,3]
            

            //3.shift() :- Removes the first element from the array and returns it.
                 arr.shift();
                 console.log(arr); // Output [2,3]

            //4.unshift(()) :- Adds one or more elements to the beginning of the array.

                  arr.unshift(0,1);
                  console.log(arr);  //Output [0,1,2,3]

            //5.indexOf():- It is a finding and filtering elements. Helps to find the first ocurance index of an item. if not found the index then return -1.
                  const arr2 =   [1,2,3,4,5];  
                  const index =  arr2.indexOf(4); 
                  console.log(index);   // Output= 3 . Because number 4 is in index 3.
                  //Eg 2:-
                  const arr3 = [1,3,6,89,34,56]
                  const index1 = arr3.indexOf(59);
                  console.log(index1);  // Here Output is -1. Because couldn't find 59 in the array. So return -1.


            //6.lastIndexOf():- Helps to find last occurance index of an item. if not found, return -1.
                 const arr4 =[1,2,2,3,4,5,2,5]  
                 const index3 = arr4.lastIndexOf(2);
                 console.log(index3);  //Output =6
                 //Eg 2:- 
                 const index4 =arr4.lastIndexOf(10);
                 console.log(index4);  // Output = -1

            //7.includes() :- This method checks whether array contains specific value.
                 const fruits = ["Apple","Orange", "Banana"] ;
                 console.log(fruits.includes("Mango")); // Output= false. Because Mango is not there in the Array.
                 console.log(fruits.includes("Banana")); // Output =true. Because Banana is there in the Array.

            
            //8.Slice()  :- Extracts a part of the array into a new array without modifying the original array.
                  const arr1 = [1, 2, 3, 4, 5];
                  const sliced = arr1.slice(1,4);
                  console.log(arr1);   // Output [1,2,3,4,5]. This is the original array
                  console.log(sliced); // Output [2,3,4]. This is sliced array. Started from one till 4. Extracts elements from index 1 to  3. Wont take index 4. 
                  
            //9.Splice() :- Adds or removes items at a specific index
                   arr.splice(1,3,'A','B','C'); // pass  3 arguments. 
                                                 // 1.start :- to where should start.
                                                 // 2.Delete count :- how many should delete.
                                                 // 3.Items :-Rest parameters. We can add anything. eg:- A,B,C etc
                   console.log(arr);  //Output [ 0, 'A', 'B', 'C' ]


            //10.Reverse() 
                   const arr5 = [21,31,51,32,22];
                   arr5.reverse();
                   console.log(arr5);  // Output = [ 22, 32, 51, 31, 21 ]


            //11.Sort()  :- With sort  method, we arrange array in ascending order.
                    const cars1 = ["Maruti", "Hyundai", "BMW"];
                    cars1.sort();
                    console.log(cars1);   //Output = [ 'BMW', 'Hyundai', 'Maruti' ]

            //12. concat() :-joining two 0r more arrays without change in original array.
                    const fruitsBox = ["Apple", "Strawberry", "Orange"];
                    const fruitsBox1 = ["Grapes","Banana","Passion Fruit"];
                    console.log(fruitsBox.concat(fruitsBox1));  //Output = ['Apple','Strawberry','Orange','Grapes', 'Banana','Passion Fruit']

            // .flat() :-  To remove nested array and return a new,flat array
            let drawer = [1,2,[3,4],[5,6]];
            let result = drawer.flat();
            console.log(result);  //Output = [ 1, 2, 3, 4, 5, 6 ]


            //.flatmap() :-

// Array iteration method in JavaScript
    // 1. forEach:-Executes a given function once for each element in the array. If we want to add anything to every array use forEach.
                    const fruitsBox2 = ["Apple", "Strawberry", "Orange"];
                    fruitsBox2.forEach (function(fruit){
                     console.log("I like " + fruit);

                    });

    // 2. map() :-Creates a new array by applying a function to each element. In array do something to each element like double the element
            const numbers = [2,4,6,8,10]
            const doubled = numbers.map(function(num){
                return num*2;
            })
            console.log(doubled);  //Output = [ 4, 8, 12, 16, 20 ]

    // 3. filter():-"Creates a new array with only elements that pass a test (return true)". Check each items in the list. Keep only whatever we want. Remove unwanted items. Create new array with wanted lists.
             const numbersBox = [5, 12, 8, 130, 44];
             const largeNumbers = numbersBox.filter(function(num){
             return num > 10;
             });
             console.log(largeNumbers);   //Output =[ 12, 130, 44 ]

             

    // 4. find() :- Returns the first element that satisfies a condition.
             const numbersN = [3, 8, 12, 5, 18];

             const firstBig = numbersN.find(function(num) {
             return num > 10;  // looking for first number greater than 10
             });

             console.log(firstBig);  // Output: 12
             

    // 5. findIndex() :-Returns the index of the first element that passes a test.
              const indexNumbers = [4, 7, 10, 25, 30];

              const indexFind = numbers.findIndex(function(num) {
              return num > 20;  
              });

             console.log(index);  // Output = 3
              

    // 6. every() :-Returns true if all elements satisfy the condition. if even one fails, return false.
             const ages = [22, 25, 30, 18];

             const allAdults = ages.every(function(age) {
             return age >= 18;  
             });

             console.log(allAdults);  // Output: true

             //Eg 2:-
             const cookies = ["round", "round", "broken", "round"];

            const allRound = cookies.every(function(cookie) {
            return cookie === "round";
            });

            console.log(allRound);  // Output= false




    // 7. some() :- Returns true if at least one element satisfies the condition.
           const schoolItems =["Book","Pen","Bag","NoteBook"];
           const itemSelect1 = schoolItems.some(function(item){
            return item  != "fruits";
           })

           console.log(itemSelect1);   //Output = true

           //Eg 2:-
              const schoolItem = ["Book", "Pen", "Bag", "NoteBook"];

              const itemSelect2 = schoolItems.some(function(item) {

              return item === "fruits";  // check if any item is "fruits"
              });

              console.log(itemSelect2);  // Output= false



    // 8. reduce() :- Reduces an array to a single value.if we take a list of things and combine them step by step  and reduce into one.
              const wallet = [25,35,45,54,65];
              const totalMoney = wallet.reduce(function(total,amount){  // Can pass 2 parameters
                return total + amount;

              });
              console.log(totalMoney);
        



// JAVASCRIPT STRINGS :-Strings are sequence of characters. It works same as array(collecion of elements) . Strings(collection of characters)

       const a = "Shanu";
       console.log(a);

       const b ="Shahanas";
       console.log(b[3]);  // we will get index

  //String properties :- By using length property find the number of characters 
      const greeting = "Hello, World!";
      console.log(greeting.length);  // Output= 13



  //String methods

    // 1. charAt():- Returns the character at the specified index.
       console.log(b.charAt(5)); //return the charcter of 5th index. so Output is n.


    // 2. toUpperCase() :-Converts the string to upperrcase letters.
    console.log(b.toUpperCase());  // Output = SHAHANAS

    // 3. toLowererCase() :-Converts the string to lowerrcase letters.
    console.log(b.toLowerCase());  // Output = shahanas

    // 4.slice () :-Remove specific characters
    const name1= "Shanu Shahanas Kohinoor";
    console.log(name1.slice(5,12)); //  Output = Shahan

    // 5. indexOf():- Returns the index of the first occurrence of substring. Returns -1 if not found.
    const str = "Mohamed Shan Pullani";
    console.log(str.indexOf("Pullani"));  // Output= 12 . Here 'P' of 'Pullani' starts at index 12. 
    console.log(str.indexOf("Shanu"));    // Output= -1



// REGULAR EXPRESSIONS(RegEx):- Creating a search pattern by using one or two charactrs. Used for text search or replace the text.
    // syntax = /pattern/modifiers;
         
      let message = "Huge DENTAL checkup DISCOUNT! Book your appointment today.";
      let pattern = /dental/i;  // Even though if it is in uppercase or lowercase, the /i modifier ignores that.


      console.log(pattern.test(message)); // pattern.test(message) checks if the word "dental" is present 
       // Output= true

    //Eg 2:-
       let message2 = "We offer eye checkups and free vision tests.";
       let pattern2 = /dental/i;  // Searching for the word 'dental'.
       console.log(pattern2.test(message));  // Output= false 






// LITERALS :- Literals  are fixed values that directly write in the code.
  //1. string literal :- In this text write  in single or double quotes
    // let name = "Shanu"

  // 2. Number literal :- In this, number write as either number or decimal number

    // let age = 35;
    // let price = 35.10;

 // Boolean literal :- This means true or false.
    // let isfruits = true;
    // let is Vegetable = false;

// Array literal :- In this ,a list of values in square bracket
    // let  fruitsBag = ["Grape", "Pomegranate", "Green Apple"];

// Object literal :- In this group of values in curley bracket.
   //let person = {name: "Shanu",age: 30};




