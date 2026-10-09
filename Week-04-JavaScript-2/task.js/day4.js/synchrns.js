// SYNCHRONOUS:- It works in a order. First finish first task and then go to second task.
         //code runs line by line.

           console.log("Shan");
           console.log("Shanu");
           console.log("Faraza");
           console.log("Filza");   //Shan
                                   //Shanu
                                   //Faraza
                                   //Filza



//ASYNCHRONOUS:- It initiate first task.Before completing first task,will go to second task.
       //This helps in the operations like time consuming operations(which needs more time to complete if wait for each task to finish). So, can finish easily.
       //Results will get later. Eg:- call back,promises,setTimeout etc

         console.log("Start");

         setTimeout(()=>{
            console.log("Middle");
         },3000);

         console.log("Last");      // Start
                                   // Last
                                   // Middle   (Here middle output comes later)


       
                                


    //Tricky questions

     //Question.1 :- Guess output
             console.log("A");

             setTimeout(() => {
             console.log("B");
             }, 0);

             console.log("C");       //A
                                     //C
                                     //B
                                        //Because, evenif 0 seconds, it will goes to  callbacl Queue.
                                        //'B' will print after synchronous code 'A' & 'C'
                                        //Runs only after call stack is empty.


//Common Asynchronous Tasks in JS (setTimeout, API calls, etc.)

  // 1. setTimeout:- runs the function after delay in ms.setTimeout(fn, delay)
            //Its mechanism is WebAPIs

             
            console.log("Start");

            setTimeout(() => {
              console.log("Later"); // runs after 2 seconds
            }, 3000);

              console.log("End");     // Start
                                      // End
                                      // Later

              //Eventhough there is delay in code execution, Javascript does not pause the execution. 
              //It logs "Start" --> schedule timeout --> logs "End"  --> then logs "Later" after 3000ms(3 seconds)


     //2. setInterval:- Runs the function repeatedly every given interval.setInterval(fn, interval)
                  // Its mechanism is WebAPIs


                         setInterval(() => {
                           console.log("Runs every 1 second");
                         }, 5000);

                                      //    Can use clearInterval(id) to stop it.


    //3.  API Calls (AJAX, fetch, XMLHttpRequest)
        
        //fetch:- It is asynchronous and returns a Promise. We can use .then() to handle success and .catch() for errors.
                 //Its mechanism is Promise-based



     //4. Event Listeners:- These are asynchronous in nature. JavaScript doesn’t know when the user will click or press a key, so it waits and reacts later.
                //Its mechanism is Callback-based

                document.getElementById("btn").addEventListener("click", () => {
                   alert("Button clicked!");
                });


     //5. Promises:-It represents a value that may be available in the future.
            // Its mechanism is ES6 Feauture
            //It helps to write asynchronous code of Javascript in an order.
            // How it works:-with the help of .then
                     





     //6. Async/Await:-  Syntactic sugar over Promises
           
              //Its mechanism is Promise-based












      











//How Javascript handles  asynchroous ?
   //answer:- with the help of Event loop.



// Web APIs:- When we run javascript , we will get access to extra features provided by the browser.These are web API's.
              //Eg:-Timer(setTimeout,setInterval),DOM events(onclick,oninput),Network Requests(fetch, XMLHttpRequest),others(localStorage, geolocation, etc)	

             //Web APIs are part of the browser, not part of the Javascript.


//Callback Queue/tasks Queue/message Queue:- which helps to store asynchronous callback come from 
             // *setTimeout
             // *setInterval
             // *DOM events like click, keydown, etc.
             // fetch.then(...)

     //when these are ready,(after clicking,and after timer finished),their callbacks are pushed into callback Queue
            //They run only when,call stack is empty and all micro tasks have run





      //Event loop :-  It is a mechanism in Javascript, helps to coordinate the execution of synchronous code, manage asynchronous by ensuring operations like setTimeOut,fetch,promises etc runs correctly,after the current code finishes.                                 
                //The event loop is helps JavaScript in non-blocking and able to handle asynchronous tasks evenif it is a single-threaded.


       //Working of event Loop.
          // step 1. JavaScript runs synchronous code line-by-line in the call stack.
          // step 2. If an asynchronous operation is found (e.g., setTimeout or a Promise), it is:

                        //Handled by browser APIs, and

                       //The callback is sent to the appropriate queue (microtask or callback).

        //step 3. When the call stack is empty, the event loop checks:

                       //First: Microtask queue which is store tasks from (Promise.then, queueMicrotask, etc.)

                       //Then: Callback queue which stores tasks from (setTimeout, setInterval, etc.)

      //step 4. If anything is there in a queue, the event loop pushes it into the call stack to run next.

          
      

    //Question. How Web APIs, Callback Queue, and Event Loop Work Together with an example.

        console.log("Start");       //step.1 --> "Start" logs, normal synchronous code--> runs in the call stack

        setTimeout(()=>{            //step.2 --> web APIs register setTimeout
            console.log("center");
        },5000);

        console.log("End");        //step.3 --> "End"logs, continues/run immediately

                                  //step.4 --> Timer counts 5000ms inthe background(Web API area).

                                  //step.5 --> After 5000ms, call back(()=> console.log("center")) is moved to callback Queue

                                  //step.6 --> When call stack empty after running synchronous code, Event loops move call back() from callback Queue to call stack

                                  //step.7  --> "center" logs

     
   //The function runs at regular intervals, ignoring excess calls during the wait.



