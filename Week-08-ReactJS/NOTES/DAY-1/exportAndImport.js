//                     Export & Import
//                     ---------------


// In React,components are defined in separate files.
// To use a component in another file, we have to export it from its file and  import where ever we want to use.



//  We can export in two ways:-

//               ----------------------------------------------------
//              |                                                    |
//              |                                                    |
//              v                                                    v
//       Default Export                                        Named Export



//  a) Default Export

//         *  Use when a file exports only one main component.

//  Syntax:-
//       * In Greeting.jsx(component) file:-
//           - Component export from here.

//                function Wishing({name}){
//                  return <h1>Hello, {name} </h1>
//                }

//             export default Wishing;



//       * In App.jsx file:-
//           - Import here.
//           - We can import it with any name.

//               import Wishing from './components/Greeting';

//               function App(){
//                 return(
//                   <div>
//                     < Wishing name = 'Shanu' />
//                   </div>
//                )
//               }


//  b) Named Export

//        * Use when a file exports multiple components or functions.

//   Syntax:-

//      * In components.jsx file

//          export function Greeting({name}){
//            return <h1> Hello, {name}  </h1>
//          }


//          export function Farewell({name}){
//            return <h1> GoodBye,{name} </h1>
//          }



//       * In App.jsx file:-
//           - Import here.
//           - Must use exact exported names with curly braces


//               import { Greeting, Farewell } from './components/components';

//                 function App(){
//                   return(
//                    <div>
//                       <Greeting name= 'Shanu' />
//                       <Farewell name = 'Shanu'/>
//                    </div> 
//                   )
//                 }
