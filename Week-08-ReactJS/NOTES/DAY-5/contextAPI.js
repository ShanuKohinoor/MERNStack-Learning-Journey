//                               ContextAPI
//                               ----------


//  To overcome prop drilling, contextAPI is used.
//  Instead of passing data from parent --> child1--> child2 ---> child3, contextAPI helps to share datadirectly to the corresponding component.
//         * No need to pass through middle component.
//             - Parent --> Context --> Child3 (direct access)

// Definition:- Context API is used to share data globally across components without passing props through every level.
//     * Context does not store data, it only shares data.
//     * Actual data is still managed using useState or other state management.


// Context works internally by creating a data channel.
//            - Provider --> shares data
//            - Consumer --> receives data



//                                  There are 3 main steps:-
//            _______________________________|______________________________
//           |                               |                              |
//           |                               |                              |
//           V                               v                              V
//   1) Create context               2) Provide context             3) Consume context



// 1) Create context
//    --------------

// * React create a context object.
// * This object will hold shared data.

// Eg:-
//        import {createContext} from 'react'
//        const myContext = createContext()


// 2) Provide context
//    ---------------

// * Data is available to all child components
// * Only components inside provider can access it.
// Eg:-
//            <myContext.Provider value={data} >
//               <App/>
//            </ myContext.Provider >

// 3) Consume context
//    ---------------

// React finds nearestprovider.
// And returns its value.

// Eg:- 
// import { useContext } from "react";
// const value = useContext(myContext)









// Use case of context:-
// --------------------

//   * Authentication(user login)
//   * Theme(dark/light mode)
//   * Language settings
//   * Global app state


//  Advantages:-
//  -----------
//        * No prop drilling
//        * Clean code
//        * Easy access

//  Disadvantages :-
//  -------------
//        * Too much usage will leads to performance issues
//        * Harder to debug if overused




// Working flow 

//                       App
//                        |
//                        |
//                        v
//                  Create context
//                        |
//                        |
//                        v
//                 ParentComponent(create state)
//                        |
//                        |
//                        v
//          Provider shares Value (which usually contains state + functions)
//                        |
//                        |
//                        v
//             ChildComponent (reads context or consume state)
//                        |
//                        |
//                        v
//                When user clicks button
//                        |
//                        |
//                        v
//             State updates in Parent
//                        |
//                        |
//                        v
//          Provider value changes (new reference)         // in javascript object:- depends refenrence not content
//                        |
//                        |
//                        v
//         React compares old vs new value (reference check)
//                        |
//                        |
//                        v
//                React finds change
//                        |
//                        |
//                        v
//           All consuming components re-render