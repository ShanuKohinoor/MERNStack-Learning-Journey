//SPREAD OPERATOR:- Represented by ...(three dots).
        // used for array and object(...obj or ...[])
        //in case of object
        const obj = {
            a: 1,
            b: 2,
            c: 'Hello'

        }              // if we give ...obj, it means  a: 1,b: 2,c: 'Hello' without curley bracket.so, we can write like
        
        const obj2 ={
            ...obj
        }              // Must need opening and closing bracket.
        console.log(obj);
        console.log(obj2);


//in case of Array

        const a= [1,2,3,4];
        //...a means 1,2,3,4. if we write like ...a, will get syntax error.
        const b = [...a];
        console.log(a);    //[1,2,3,4]
        console.log(b);    //[1,2,3,4]



        //SHALLOW CLONING:- with spread operator,if we create new object with old object
                     // We can copy something

                    const obj5 ={
                        a:1,
                        b:2,
                        c: 'Hi'
                    }
                    console.log(obj5);  //normally this means in object, a:1,b:2 and c:Hi save in memory and only address stored in obj5
        
                        // only obj5 reference goes to obj6
                        const obj6 =obj5; // if we check like console.log(obj6 ===obj5); output willbe true. But if we check
                                    // with spread operator like 
                                            //const obj6 ={
                                            //...obj5
                                            // }             output will be false. Because ...obj5 is a new object

                        // Here shallow cloning is happening.
        //DEEP CLONING:-A deep copy creates a full clone of the object, including all nested objects/arrays — no shared references.
                       //copy everything

           //In case of object 1 with so many nested objects and we want to make deepclone,nested objects copied to object 2,
const original = {
  name: "Shanu",
  age: 35,
  hobbies: ["Henna", "Cooking"],
  address: {
    city: "Birmingham",
    postcode: "B33"
  }
};

const deepCopy = structuredClone(original);

deepCopy.address.city = "London";
deepCopy.hobbies[0] = "Drawing";

console.log(original.address.city); 
console.log(original.hobbies[0]);   



//DESTRUCTURING:-Easy technique to assign a value in object or array to a variable
  // In case of object:-
      const obj1 = {
          name : "Priya",
          place : "Kerala",
          rank : 10
      };
      function myfunction(){
        const name = obj1.name;
        const place = obj1.place;
        const rank = obj1.rank;
        console.log(name,place,rank);
      }
      myfunction();   //these are the normal steps we use.
      //Instead of these normal steps,in destructructuring, we can write like,
    function myfunction() {
       const {
         name,
         place,
         rank
       } = obj1; // This is object destructuring.

       console.log(name,place,rank);
    }
 myfunction();   


//Rest operator:-if we save alone in one variable and place and rank in another variable ,we can use rest.

    function myfunction1(){
       const{
         name,
         ...others  
        } = obj1;

       console.log(name,others);
    }
     myfunction1();
 // same cases in Array too
//  Step 1: Declare marks first
const marks = [1, 4, 6, 7, 12, 15];

// Step 2: Define the function
function myfunction2() {
    const [a, b, c, d, e, f] = marks; // Destructuring
    console.log(a, b, c, d, e, f);     //  Output: 1 4 6 7 12 15
}

//  Step 3: Call the function
myfunction2();
            // if we want first two we can give 
               // const [a,b] = marks;
               //console.log(a,b);
            // if we want 1 and 3, we can write
               // const [a, ,b] = marks;
               //console.log(a,b);

            // we can do like,
               // const[a, ,b,...others]= marks;
               //console.log(a, ,b,others);


      //we can assign default values too..
      //if there is no value,will print default.
      //if there is value, will print that its self.
      //In undefined case, will print default.    
      
      
    //We can destructure directly in arguments also in both array and object.Eg:-
        const marks1 = [5,8,9];
           function myfunction3([a,b]){
            console.log(marks1);
           }
        myfunction3(marks1);





