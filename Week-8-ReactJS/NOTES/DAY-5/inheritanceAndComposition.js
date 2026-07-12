//                             Inheritance
//                             -----------


//It means extends something
// One component or class inherits behaviour from another
   
//  Eg:-
        //   class Parent{
        //     sayHello(){
        //         console.log('Hello');
                
        //     }
        //   }
  
        // class Child extends Parent{};




// React doesn't use inheritance becauase:-
//        * UI is not hierarchichal like classes.
//        * Hard to reuse UI.
//        * Creates tight copling.



//                            Composition
//                            -----------

// Means combine things.
// In this build UI by combining components.
//        * React choose composition.





// Eg:-
//    Create Button

//          function Button(){
//             return(
//                 <button>Click me</button>
//             )
//          }


// //         * We can reuse this

//         function App(){
//             return(
//                 <div>
//                     <Button />
//                     <Button />
//                     <Button />
//                 </div>
//             )
//         }







// eg 2:- Create wrapper component

// function Card({ children }) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px" }}>
//       {children}
//     </div>
//   );
// }



// function App() {
//   return (
//     <Card>                        // card wraps content Title and Description
//       <h1>Title</h1>
//       <p>Description</p>
//     </Card>
//   );
// }                       