//                                 Reducer 
//                                 -------

// It is the heart of Redux Toolkit.

// It is the function that decides how the state should change when something happen.
//  Eg:- In counter app,
//         when we click button to increase,
//                      |
//                      |
//                      v
//          action: increase the number
//                      |
//                      |
//                      v
//          result will be like increase number 1,2,3.....

// This logic is decided by reducer.

//    Eg 1:- 
//        addItem: (state) => {
//          state.items.push('apple');
//        }

//    Eg 2:- 
//   const counterSlice = createSlice({
//       name: 'counter',
//       initialState: { count: 0 },

//        reducers: {
//           increment: (state)=>{               // increment:- name of the action(button name)
//              state.value +=1                  // state:- current data of the redux
//           }                                   // value +=1:- Logic to change
//        }
//  })

//    Each function inside reducer is a case reducer. Eg:- Increment,decrement
//     * It works internally like,
//           - when we call dispatch(increment()), Redux does
//                Action
//                 |
//                 |
//                 v
//               Reducer
//                 |
//                 |
//                 v
//             State update
//                 |
//                 |
//                 v
//             UI update


//  With the help of immer, keep it like immutable
