//                        Components
//                        ---------


// They are reusable pieces of UI in React.
// Two types:-
//         1) Functional (functions)
//         2) Class-based  


// Mostly used one is functional. Class-based is older


//                       Syntax and Rules of Components
//                       ------------------------------

//   Syntax:-
//  ---------
//                function Greeting(){
//                  return <h1> Hello World! </h1>
//                }


//  Rules:-
//  -------

//   1) Must start with a capital letter 
//            Eg:-Greeting not greeting.    

//   2) Must return JSX or null.

//   3) Can accept props.
//          * Props(properties) are inputs in a component.
//          * They allow components to be dynamic and reusable.

//              function Greeting({ name }) {
//                 return <h1>Hello, {name}!</h1>;
//              }


//   4) Components Can Be Nested
//          * We can render one component inside another.

//           Eg:-
//              function App() {
//                 return (
//                   <div>
//                     <Greeting name="Shanu" />
//                   </div>
//                 );
//             }


//   5) Components Should Be Reusable
//           * Create a general purpose component instead of copying code.
//           * Eg:- A Button component can be used multiple times with different text and functionality.


//  6) Pure Components
//          * Functional components without side effects is pure components.
//          *  They always render the same output for the same props.
//          *  Helps React re-rendering.


//  7) Component File Organization
//          * Keep each component in its own file inside src/components/ is the best practise.


//                  src/
//                   └── components/
//                     ├── StudentCard.jsx
//                     ├── StudentCard.css
//                     └── Header.jsx

//             * This helps project organized, scalable, and easier to maintain.