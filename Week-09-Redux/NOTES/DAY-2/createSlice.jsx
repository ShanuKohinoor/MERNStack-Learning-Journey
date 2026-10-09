//                              createSlice()
//                              -------------


// It is a function from Redux Toolkit which helps to 
//           * Create state  
//           * Create reducers
//           * Automatically create action creators



//   Normally Redux needs 3 things separately:

//            * State (data)
//            * Reducer (logic to change data)
//            * Actions (messages like 'increment', 'decrement')
//      So we have to write them separately and connect them.


//   But with createSlice(),
//                createSlice groups:
//                      * State
//                      * Reducer Logic (case reducers)
//                      * Action Creators
//                               for a specific feature.
///            * createSlice() is a shortcut that creates Redux state and logic in one box.

//  Eg:- 
// BASIC STRUCTURE
// ---------------
//  import { createSlice } from "@reduxjs/toolkit";
    //  const counterSlice = createSlice({
    //    name: 'counter',
    //    initialState: {},                     // Initial State is the default state value used when Redux initializes the store for the first time.
    //    reducers: {}
    //  })





//  Inside createSlice,each function is called a case Reducer.
//     Redux Toolkit takes all these case reducers and automatically creates:-
//       * A complete reducer
//       * Action creators

//      Eg:- When we write,
//               const counterSlice = createSlice({
//                 name:'counter',
//                 initialState: {count:0},           
//                 reducers: {
//                   increment(state){
//                     state.count++
//                   },
//                   decrement(state){
//                    state.count--
//                   }
//                 }
//               })

//            Redux Toolkit internally creates,
//                         counterSlice
//                             │
//                             ├── actions
//                             │      ├── increment()
//                             │      └── decrement()
//                             │
//                             └── reducer