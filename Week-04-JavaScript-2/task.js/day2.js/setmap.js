//SET AND MAP

//SET:- To store unique values
            //similar to array...But cant store duplicate/similar values.
            //Type of Datatype to store:-
                 //1. Primitive values
                 //2. Object References

            // We can store all type of values, like, number,string,Boolean,undefined,symbols,objects/ arrays etc
            //Since array is an object, it will take its reference.
            //How to create a set?
               // create object with new keyword.
            let numSet = new Set ();

            //We can add values by two methods:-
                 //1 . Built-in method(by using add method)

                 numSet.add(10);
                 numSet.add(20);


        // To know how many values
                console.log(numSet.size);    // 2 (Because we added 2 values here. 10 and 20)
                 //even if we add duplicate value, size wont change...Because set wont take duplicate value...it will take only unique value. it willremove duplicate value.)
        //To check duplicate value
                numSet.add(20);  
                console.log(numSet.size);    // 2 (Because Remove duplicate value and take  10 and 20)
                // if we add another value(unique value,will increase the number).Eg:-
                 numSet.add(40);  
                console.log(numSet.size);    // 3 (take  10 ,20 and 40)
  
        // To set array
            let arrSet = new Set();
            let arr1= [1,2,3,4];
            let arr2 = [1,2,3,4];

            arrSet.add(arr1);
            arrSet.add(arr2);
            console.log(arrSet);  // Output :-Set(2) { [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ] }

                         // We got both duplicate here. Becuase in array we take reference. Thats the reason.

                         //If we want to remoeduplication we have to convert to string before adding.
                          let arrSet1 = new Set();
                         let arr3= [1,2,3,4];
                         let arr4 = [1,2,3,4];

                         
                         arrSet1.add(JSON.stringify(arr3))
                         arrSet1.add(JSON.stringify(arr4));
                         console.log(arrSet1);

           //We can chain add method
              let chainSet = new Set();
              chainSet.add(1).add(2).add(3).add(4);
              console.log(chainSet);

           //To check any value use has method:- if it returns true...That element present in this set. if it is false, that element is not present.
              console.log(chainSet.has(1));  //true
              console.log(chainSet.has(15));   //false

        //To delete a value:- Use delete method
          chainSet.delete(2);
          console.log(chainSet);  //Set(3) { 1, 3, 4 }
        //To delete all values in set :-Use clear method
          chainSet.clear();
          console.log(chainSet);   //{}   (delete all values)

       //To iterate,we can use forEach or For...Of method

       let ornaments = new Set;
          ornaments.add("Diamond");
          ornaments.add("Gold");
          ornaments.add("Silver");
  

         for(let item of ornaments)
         {
            console.log(item);
        }


        //0r by ForEach
        ornaments.forEach(item=>console.log(item));

           
 //MAP:-Map store key-value pairs.
        //Key and value can be of any type(allows both object and primitive values)             
        //map object dont contain duplicate keys
        //But map object can contain duplicate values
        //keys insertion order is preserved.(inobject order is not preserved)
const myMap1 = new Map();

         myMap1.set("a", 100);
         myMap1.set("b", 100); // duplicate value is allowed
         myMap1.set("a", 200); // duplicate key is NOT allowed — this will overwrite the previous value

         console.log(myMap1);


        //A map object iterates its elements in insertion order
       const myMap =new Map();
       //value can be added to the map using set method
           myMap.set('a',1)
       //value can be fetched from the map using get method by passing the key
           console.log(myMap.get('a'));


//Eg:-  
        let map = new Map()
        map.set(1,"HTML")
        map.set(2,"CSS")
        map.set(3,"JS")
        console.log(map)               //Map(3) { 1 => 'HTML', 2 => 'CSS', 3 => 'JS' }
        console.log(map.get(4));  // undefined (key 4 does not exist)

        //for...of or forEach method used to print key value pair separately
             for(let [key,value] of map){
                console.log(`${key}=>${value}`)
             }; 
                                              //1=>HTML
                                              //2=>CSS
                                              //3=>JS
             
             //forEach
             map.forEach((value,key)=>{
                console.log(`${key}=>${value}`)
             });                                
                                                 //1=>HTML
                                                 //2=>CSS
                                                 //3=>JS
            //To print just keys
              for(let key of map.keys()){
                console.log(key);
              }                      //1
                                     //2
                                     //3
                                    
           //TO Print just values
           for(let value of map.values()){
            console.log(value);
           }                         //HTML
                                     //CSS
                                     //JS

