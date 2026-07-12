//                                 JSX(JavaScript XML)

//  It is a syntax extension for JavaScript.
// It allows to write HTML like code inside JavaScript.
//     - It place them in DOM without any createElement() and appendChild() methods

// It is an extension of JavaScript language based on ES6 and is translated into regular JavaScript at runtime.

// It helps to make easy to write and add HTML in React.

//JSX is not  HTML. It gets converted to JavaScript using tools (like Babel)


// React converts JSX into JavaScript using Babel, creates a Virtual DOM, compares it with the previous version using diffing,
//          and updates only the changed parts in the real DOM, which the browser renders.

//                             Start
//                               |
//                               |
//                               V
//                      When we create Components 
//                               |
//                               |
//                               V
//               Components return JSX(looks like HTML)
//                               |
//                               |
//                               V
//                 JSX is converted to JavaScript
//                               |
//                               |   * Babel converts JSX to JavaScript”
//                               |   * React.createElement() is created
//                               |   
//                               V
//                 React creates Virtual DOM (in memory)
//                               |
//                               |
//                               V
//                 On update --> new Virtual DOM is created
//                               |
//                               |
//                               V
//         React compares new Virtual DOM with old Virtual DOM (diffing)
//                               |
//                               |
//                               V
//          Update only changed parts of Real DOM in browser
//                               |
//                               |
//                               V
//                            UI updated
//                               |
//                               |
//                               V
//             Browser displays the updated UI (which is rendered as real DOM elements)








//                         JSX (Rules & Syntax)
//                         -------------------
// a) Must have one parent element
//   Eg:-
// 	return (
//           <div>
//    		    <h1>Hello</h1>
//     		    <p>World</p>
//  	     </div>
//           )



// b) Use className instead of class

//     Eg:-
//        <div className="box"></div>



// c) Close all tags
//     Eg:-
//      <img src="img.png" />


// d) JavaScript inside {}

//     Eg:-
//           const name = "Shanu";
//            <h1>Hello {name}</h1>

// e)  Use camelCase for attributes
//     Eg:-
//       <button onClick={clickMe}>

// f)  Inline styles use object
//     Eg:-
//         <h1 style={{ color: "red" }}>


// g) Comments must be inside curly brackets{}

// Eg:-
//        {/* This is a JSX comment */}



// JSX rules include having a single parent element, using className instead of class, closing all tags, and writing JavaScript inside curly braces {}.



//                      Embedding JavaScript in JSX
//                      ---------------------------
// * JavaScript expressions can be used inside JSX using {}
//    The embedded JavaScript expression must be wrapped in curly braces.


//   const name = "Shanu";

//         Eg:-
//             <h1>Hello {name}</h1>

//        We can use:
//           * Variables
//           * Expressions
//           * Function calls
//           * Ternary operators


// What we cannot use inside jsx?
// * We cannot use statements like if, for, while directly inside JSX.
//       - Because JSX expects expressions (which return a value), not statements





//                       JSX Fragments
//                       -------------

// * Fragments are used to avoid extra div
// * We used it when we don't need wrapper.
// * when we don't need 
//               * CSSstyling 
//               * Borders / spacing    
//               * Flex / Grid layout 

//  With extra div
//          return (
//            <div>
//              <h1>Hello</h1>
//              <p>World</p>                  // When we inspect,div is visible
//            </div>
//          )

//  With Fragment
//           return (
//             <>
//               <h1>Hello</h1>
//               <p>World</p>
//            </>
//           )                                //     - It help to avoid unnecessary DOM nodes
                                              //     - invisible when inspect


// Avoid div hell.
// Fragments are keeping valid HTML structure. 
//              Eg:-
//                 <>
//                  <ul>
//                   <li>Item 1</li>
//                   <li>Item 2</li>
//                 </ul>
//               </>


//                    JSX Behind the scene
//                    --------------------
 
//                          write JSX
//                               |
//                               |
//                               V
//                         <h1>Hello</h1>
//                               |
//                               |   // Browser doesnt understand JSX. It only understands JavaScript.
//                               V
//                       Babel converts it
//                               |
//                               |    //  So It is converted into regular JavaScript using tools like Babel before running in the browser.
//                               V
//                       React.createElement(...)
//                               |     // React.createElement("h1", null, "Hello")
//                               |
//                               V
//                     React makes object
//                         (Virtual DOM)
//                               |
//                               |
//                               V
//                  React compares changes
//                          (Diffing)
//                               |
//                               |
//                               V
//                      Browser updates UI



