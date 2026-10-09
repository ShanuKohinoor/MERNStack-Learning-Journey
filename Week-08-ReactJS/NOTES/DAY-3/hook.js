//                                 Hook
//                                 -----

//  It is a special function that allow to use  powerful features inside a functional component.

//  Type of Hooks are:-

//        ------------------------------------------------------------------------------
//        |                   |                  |                  |                   |
//    useState            useEffect            useRef            useMemo/          custom Hook
//                                                              useCallback

// React gives different hooks for different job.

// Without hook:-
//              Eg:- 

//          function Counter(){
//            let count = 0;

//            return(
//                <div>
//                    <p>{count}</p>
//                    <button>Increase</button>
//                </div>
//            )
//          }

//        * When we click, UI will not update, because React doesn't track normal variables.


// With Hook :-

//          Eg:-
//    import { useState } from "react";

//         function Counter(){
//            const [count,setCount] = useState(0);

//            <div>
//                <p>{count}</p>
//                <button onClick={()=>setCount(count+1)}>
//                    Increase
//                </button>
//            </div>
//         }

//  By using hook react remembers value and update UI automatically.






//                              Rules Of Hook
//                              -------------

// * Rule: 1:- Should call hook at the top level.

// * Rule: 2:- Should not call hooks inside:
//          * loops
//          * conditions
//          * nested functions

//  
//        Eg:- 
//           for(let i=0; i<5; i++){
//               useState(i);                   // dont use like this
//           }

//      * Hooks cannot be used inside loops or condition because,React depends on the consistent order
//         of hooks across renders. Changing order breaks reacts internal tracking.



// * Rule: 3:- Should call hooks inside:
//            * Functional components
//                 Eg:-
//                  function MyComponent(){                      // React function               
//                    const [count, setCount] = useState(0);  
//                    return <p>{count}</p>;
//                  }
//            * Custom hooks 

//                  function useMyData(){                       // custom
//                      const [data, setData] = useState(0);  
//                      return data;
//                  }

//   - Not allowed in normal function
//                function normalFunction(){                   // normal function
//                  const [count, setCount] = useState(0);     // React doesn't track 
//                }                                            // Normal functions are invisible to React




// * Rule : 4 :- Hook name should starts with 'use'
//      Eg:-
//          * useState
//          * useEffect
//          * useRef











//Definition:-  A Hook is a special built-in React function that lets functional components access 
//               and manage React features such as state, side effects, context, and refs.