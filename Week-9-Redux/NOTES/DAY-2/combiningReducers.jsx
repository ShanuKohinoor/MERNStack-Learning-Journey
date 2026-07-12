//                         Combining Reducers
//                         ------------------


// It is joining of multiple slices (reducers) into one Redux store.

// It works by redux  Toolkit uses confgureStore() 

// Eg:- 
//      import { configureStore } from "@reduxjs/toolkit";
//      import counterReducer from "./counterSlice";
//      import userReducer from "./userSlice";

//      const store = configureStore({
//        reducer:{
//         counter:counterReducer,               // manages counter state
//         user: userReducer                     // manages user state
//       }
//     })

//  Final result like:- 
//         {
//            counter: { value: 0 },
//            user: { name: "", isLoggedIn: false }
//         }                                      // merging all slice reducers into a global store