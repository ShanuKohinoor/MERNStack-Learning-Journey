// A). push() :— Adds one or more elements to the end of an array and returns the new length.

    //q.1  what will be logged?
      const arr = [1,2,3];
      const result =arr.push(5);
      console.log(arr);
      console.log(result); // length of array
    //q.2 
      let result1 = [];
      for(i=0;i<3;i++){
       result1.push(i);        //This line adds the value of i to the end of the array called result.
        console.log(result1);

      }


    //q.3 Tricky nested push
      const arr2 = [1,2,];
      arr2.push([3,4,5]);
      console.log(arr2);

// B).pop() — Removes the last element from an array and returns it.
  
   //q.1  
       const arr3 = [1, 2, 3];
       const popped = arr3.pop();
       console.log(popped);    // Output 3
       console.log(arr3);    // Output [ 1, 2 ]

    //q.2 Pop on empty array
       let nums = [];
       let result4 = nums.pop();
       console.log(result); // ?  Output= undefined
       console.log(nums);   // ?  Output = []

    //q.3 
         let values = [10, 20, 30];
         let last = values.pop().toString();
         console.log(last);     // ? "30"
         console.log(values);   // ?  [10,20]

    //q.4
         let x = [5, 6, 7];
         let y = x.pop();
         let z = x.pop();
         console.log(x); // ?   [5]
         console.log(y); // ?    7
         console.log(z); // ?    6

//C) unshift() — Adds one or more elements to the beginning of an array and returns the new length
    // q.1
         let arr5 = [2, 3];
         let result5 = arr.unshift(1);

         console.log(result5); // ?  3  (The return value is the new length 3.)  
         console.log(arr5);    // ? [1,2,3]
    //q.2

        let a = [];
        a.unshift(10);
        console.log(a); // ? [10]


    //q.3 :- Compare push vs unshift
        let a1 = [2, 3];
        a1.push(4);
        a1.unshift(1);
        console.log(a1); // ?[1,2,3,4]


    //q.4 
       let colors = ['blue'];
       let len = colors.unshift('red', 'green');
       console.log(len);    // ? 3
       console.log(colors); // ? ['blue','red','green']

// D) shift() — Removes the first element from an array and returns it.
   // q.1
       const arr6 = [1, 2, 3];
       const first = arr6.shift();
       console.log(first); // ?   1 (Returns the removed element.)
       console.log(arr6);   // ?  [2,3]

  //q.2 
       let nums1 = [];
       let val = nums1.shift();
       console.log(val);  // ? undefined
       console.log(nums1); // ? []

  //q.3 shift after push
       let a2 = [10, 20];
       a2.push(30);
       let b = a2.shift();
      console.log(a2); // ? [10,20,30]
      console.log(b); // ?  10

  //q.4 shift in a loop
       let arr7 = [1, 2, 3];
       while (arr7.length > 0) {
       console.log(arr7.shift());
       }
       console.log(arr7);    //[] After each iteration remove one element

  // E) includes :- Checks if an array contains a specific value, returns true or false.
       
      //q.1
            let arr8 = [1, 2, 3];
            console.log(arr8.includes(2));  // ? true
            console.log(arr8.includes(4));  // ? false

      //q.2
            let obj = { id: 1 };
            let arr9 = [obj];
            console.log(arr9.includes({ id: 1 }));  // ? false
                     // Objects are compared by reference, not by value.
                     // { id: 1 } is a different object from obj, so includes returns false.

      //q.3
             let arr10 = [1, 2, 3, 4, 2];
             console.log(arr10.includes(2, 2));  // ? true

//F) indexOf() — Returns the first index of a specified element in the array, or -1 if not found.

        //q.1
             const arr11 = [10, 20, 30, 20];
             console.log(arr11.indexOf(20));  // ? 1

        //q.2
             const arr12 = [1, 2, 3];
             console.log(arr12.indexOf(4));  // ? -1

        //q.3

            const obj2 = { id: 1 };
            const arr13 = [obj2];
            console.log(arr13.indexOf({ id: 1 }));  // ? -1.Because objects are compared by reference
//F) slice() — Returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included).

        //q.1
            const arr14 = [10, 20, 30, 40, 50];
            console.log(arr14.slice(1, 3));  // ? 20,30

        //q.2
            const arr15 = [5, 6, 7, 8];
            console.log(arr15.slice(2));  // ? [7,8]

        //q.3 :- slice with start > end
        const arr16 = [1, 2, 3];
        console.log(arr16.slice(2, 1));  // ? []
                              // If start index is greater than or equal to end index, returns empty array.

        //q.4

              const arr17 = [10, 20, 30];
              const newArr = arr17.slice(0, 2);
              newArr[0] = 99;
              console.log(arr17);    // ?  [10,20,30]
              console.log(newArr); // ?   [90,30] .Because newArr[0]=99. so replace 20 with 99

        //q.5 :-slice with omitted end(here only start is there. no end)

             const arr18 = [5, 6, 7, 8];
             console.log(arr18.slice(2));  // ? [7,8](Start from index 2 and go all the way to the end of the array.)

