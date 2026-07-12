//                                        useState Hook
//                                        ------*------


// A Hook in React is a special function that lets functional components use React features like state and lifecycle behavior.

// * useState is a hook used to manage internal state inside a component.
//          - It is used to store data in a component
//                 and update it when needed
// * Used to Store and update data.

// * When state updates, component re-renders automatically.
// * State updates are asynchronous and may be batched            

//              setCount(count + 1);              // This is wrong. This might only increase by 1, not 2

//              setCount(prev => prev + 1);
//              setCount(prev => prev + 1);       // This is the correct way. This ensures increment by 2         
//                                                // When updating state based on previous value, always use callback form.

//  updatingState
//  ------------
// * State should be always updated using the setter function.
//      syntax:-

//      const [state, setState] = useState(initialValue);
//                                    // state:- current value.
//                                    // setState:- function to update
//                                    // useState:- hook that creates state
//                                    // initialValue:- Starting value
//      like:-  

//          const [count,setCount]  = useState(0);

//                            // 0 is the initial value
//                            // it is set only once (on first render)


//       Eg:-
//            import { useState} from 'react'

//              function Counter() {
//                 const [count, setCount] = useState(0)

//                return (
//                 <div>
//                   <h1>{count}</h1>
//                   <button onClick = {()=> setCount(count + 1)}>Increase </button>
//                 </div>
//                )
//              }


//  state can be any datatype
//        * useState(0)        // number
//        * useState("Hello")  // string
//        * useState([])       // array
//        * useState({})       // object


// Rules of useState 
// -----------------

//   1) Must be called inside functional component
//   2) Must not be used inside loops or conditions
//   3) Always called at top level






//          Props                                      State                    
//          -----                                      -----
//  * Passed from parent                       * Managed inside component 
//  * Read-only (immutable)                    * Can be updated           
//  * Used for communication                   * Used for dynamic UI     
//  * Cannot be modified directly              * Updated using setter function (like setCount)
//  * External data(input from outside)        * Internal  data (Data inside the component)
//  * like function arguments                  * like local variables inside function

// Props are used to pass data between components, whereas useState is a hook used to manage internal state inside a component.





//                        Component Render
//                               |
//                               |
//                               V
//                     useState initialized (once)
//                               |
//                               |
//                               V
//                       State updated via setter
//                               |
//                               |
//                               V
//                     Component re-renders automatically