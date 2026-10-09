//                       Dependency Array
//                       ---------------

// Dependency array is the second argument of useEffect.

// It is used to control when the useEffect function should run.

// It contains variables (state/props) that useEffect depends on.

// React checks these values, and if any value changes, then useEffect runs again.


//const { useEffect, useState } = require("react");


//      useEffects(()=>{
         // sideEffect
//      },[dependencies])




//   There are three types of dependencies Array

//             -----------------------------------------------------------------------
//             |                                  |                                   |
//             |                                  |                                   |
//             v                                  v                                   v
//      No dependency Array             Empty dependency Array[]            With dependency[value]


//  1) No dependency Array
//    --------------------
// It runs after every render

//     Eg:-
//   
//                  useEffect(()=>{
//                      console.log('Runs afyer every render');                      
//                 })





//  2) Empty dependency Array[]
//    -------------------------
// It runs only after first rensder.

//    Eg:-
//            useEffect(()=>{
//                console.log('Runs only once');                
//            },[])








// 3) With dependency[value]
// It runs value changes

//  Eg:- 
//        useEffect(()=>{
//           console.log('Runs when count changes');     
//        },[count])

// It runs after first render
// If  count is same,dont run.
// Once count changes,it runs


// Eg:- 
        //  function counterApp(){
        //     const[count,setCount] = useState(0);


        //     useEffect(()=>{
        //         console.log('Count Changed:',count);    
        //     },[count])

        //     return(
        //         <button onClick={()=> setCount(count+1)}>{count}</button>
        //     )
        //  }

                       // In this, first render--> print count
                       // when clicks,count changes--> runs again
                       // only runs when count changes



// Dependency array helps maintain consistent behavior
//  That's why React needs hooks in same order                      