// A Synthetic Event is React's wrapper around real browser events.




//  Events:- user action is event
//               * click
//               * typing
//               * submit etc

//  Raw events(normal event):- This is the original event created by Browser.
//              Eg:-
//                 In JavaScript:-
//                       button.addEventListener('click',function(event){
//                         console.log(event)
//                       })

//                * Raw browser event has different behaviour in different browsers.
//                        - So,developers had to write extra codes.
//                        - To avoid this,use synthetic events in react.

//  Synthetic event:- It a cross-browser wrapper around the native event object
//             React creates its own wrapped version of event.
//                      * Synthetic event is made from raw event.

//       * React does not directly use browser events like click, input, etc internally.
//                Instead, it gives a React-controlled event system(wrap them into Synthetic)

//            Eg:-
//                function handleClick(event){
//                  console.log(event)
//                }

//                <button onClick= {handleClick}> Click </button>


// React uses synthetic events because, raw browser event(normally) behaves different in different browser.
//                 * React solves this by:-
//                      - making event consitent everywhere
//                      - improving performance
//                      - adding extra features

// Synthetic event looks like normal event,but it is react-controlled:-

// event.type        :- "click"
// event.target      :-  button element
// event.preventDefault()
// event.stopPropagation() 


//                      when we click a button
//                               |
//                               |
//                               V
//                    Browser creates a real event
//                               |  Eg:- Mouse event
//                               |
//                               V
//                      React catches that event
//                               |
//                               |
//                               V
//                  React wrap it( native event) into synthetic event
//                   
//                               |
//                               |
//                               V
//              Our function recieves  synthetic event
//                          Eg:-      
//                               function handleClick(event){          //  Eg:-here handleClick recieves synthetic event 
//                                 console.log(event)
//                               }

//                              <button onClick= {handleClick}> Click </button>



//  Features:-
//    1) Cross browser consistency:- Same behaviour in chrome,safari,firefox etc
//    2)Event Pooling: In older React versions, event objects were reused for performance.
//                 In modern React, this behavior is removed.
//    3)Same API as browser event
//                * We can still use:-
//                      - event.preventDefault()
//                      - event.target.value



//      Feature                  Raw Event                Synthetic Event 
//     --------                  ---------                --------------- 
//    Created by                  Browser                     React           
//    Consistency                Different                Same everywhere 
//       Usage                   Vanilla JS                   React           
//      Control                   Browser                     React           
//        Eg:-               addEventListener                onClick         
