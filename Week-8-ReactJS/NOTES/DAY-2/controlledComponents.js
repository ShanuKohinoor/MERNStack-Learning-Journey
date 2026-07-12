//                   Controlled Components
//                   ---------------------


// It is an input element whose value is controlled by React state.


// In normal JavaScript, input value controlled by browser.



//                       When we type value
//                               |  
//                               |   <input type="text" />
//                               |
//                               V
//                          Value changes
//                               |
//                               |
//                               V
//                 Browser stores value internally
//                               |
//                               |
//                               V
//                      React does not know



// But in case of controlled component,

    // import { useState } from "react";     

    // function ReactApp(){
    //   let [name,setName] = useState('')

    //   return(
    //     <input
    //       type="text"
    //       value={name}
    //       onChange={(e)=> setName(e.target.value)}
    //     />
    //   )
    // }

//                       When we type value
//                               |  
//                               |   <input type="text"  value={name} onChange={(e)=> setName(e.target.value)}/>
//                               |
//                               V
//                       onChange event triggers
//                               |   
//                               |
//                               V
//                      setName updates value 
//                               |   
//                               |
//                               V
//                      React re-renders UI
//                               |
//                               |
//                               V
//                    Input value gets updated from state



//       That means,In controlled components, input value is controlled by React state, not the DOM.


// If we write like this,
//            <input value={name}/>         //  then input becomes read only. Because we dont update the state


// input value is controlled by React state using value and onChange.




// Use of controlled components:-

//  * Easy form handling
//  * Validation become simple
//  * React always knows input value
//  * Better control of UI