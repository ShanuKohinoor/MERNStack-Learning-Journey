//                               Action Creators
//                               ---------------

// It is a function that creates an action(message) to tell Redux what to do.

// Eg:- a message to do an action is action and function that creates a messsage for that action is action creator

//     const increment = ()=>{
//       return(
//          type: 'counter/increment'
//       )
//     }



//But in React Toolkit it is automatically created..we dont want to create it ,manually
//       in react toolkit it is like this:- 
//               counterSlice.actions.increment

// An action creator returns an action object containing a type and optionally a payload.
//     {
//       type: 'counter/increment',
//       payload: undefined
//     }

// When we call increment(), Redux Toolkit internally creates an action object 
//         and sends it to the reducer through dispatch.


//         when we call increment()
//                 |
//                 |
//                 v
//           Action Creator runs
//                 |
//                 |
//                 v
//           Action Object created
//                 |
//                 |
//                 v
//          dispatch(action)
//                 |
//                 |
//                 v
//         Reducer updates state
//                 |
//                 |
//                 v
//             UI updates