//WEAK SET:- It is the type of collection that allows us to store without an order.
             //Here we can store only the object. we can't store the values.
             //it is not fixed. it will change.
             //only contains unique objects 
             //if there is no reference to a stored object, they are targeted to garbage collection.
             //no specific method
             //it cannot print directly
             //it is not iterable.
             // It does not have .size or any method to list values.



        //Set add(method)  
                  //syntax
                   const weakSet = new WeakSet();
                   const obj1 = {name:"Ali"};
                   const obj2 = {age:22};
                   weakSet.add(obj1);
                   weakSet.add(obj2);
             console.log(weakSet.has(obj1));  //true
             console.log(weakSet.has(obj2));  //true

           //To delete obj1 from the WeakSet
                   const deleted = weakSet.delete(obj1);
                   console.log(deleted); // true





//WEAK MAP:- same as map, key value pair.
          //not static
          //Allows the keys of object type only(not primitive). values can be any type
          //if there is no reference to key object,they are targeted to garbage collection like weakset.
          //iterates its elements in insertion order.
          // cannot use numbers, strings, or arrays as keys

            //syntax
              const weakMap1 = new WeakMap


        
const weakMap =new WeakMap();
const obj3 = {name:"Adam"};
const obj4 = {age: 26}

weakMap.set(obj3, "Developer")
weakMap.set(obj4,"Designer")

console.log(obj3.name);    //Adam
console.log(obj4.age);     //26
console.log(weakMap.get(obj3));   //Developer
console.log(weakMap.has(obj4));   //true

       
                  //Difference between SET and WEAK SET      


           // SET                                         //WEAK SET

// -Can store primitive and non-primitive            -Can store object only 
// -Can store unique values                          -Same as set. Can store unique values alone
// -Can iterat with forEach and For of               -Cannot iterate.
// -Have:-   add,has,delete,clear and size           -Dont have:- clear and size. Only have:- add,has,delete.

                                                 

                //Difference between MAP and WEAK MAP


            //MAP                                          //WEAK MAP

//  -  Key-value pair                              - Key-value pair
//  -  Dont contain duplicate KEYS.                - KEYS can be OBJECT only
//  -  Contain duplicate values.                   - But VALUES can be any type








               //WEAK SET                                    //WEAK MAP

  //  If there is no reference,automatically,      Same as weak set. If there is no reference,automatically,
  //      it will go to the garbage.Thats why            it will go to the garbage.
 //       iteration can't possible                      That's why iteration can't possible



//SYMBOLS :-it is primitive dataType
        //unique identifier:- A symbol is like giving two boxes same name.But the boxes are different.
           //Eg:-
           const symb1 = Symbol("id");
           const symb2 = Symbol("id");
           console.log(symb1 === symb2);   //false   (Eventhough they look same("id"), each Symbol() is totally unique)

          //Symbol is useful when want to hide some data inside an object.

        const t1 = Symbol();
        console.log(t1);


        const t2 = Symbol();
        console.log(t1 ===t2); //false   

  
//BIGINT :-I t is a special datatype works with very large integers. Javascript has only integer limit to 15. 
       //It has a safe limit to numbers. Beyond that it wont work.
      //we can write large numbers using 'n' at the end
        console.log(9007199254740991+1);  // correct (9007199254740992)
        console.log(9007199254740991+2);  // wrong (9007199254740992) same result as above
   //To avoid this problem we use BigInt. It is like super calculator. It can handle big numbers too.
     
        const star =  9007199254740991n;
        const total = star + 10n;
        console.log(total);      //9007199254741001n

    // We cant mix BigInt with normal number. Eg:-
        const big = 100n;
        const normal = 20;
        // console.log(big+normal);  //Error

        
      //Instead of that we can use by converting,
        console.log(big+BigInt(normal));   //120n







//Short-Circuiting with Logical Operators (||, &&)
   //Short-circuiting means that JavaScript stops evaluating the rest of the expression as soon as the result is known.



     //Short-Circuiting with &&:- Returns first falsy value.If first is truthy then check for second. if it is false. then return that.
     //  if both are true,return second

console.log(true && false);      // false
console.log(false && true);      // false
console.log("Ali" && "Sara");    // "Sara" → first is truthy, so it checks second
console.log(0 && "hello");       // 0 → falsy, short-circuits
console.log(null && "anything"); // null





     //Short-Circuiting with ||:- It  returns first truthy value and stops. if first one is false,then check for second value
         //if both are false. Returns second value
console.log(true || false);     // true
console.log(false || true);      // true
console.log("Ali" || "Sara");    // "Ali" is truthy. So, ignored second one
console.log(0 || "hello");       // "hello"  (0 is falsy. So it check second aand returns second one)
console.log(null || "anything"); // "anything"
console.log(null || undefined); // undefined.(both are falsy.so it returned the last one)

   








      






























