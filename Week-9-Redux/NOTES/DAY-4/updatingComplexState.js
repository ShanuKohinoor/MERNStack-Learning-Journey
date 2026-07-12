//                                Updating complex State
//                                ----------------------
// which means safely changing deeply nested Redux state without breaking immutability.


// Redux Rule is:-
//   * Never change existing state directly.
//   * So it ,
//       - Create a new copy
//       - Update the copy
//       - Return the new copy


// When we have data like this, 
// state = {
//   user: {
//     id: 1,
//     name: "Athira",
//     address: {
//       city: "London",
//       PostCode: "LE10001"
//     }
//   }
// }
//       and we want to update city from London to Birmingham, we can't directly update like this,
//            state.user.address.city = "Birmingham".  (Because Redux is immutable(cant directly modify))
//           * So,we use either spread operator or Immer.
// With spread operator, we need to copy everything manually, which is a slow process,
// return {
//   ...state,
//   user: {
//     ...state.user,
//     address: {
//       ...state.user.address,
//       city: "Paris"
//     }
//   }
// }

//  So,we use another methos 'immer',
//            In that we can use,state.user.address.city = "Birmingham". which helps to,
//                * creates a copy
//                * updates only required part
//                * keeps state immutable

// we can write like,

// import { createSlice } from "@reduxjs/toolkit";

//     const initialState = {
//       user:{
//          id: 1,
//          name: 'Athira',
//          address: {
//             city: 'London',
//             postCode: "LE10001"
//          }
//       }
//     }
//     const userSlice = createSlice({
//           name:'user',
//           initialState,
//           reducers: {
//             updateCity(state){
//                state.user.address.city = "Birmingham";
//             }
//           }
//     })

//   export const {updateCity} = userSlice.actions;
//   export default userSlice.reducer;


//  Redux Toolkit appears to allow mutation, 
//      but Immer internally converts those changes into immutable updates.