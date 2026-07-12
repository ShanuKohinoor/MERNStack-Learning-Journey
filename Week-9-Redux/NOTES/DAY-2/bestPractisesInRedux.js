


// 1. Keep state minimal
//       *Only stores what we really need
// 2. Use feature-based structure
//       * Dont put everything in Redux
//           - Use Redux for:
//             * login user info
//             * cart items
//             * data used in many places
//          - Use components for:-
//             * button click
//             * input box text
//             * small UI changes
// 3. One slice = one responsibility(feauture)
//             * Each slice should handle only one feature
// 4. Use Redux only for global state
// 5. Use Redux Toolkit (always)
//             * Dont use old Redux style.
// 6. Avoid deeply nested state
// 7. Keep Initial State Clear
//        * Instead of this, initialState: {} use,
//            initialState: {
//               user:null,
//               isLoggedIn:false
//            }

// 8. Don't Put Logic in Components
// 9. Use createSlice Always
// 10. Avoid Direct State Confusion