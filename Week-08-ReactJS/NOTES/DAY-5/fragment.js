//                               Fragment
//                               --------



// Fragment is used to group multiple elements without adding extra DOM node(HTML div)
// * It is invisible wrapper

// Uses:-
// ----
//  * Keeps HTML clean
//  * Avoids unnecessary divs
//  * Better performance
//  * Used in tables, layouts, lists



// In React we must return one parent element.
//       * To avoid unnecessary div,we use fragment
// Why extra div bad?
//     *Extra div adds unnecessary nesting, which can affect styling, layout structure, and increases DOM size slightly.

// Eg:-

// With div:- Here using div is unnecessary.

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>World</p>
//     </div>
//   );
// }


// With fragment:-
//  We can weite in two methods:-

//   1) Short syntax:-

        //    function App(){
        //     return(
        //         <>
        //            <h1>Hello</h1>
        //            <p>World</p>
        //         </>
        //     )
        //    }


//   2)  Full syntax:-

    //   import { Fragment } from "react"

    //      function App(){
    //         return(
    //             <Fragment>
    //               <h1>Hello</h1>
    //               <p>World</p>
    //             </Fragment>
    //         )
    //      }