//G  splice() — Changes the contents of an array by removing, replacing, or adding elements.

          //q.1
            const arr19 = [1, 2, 3, 4, 5];
             arr19.splice(2, 2);    //splice(2, 2) means start at index 2 and remove 2 elements (3 and 4).
             console.log(arr19);  // ? [1,2,5] (The original array is modified by removing those elements.)
              
          //q.2:- Add elements without removing

            const arr20 = [1, 2, 3];
            arr20.splice(1, 0, 'a', 'b');
            console.log(arr20);  // ? [1,'a','b',2,3]  splice(1, 0, 'a', 'b') means at index 1, remove 0 elements, and insert 'a' and 'b'.

          //q.3
             const arr21 = [1, 2, 3, 4];
             arr21.splice(1, 2, 'x', 'y'); //At index 1, remove 2 elements (2 and 3), then insert 'x' and 'y'.
             console.log(arr21);  // ? [1,'x','y',4] 
          //q.4 
             const arr22 = [1, 2, 3, 4, 5];
             arr22.splice(-2, 1);
             console.log(arr22);  // ? [1,2,3,5]

  //H) reverse() — Reverses the elements of the array in place and modifies the original array.

        //q.1
             const arr23 = [1, 2, 3];
             arr23.reverse();
             console.log(arr23);  // ? [3,2,1]

        //q.2
             const arr24 = [10, 20, 30];
             const result2 = arr24.reverse();
             console.log(result2);  // ?  [30,20,10]
             console.log(arr24);     // ?  [30,20,10]

        //q.3
             const arr25 = [1, 2, 3];
             const reversedCopy = [...arr25].reverse();

             console.log(arr25);         // ? [1,2,3]arr stays unchanged because [...arr] creates a copy.
             console.log(reversedCopy); // ?  [3,2,1]

//I sort() — Sorts the elements of an array in place and modifies the original array.

         //q.1
            const arr26 = [100, 20, 3, 45];
            arr26.sort((a, b) => a - b); //ascending
            console.log(arr26);  // ? [3,20,45,100]

        //q.2
            const arr27 = [5, 1, 9, 3];
            arr27.sort((a, b) => b - a);// descending
            console.log(arr27);  // ? [9,5,3,1]

         //q.3
            const arr28 = [8, 2, 5];
            const sorted = [...arr28].sort((a, b) => a - b);
            console.log(arr28);    // ? [8,2,5] its a copy
            console.log(sorted); // ?  [2,5,8]


//J) forEach() — Executes a provided function once for each array element.

      //q.1
           const arr29 = [1, 2, 3];
           arr29.forEach(function(num) {
            console.log(num * 2);
           });  // Output 2 4 6

      //q.2 
         const arr31 = [1, 2, 3];
         arr31.forEach((val, index, array) => {
         array[index] = val * 3;
         });
         console.log(arr31);  // ? [3,6,9]

//K)  map() — Creates a new array by applying a function to each element of the original array.
       
     //q.1
         const nums3= [1, 2, 3];
         const result7 = nums.map(n => n * 2);
         console.log(result7);  // ? [2,4,6]

     //q.2
         const names = ["Ali", "Sara"];
         const greetings = names.map(name => `Hello, ${name}!`);
         console.log(greetings);  // ?  ["Hello, Ali!", "Hello, Sara!"]


//L) filter() — Creates a new array with elements that pass a condition.

         //q.1
           const nums4 = [1, 2, 3, 4, 5];
           const even = nums4.filter(n => n % 2 === 0);
           console.log(even);  // ? [2,4]

         //q.2
            const arr32 = [0, 1, "", "hello", false];
            const result8 = arr32.filter(Boolean);
            console.log(result8);  // ? [1, "hello"]

          //q.3
          const users = [
           { name: "Ali", age: 18 },
           { name: "Zara", age: 25 }
          ];
          const adults = users.filter(user => user.age >= 21);
          console.log(adults);  // ?  [{ name: "Zara", age: 25 }]

          //q.4 
           const nums5 = [1, 3, 5];
           const even2 = nums5.filter(n => n % 2 === 0);
           console.log(even2);  // ? [](no even numbers. so return empty array)
          
           //q.5
            const letters = ['a', 'b', 'c', 'd'];
            const result9 = letters.filter((val, index) => index % 2 === 0);
            console.log(result9);  // ? ['a', 'c']   Keep the element value only if its index is even (index % 2 === 0).

          //q.6
            const nums16 = [1, 2, 3, 4, 5];
            const result24 = nums16.filter(n => n > 3);
            console.log(result24);  // ? [4,5]  DOUBT

          //q.7
            const values1 = [0, null, undefined, "", 5, "hello"];
            const result25 = values1.filter(Boolean);
            console.log(result25);  // ?    DOUBT


          //q.8
            const fruits = ["apple", "banana", "grape", "kiwi"];
            const result26 = fruits.filter(f => f.length === 5);
             console.log(result26);  // ? ["apple", "grape"]
          //q.9
            const arr38 = [1, 2, 3];
            const result27 = arr38.filter(n => {
            n > 1;
            });
            console.log(result27);  // ?  []  DOUBT
                 // When you use curly braces {}, you must include a return. Without it, the function returns undefined, which is falsy for all elements.


