//                         CleanUp Function
//                         ----------------


// It is used to clean or remove side effects.
// It prevents memory leaks and unwanted repeated effects.

// It runs before component re-renders.


//   Without cleanUp:-
//         useEffect(() => {
//          setInterval(() => {
//           console.log("Running...");
//         }, 1000);
//        });


// Every time component re-renders,new setInterval is created. And old one is not stopped. And result will become like:-
//       1st render --> 1 timer
//       2nd render --> 2 timers
//       3rd render --> 3 timers


//  To stop this previous effect,we use cleaup.

//  With cleanUp:-

//  Cleanup function removes or stops previous effect

    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         console.log('Running......');    
    //     },1000)

    //     return()=>{
    //         clearInterval(timer)
    //     }
    // })





 //                         First render   
 //                        useEffect runs
//                               |
//                               |  timer created (1 timer)
//                               |
//                               V

//                        Second render
////                             |
//                               |   creating new timer
//                               |
//                               V
//                         cleanup runs :-        
//                              old timer removed
//                               |
//                               |
//                               V
//                    new timer created
//                               |
//                               |
//                               V
//                  always one timer exist









//   Eg 2:-
// useEffect(() => {
//   console.log("Effect running");

//   return () => {
//     console.log("Cleaning old effect");
//   };
// }, [count]);                                // with dependency


// count = 1 --> Effect runs
// count = 2 -->
//    Cleanup runs (old effect removed)
//    Effect runs again