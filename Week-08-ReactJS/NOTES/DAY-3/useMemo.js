//                               UseMemo
//                               -------



// It is used to save (cache) a calculated value.

// So React doesn't wants to calculate again and again.

// It is used for heavy calculation only.
//    - Dont use in simple calculation. To avoid unnecessary recalculation



// without useMemo:- In every render,calculation runs
// with useMemo:- only runs when needed

// Eg:-

//  import { useMemo } from "react";

    //  function App ({num}){
    //     const result = useMemo(()=>{
    //         console.log('Calculating....');
    //         return num*2
    //     },[num])

    //     return <h1>{result}</h1>
    //  }



    //   Here,with useMemo,
          //          In first rendering,
//                        calculating runs
//                               |
//                               |
//                               V
//                          next render            
//                               | if num not changed
//                               |
//                               V
//                      React uses saved value
//                               |
//                               |
//                               V
//                  Then no calculation




// useRef returns object
// useMmeo return value