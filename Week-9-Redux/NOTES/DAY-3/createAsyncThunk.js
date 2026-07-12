//                          createAsyncThunk()
//                          ------------------


// It is a Redux Toolkit function used to handle API calls and async operations easily.
//Instead of manually writing thunk code,Redux Toolkit willl give readyamde async system which automatically handles,
//      * API calls
//      * Loading state
//      * Success state
//      * Error state
          

// Manual Redux Thunk requires:
//  * writing async logic
//  * writing loading actions
//  * writing success actions
//  * writing error actions

// But with createAsyncThunk(),
//     Redux Toolkit automatically creates:
//       * pending
//       * fulfilled
//       * rejected
// So developeronly needs to write less code 


// Pending:- which means the API request has started and is waiting for response.
// Fulfilled :- which means API request completed successfully and data was received.
// Rejected :- which means API request failed.

//       dispatch(fetchUsers)
//                 |
//                 |
//                 v
//              pending
//                 |
//                 |
//                 v
//         API call happens
//                 |
//                 |
//                 v
//       Success ? fulfilled : rejected


// Eg:- 
//     {
//        users: [],
//        loading: false,
//        error: null
//     }

//      During pending:-
//        loading= true

//     During fulfilled:-
//        loading = false
//        users = fetchData

//     During rejected:-
//        loading = false
//         error = 'API failed'


// createAsyncThunk() automatically creates these action types and Reducers listen to them and update state


//  Eg:-
//  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//  import axios from "axios";