//                                 Multiple Slices
//                                ----------------

// A slice is a small part of Redux store that manages one feature.
// Multiple slices are dividing Redux store into different parts based on features.
// Eg:- Instead of keeping everything in a single place,split Redux into different parts,like:-
//             * counter data --> counter slice
//                     - value = 0
//             * user login data --> user slice
//                     - user: null
//                     - isLoggedIn: false
//             * cart data --> cart slice
//                     - items: []


// Instead on single messy store.js,divide into:-
//         authSlice.js  --> login/logout/user
//         taskSlice.js   --> todo tasks
//         cartSlice.js  --> shopping cart
//         productSlice.js --> product list

// 
// Each slices has its own:-
//       * initial state
//       * reducers
//       * actions
//  -But all slices live inside one store.
//     Eg:-           
//           STORE (one)
//             ├── authSlice (login state)
//             ├── taskSlice (task state)
//             ├── cartSlice (cart state)
//  -Each slice manages its own part of state

// Advantage:-
// * Easier to manage
// * Easy debugging
// * Team friendly
// * Scalable apps

// To combine these splitted slices using configureStore()

//   Eg:-
//         import { configureStore } from "@reduxjs/toolkit";
//         import authReducer from "./authSlice";
//         import taskReducer from "./taskSlice";

//       export const store = configureStore({
//         reducer:{
//            auth: authReducer,
//            tasks: taskReducer
//         }
//       })

