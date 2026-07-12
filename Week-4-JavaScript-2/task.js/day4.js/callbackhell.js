//callback hell:- nested call back functions written inside which is hard to read, hard to maintain etc.
          //callback faces two issues:-
            //1. callback hell
            //2. inversion of control

      //JavaScript is single-threaded, so when we do asynchronous tasks (like reading files, fetching data, setTimeout), often use callback functions to continue after the task is done.

     //When multiple async operations need to run one after another,nest callbacks inside each other.





 //callback  function :-

 function a(callback){
  console.log("inside function a")
  callback();
 }

 function b(){
  console.log("inside function b")
 }

 a(b);




  //Eg of call back hell:-

  setTimeout(()=>{
    console.log("1st step done");
    setTimeout(()=>{
      console.log("2nd step done");
      setTimeout(()=>{
        console.log("3rd step done");
        setTimeout(()=>{
          console.log("4th step done")
        },1000);
      },1000);
    },1000);
  },1000);

  // Also known as PYRAMID OF DOOM



  //To avoid callback hell,use:

        // 1. Promises

        // 2. Async/Await

            //These help to write clean, flat, and readable code.

