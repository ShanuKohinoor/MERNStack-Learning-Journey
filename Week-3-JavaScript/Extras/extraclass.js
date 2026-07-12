function outer(){
    const x =10;
    function inner(){
        console.log(x);
    }
    inner();
} outer ();





// What is object method  in javascript?:- They are functions stored as object properties.These methods allow objects to perform actions. Eg:-
     const person ={
        name:"Shanu",
        greet: function(){
            console.log("Hi, I am "+ this.name);
        }
     };
     person.greet();  // Output = Hi, I am Shanu
                      // greet is a method(a function inside the object person)
                      //this.name refers to person.name.





//Object methods
    // 1.Object().assign:-It is used to copy the values and properties from one or more source objects to a target object.
            //Used to merge the  objects.
            //Use Object.assign('O' in Object should be in capital letter)
            //If we write same property name like firstName,lastName, instead of firstName1, lastName1, it will take last one only
            //Object.assign(target, source1, source2, ...)

            const obj7 ={
                firstName : "Shan",
                lastName : "Pullani",
                age : 40
            }
            const obj8 ={
                firstName1 : "Shanu",
                lastName1 : "Shahanas",
                age1 : 35
            }
            console.log(Object.assign(obj7,obj8));  //Output will be:-
                                   //{
                                      //firstName: 'Shan',
                                      //lastName: 'Pullani',
                                      //age: 40,
                                      //firstName1: 'Shanu',
                                      //lastName1: 'Shahanas',
                                      //age1: 35
                                    //}   here both objects merged together. 
    // 2. Object.keys() or Key array:-It returns an array of keys (property names) of a given object.
        //Syntax:-Object.keys(object)
        //Use:-When you want to access only the property names of an object.


                const student = {
                    name: "Anu",
                    age: 6,
                    class: 1
                };

                const keys = Object.keys(student);
                console.log(keys); // Output: [ 'name', 'age', 'class' ]
                                   //willget the properties in an array


 // 3. Object.values() or Value array:- It returns an array of values (not the keys) of a given object.
            //similar like keys.But here we get value in an array.
            //Syntax:-Object.values(object)
            //Use:-When you want to access only the values of an object.


                 const student1 = {
                    name: "Anu",
                    age: 6,
                    class: 1
                 };

                const values = Object.values(student);
                console.log(values); // Output: [ 'Anu', 6, 1 ] 
                                     //here values in array

                            
// 4. Object.entries() or Key value array:- It returns an array of key-value pairs from an object.
            //Syntax:-Object.entries(object)
            //Use:-when you want to loop through both keys and values.


            const student3 = {
                name: "Anu",
                age: 6,
                class: 1
                };

                const entries = Object.entries(student);
                console.log(entries);
                           // Output: [ ['name', 'Anu'], ['age', 6], ['class', 1]

    // 5. Object.freeze():-It makes an object immutable   
            //That means,it cannot add, remove, or change any property of the object.
                       //It locks the object and prevents modifications.
            //Syntax:-Object.freeze(object)
            //Use:- when you want to protect important data in an object from being changed.
             const user = {
                   name: "Shanu",
                   age: 35
            };

                   Object.freeze(user);

                    user.age = 30;         //  No effect
                    user.city = "London";  //  No effect
                    delete user.name;      //  No effect

                    console.log(user);
                    // Output: { name: "Shanu", age: 28 } wont change to new. Because it freeze

// 6. Object.seal():-It prevents adding or deleting properties, but allows modifying existing properties.
             //Syntax:-Object.seal(object)
             // Difference between seal() and freeze() are:-
                       // seal() :- can change values, but can’t add/delete keys.
                       //freeze() :- can’t do anything.

            const book = {
                 title: "Story book",
                 pages: 604
            };

             Object.seal(book);

             book.pages = 610;         //  Allowed
             book.author = "Unknown";  //  Not added
             delete book.title;        //  Not deleted

             console.log(book);
                          // Output: { title: "Story book", pages: 604}


//7. Object.hasOwn():-It checks if a property exists directly on the object.
          //Checks whether the object obj has the property prop directly on itself (not inherited from its prototype chain).
          //Returns:
                 //true if the property exists directly on the object.
                 //false if the property does not exist or is inherited from prototype.
                    const student4 = {
                         name: "Fatima",
                         age: 10
                    };  //student object has two properties:

                                 //"name" with value "Fatima"

                                //"age" with value 10
                  console.log(Object.hasOwn(student4, "name"));   // true ( "name" is defined directly on student, it returns true.)

                  console.log(Object.hasOwn(student4, "class"));  // false("class" is not defined on student, it returns false.)

// 8. toString():-This method converts a value (like a number, array, or object) into a string.
        // 1.toString() on a Number

              const num = 123;
              const str = num.toString();

               console.log(str);       // "123" (string)
               console.log(typeof str); // "string"


        //  2. toString() on an Array
              const fruits = ["apple", "banana", "mango"];
              console.log(fruits.toString());
              // Output: "apple,banana,mango"

        // 3. toString() on a Boolean
              let Birmingham = true;
              console.log(Birmingham.toString()); // "true"
               

// 9.valueOf():-This method returns the primitive value of an object.




 






 

  