//M)  find() — Returns the first element that satisfies a condition.

     
     //q.1
         const nums6 = [10, 20, 30, 40];
         const result10 = nums.find(n => n > 25);
         console.log(result);  // ? 30

  //q.2
        const nums7 = [1, 3, 5];
       const result11 = nums7.find(n => n % 2 === 0);
       console.log(result11);  // ? undefined

  //q.3
        
       const nums8= [1, 3, 5];
       const result12 = nums.find(n => n % 2 === 0);
       console.log(result12);  // ? { name: "B", age: 20 }
  //  q.4 
      const arr33 = [5, 10, 15, 20];
      const result13 = arr33.find((val, index) => index === 2);
      console.log(result13);  // ? 15  Returns the value at index 2.

  //q.5
       const nums11 = [1, 2, 3];
       const result14 = nums11.find(n => {
        n > 1;
      });
      console.log(result14);  // ? undefined


// N) some() — Returns true if at least one element in the array passes the condition.

  //q.1  
          const nums12 = [1, 3, 5, 7];
          const result15 = nums12.some(n => n % 2 === 0);
          console.log(result15);  // ? false (because no number is even.)



  //q.2
         const nums13= [1, 4, 5, 7];
         const result16 = nums13.some(n => n % 2 === 0);
         console.log(result16);  // ? true (4 is even.Only one match is needed for some() to return true.

  //q.3
         const emptyArr = [];
         const result17 = emptyArr.some(x => x > 0);
         console.log(result17);  // ? [] (Empty array returns false because it checks nothing.)
 // q.4 
         const arr34 = [2, 4, 6];
         const result18 = arr34.some(n => {
         n > 3;
         });
         console.log(result18);  // ? false(The arrow function does not return a value.)


//O)  every() — Returns true if all elements in the array pass the condition. If any element fails, returns false.

       //q.1

          const nums14 = [2, 4, 6, 8];
          const result19 = nums14.every(n => n % 2 === 0);
          console.log(result19);  // ? true ( while checking,all numbers are even.)

       //q.2
          const nums15 = [2, 4, 6, 7];
          const result20 = nums15.every(n => n % 2 === 0);
          console.log(result20);  // ?

       //q.3
          const arr35 = [];
          const result21 = arr35.every(n => n > 0);
          console.log(result21);  // ? false (Because 7 is odd.)
      //q.4
          const arr36 = [];
          const result22 = arr36.every(n => n > 0);
          console.log(result22);  // ? DOUBT

      //q.5
          const arr37 = [10, 20, 30];
          const result23 = arr37.every((n, i) => n > i * 5);
          console.log(result23);  // ? true
                           //n : the current element

                           //i: the index of the current element
                           //why true:-Checks each element:

                                        //10 > 0 * 5 → true

                                        //20 > 1 * 5 → true

                                        //30 > 2 * 5 → true
                                        //All pass, so returns true.
// P) reduce 

      //q.1
        const nums17 = [1, 2, 3, 4];
        const result28 = nums17.reduce((acc, curr) => acc + curr, 0);
        console.log(result28);  // ? 10

            
      //q.2
        const nums18 = [5, 10, 20];
        const result29 = nums18.reduce((acc, curr) => acc - curr);
        console.log(result29);  // ?  -25
                                //If no initial value is given, the first element (5) is used as the initial value:
                                //5 - 10 = -5
                                //-5 - 20 = -25
 
//Q findIndex() – Returns the index of the first element if it passes the test.If no element matches, it returns -1.

      //q.1
         const nums19 = [3, 5, 8, 10];
         const result30 = nums19.findIndex(n => n > 6);
         console.log(result30);  // ? 2 (Because 8 is the first number >6. so its index is 2)

      //q.2
        const nums20 = [1, 2, 3];
        const result31 = nums20.findIndex(n => n > 10);
        console.log(result31);  // ? -1.(couldnt find out n>10)

      //q.3
        const fruits3 = ["apple", "banana", "cherry"];
        const result32 = fruits3.findIndex(fruit => fruit.includes("e"));
        console.log(result32);  // ? 0(apple has "e" and it is in 0th index)

      //q.4
        const nums21 = [5, 10, 15, 20];
        const result33 = nums21.findIndex((n, i) => i === n / 5);
        console.log(result33);  // ? -1

//R flat() :- This method flattens nested arrays into a single array.

      //q.1
         const arr39 = [1, [2, 3], [4, 5]];
         const result34 = arr39.flat();
        console.log(result34);  // ? [1,2,3,4,5]

