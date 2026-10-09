//                      use Effect
//                      ----------

const { useState, useEffect } = require("react");


// useEffect is used to handle sideeffects after render
// useEffect is a React Hook used to run extra work after UI is shown
//  These extra works are called side effects.
//      Side effects like:-
//           * API calls (fetch data from server)
//           * console logging(console.log)
//           * timers (setInterval, setTimeout)
//           * localStorage operations
//           * DOM manipulation (updating document title:-document.title etc)


//  All these works done after UI rendering
//  That means
//     - React only do UI work.
//     - extra works(side effects) will do by 'useEffect'

//  It happens outside Reacts UI rendering.


//                     Components(JS execute) 
//                               |
//                               |
//                               V
//                          JSX is returned
//                               |
//                               |
//                               V
//                          Virtual DOM created
//                               |
//                               |
//                               V
//                    Real DOM updated (UI visible)
//                               | Rendered:-Screen updates
//                               |
//                               |
//                               V
//                        useEffect runs

// React controls when useEffect runs
// But useEffect does not control UI rendering




//      Eg:-
//                  function MyApp(){
//                       useEffect(()=>{
//                          console.log('Component loaded');            
//                       })
//                    return <h1>Hello</h1>
//                 }
                                   // In this 'Hello' display on screen first. Then console 'Component loaded' appears.