// NESTED DESTRUCTURING
      //In case of object.
          const obj3 ={
            name: 'Alice',
            mark: 35,
            place: 'Kannur',
            subject: {
                teacher:'Sreeja'    // if we give teacher in variable,like 
                                         // const{
                                         //teacher
                                         // } = obj;
                                         //console.log(teacher);
                                              //output will be undefined.Because in object search for the key teacher,there is no key as teacher. But here key is subject. So destructure subject like this,
                                                                                       // const{
                                                 //const {
                                                 // subject:{
                                                         //teacher
                                                 }
                                                 // } = obj;
                                                 //console.log(subject);
   
            }
          


          const {
            name,
            mark
          } = obj3;

        console.log(name,mark);

//PROTOTYPE:- this is old technique. To maintain old code, we can use it.
      
    // it is an object
    // if we create an object in Javascript, there will create inbuilt prototype object.
     let car ={
       wheels:4,
       drive(){
        console.log("Driving...")
       }
     }   
     let tesla ={
      autopilot:true,
     }  

     let tata ={
      autopilot:false,     // ouput will be 4
                          // if we write, wheels:5 here. Output will be here. first look for here. Then only go to the parent
     }  
     tesla.__proto__ = car;
     tata.__proto__ = car;

     console.log(tesla.wheels);
           //if we do,
           console.log(car);
           console.log(tesla);
           console.log(tata);    // will get
                                       //{ wheels: 4, drive: [Function: drive] }
                                             //if we look in console,besides this, we can see this too [[protype]]= object
                                       //{ autopilot: true }
                                       //{ autopilot: false }
//INHERITANCE:-


//JSON (JavaScript Object Notation):-to send message in particular format from server to client or client to server.or structed data in string.Easy and lightweight.
              function submit()   {
                const items =document.getElementsByClassName('data');
                const data={};
                for (let item of items){
                    data[item.name] = item.value;
                }
                 console.log(data);
              }      //This exist as object in JavaScript. We have to send whole internal Implementation  data to the reciever. They might not understand this. So we use JSON.
                     //To solve this, we have to convert the data to send in one identifiable format.That is DTF(Data transfer Format). The reciever will convert the data to their format with DTF like JSON.  
                     // This is language independent. so everyone can understand.

        //Convert JS Object ⇄ JSON String

        // Eg:-
           // step-1:- first  convert to string
               //const e = {  // THIS IS OBJECT
                //name: 'Ayesha',
                //age: 25,
                //hobby: ['Gardening','Cooking','knitting']

               //};
                //const jsonE =         
               //{ 
                //"name": "Ayesha",     //In key in json must have quotes

                 //"age": 25,      // in javastrict, string can write in single ,double or template also. but in json we can use only double quotes
                 //"hobby": ["Gardening","Cooking","Knitting"]   //In javascript we can put coma in last item in object, but in json dont put comma in last item.if we put comma then will show the error.

               //};      //json is string, not object. so we cant call by putting dot. we can use  JSON as transfer the data only. 

                      // We can use a library in Javascript, we can use that also like
                       // const jsonE = JSON.stringify(2);
                       //console.log(jsonE);



    // We can convert string to object,we have function in javascript.ie,JSON.parse()
               //const e1 = {
               //name: 'Ayesha',
               //age: 25,
               //hobby: ['Gardening', 'Cooking', 'Knitting']
                //};

// Convert JS object to JSON string
             //const jsonF = JSON.stringify(e); 
             //console.log("JSON string:", jsonF);

// Convert JSON string back to JS object
             //const obj4 = JSON.parse(jsonE); 
             //console.log("Converted back to object:", obj4);
             //console.log("Name:", obj4.name);  // Accessing name
   

        //Convert object to string: JSON.stringify(obj)

        //Convert string to object: JSON.parse(jsonStr)


































































        //followed code malayalam channel
            //Lodash library:- we can use in large project