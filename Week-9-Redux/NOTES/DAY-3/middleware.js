//                               Middleware
//                               ----------



// It is the middle layer that runs between dispatch and reducer.


// Without middleware,

//              Component
//                 |    when user clicks button
//                 |
//                 v
//             dispatch(action)
//                 |
//                 |   Redux recieves message/action
//                 |   dispatch({type: 'increment'})
//                 |
//                 v
//              Reducer
//                 |
//                 |
//                 |     Reducer updates state
//                 |
//                 v
//            Store Updates

// Works properly without middleware. Because Redux handles synchronous actions only,but when there is
//      any asynchronous actions like API calls,fetch users from server,login request,payment request etc,
//      Redux can't handle async operations alone.So,we need middleware to solve this


// With middleware,
//            Component
//                 |
//                 |
//                 v
//           dispatch(action)
//                 |
//                 |
//                 v
//             Middleware
//                 |
//                 |
//                 v
//               Reducer
//                 |
//                 |
//                 v
//            Store updates




// Middleware can:-
//   * handle API calls
//   * delay actions
//   * log actions
//   * check authentication
//   * modify actions
//   * stop actions
//   * sideEffects(which is anything normal outside state update)


// Middleware cannot replace reducers.
// Reducers should contain only predictable and pure logic.
//          and is synchronous code

// * If reducers did API calls, which is unpredictable,difficult in debugging, and side effects occur.
// *   So,Middleware handle asynchronous operations like, it can call the API, wait for the response, and dispatch another action to the reducer.// *    Then reducer update state

//      Eg:- If code is like(Using Middleware):-

//           dispatch(fetchUsers())

//         * Here Middleware can 
//             - call API 
//             - wait for response
//             - then send data to the reducer










//                                 Redux Thunk
//                                 -----------

// Redux Thunk is a middleware that allows Redux to handle functions (async logic) instead of only plain action objects.
// It allows us to write async logic (like API calls) inside Redux before sending data to the reducer.