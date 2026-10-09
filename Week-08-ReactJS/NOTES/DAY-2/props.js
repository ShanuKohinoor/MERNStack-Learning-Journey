//                            Props (Passing Data)
//                            ---------*---------


//  Props are inputs we give to a components.
//  They make components dynamic and reusable.
//               * Without prop, components are fixed.
//  Its like function arguments.
//  Props are inputs used to pass data from a parent component to a child component in React.
//  They are immutable.
//          * Because they are read-only data passed from parent to child, and a child component should not modify the parent's data.
//                     - read-only because React uses one way data flow(only parent to child,not child to parent)
//          * If we want to change data ,we can use useState or ask parent to update data(by passing a function from parent).
//  Used for communication between components.


//            function Greeting(prop) {
//                return <h1> Hello, {props.name} </h1>
//            }

//            <Greeting name = 'Shanu'/>
//            <Greeting name = 'Sara' />

//                       * name is passed as prop and can change for each component.

// Props can be :-
//            * String
//            * Number
//            * Array
//            * Object 
//            * Function









//                         Props Destructuring
//                         ---------*---------

//  * Instead of props.name, we can extract directly using destructuring.
//  * Destructuring helps us to write cleaner and shorter code by avoiding repeated use of props. 
//  * It makes the code more readable and easier to maintain.


//      Without Destructuring:-
//                  function StudentCard( props) {
//                       return (
//                          <div>
//                            <h2>{props.name}</h2>
//                            <p>{props.course}</p>
//                            <p>{props.batch}</p>
//                           </div>
//                       );
//                  }

//      With Destructuring:-
//                  function StudentCard({ name, course, batch }) {
//                       return (
//                          <div>
//                            <h2>{name}</h2>
//                            <p>{course}</p>
//                            <p>{batch}</p>
//                           </div>
//                       );
//                  }




//                           Children prop
//                           ------*-------

//  children is used to pass content inside a component.
//            * Whatever we write between component tags is called children.


//                function Card({children}){
//                      return <div className="card" >{children}</div>
//                 
//                  <Card>
//                       <h2>Title </h2>
//                       <p>This is inside Card </p>
//                  </Card>                                              //Everthing inside Card is Children
//                }



//   Useful for layouts, cards, modals, buttons, etc.