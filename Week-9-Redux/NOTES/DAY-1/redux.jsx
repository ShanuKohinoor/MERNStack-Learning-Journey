//                               REDUX
//                               -----


// Single source of truth.

// Redux is a predictable state management library used to manage global application state in a centralized store and avoid prop drilling.
//    * Predictable
//    * Easy debugging
//    * Organized
//    * Scalable



//                       Flux Architecture
//                       -----------------

//  Redux follow strict architecture called Flux Architecture(which helps to flow data in unidirectional)

//      1. Predictable Flow
//            * we always know how data changes.
//      2. Debugging is easy
//            * we can track each step.
//      3. No confusion
//            * Data moves in one direction only.





//                        Core Concept of Redux
//                        ---------------------

// There are 4 important concepts

//           ------------------------------------------------------------------------------------
//          |                           |                        |                               |
//          |                           |                        |                               |
//          v                           v                        v                               v
//        Store                       Action                  Reducer                         Dispatch


//  1. Store
//   -------
//           * Store in a central container that hold the complete state of application.
//           * That means all data of that application stored here.
//           * So Redux is known as single source of truth.(One central place for all shared data)


// 2. Action
//  --------

//           * It is the plain javascript  object which describes an event or change in the application.
//           * Action only descriibes the state, it doesn't update the state. 

// 3. Reducer
//   --------
//           * It is the function which recieves the current state and an action, and it returns a new updated state

// 4. Dispatch
//   ---------
//           * It is the function used to send an action to the Redux store.


//                        Redux data Flow
//                        ---------------

//                        User clicks button
//                               |
//                               |
//                               v
//                   Component dispatches action
//                               |
//                               |
//                               v
//               Reducer processes action and update state
//                               |
//                               |
//                               v
//                        Store gets new state
//                               |
//                               |
//                               v
//                    UI re-renders automatically



//              Redux follows a unidirectional data flow.
//                               |
//                               |
//                               v
//              When a user interacts with the UI, the component
//                dispatches an action describing what happened. 
//                               |
//                               |
//                               v
//               The reducer receives the action and updates the state in the store. 
//             Once the store updates, the UI automatically re-renders with the new data.
