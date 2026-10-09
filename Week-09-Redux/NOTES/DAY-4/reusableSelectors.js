//                         Reusable Selectors
//                         ------------------

// A normal selector is a function that helps us take data from Redux store.
// In React apps,many components needs Redux data like,user info,token,login status etc...
//   * without Reusable selectors, we have to get data like state.auth.user every time.
//   *  with Reusable selectors,
//           - Instead of going inside Redux state every time, we use a selector to get the exact data we need.

// Reusable selectors are functions that help us get specific data from Redux store in a clean and reusable way.
//    * In this,we write function one time inside selector.js file.
//        - so can reuse evrywhere in app many times

//    Eg:-  
//                create selectors.js
//   Inside it we can write like:-

//         export const selectUser = (state) => state.auth.user
//         export const selectToken = (state) => state.auth.token
//         export const selectIsAuthenticated = (state) => state.auth.isAuthenticated

//     and we can use this inside components like:-
//                const user = useSelector(selectUser)


// Advantage:-
//     * Code reuse:- can use in many components
//     * Easy Maintanence:- If Redux structure changes, we only need to update the selector file.
//     * Clean components:- components become simple and easy to read
//     * Less mistakes:- can avoid wrong writing of Redux path in different places


//  Without selector,Components directly depends on structure
//  With selector,Components only ask for data and Redux structure hidden inside selectors





// Derived Selectors
// -----------------
// Mostly selectors helps to get data from Redux.
// Selectors also helps to compute data from Redux state 
//   Eg:- const selectUsers = (state)=> state.users
//       if we want only active users we can filter it,
//          const selectActiveUsers =(state)=> state.users.filter(user=>user.active)
//       * So Redux stores full list and selector creates a new filtered list.
//       * And it runs every time component re-renders.
//       * To avoid this we Redux use Memoization


// Memoization
// -----------

// To avoid rerendering while calculation with selectors,we can use memoization.
// It will remember previous results and recalculate only when data changes.

//  import  {createSelector} from 'reselect'
//   const selectUsers = (state) => state.users

//   export const selectActiveUsers = createSelector(
//      [selectUsers],
//      (users)=>users.filter(user)=>user.active
//  )

//         If the input is same,return old result
//         If input change,recalculate

