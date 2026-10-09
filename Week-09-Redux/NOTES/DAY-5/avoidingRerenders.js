//               Avoiding Unnecessary Re-renders
//               -------------------------------

// When React runs a component again and updates the UI if needed, it is called a re-render.

// Eg:-React re-renders when,
//             * state changes
//             * props changes
//             * Redux state changes

//      Like:-  
//       function Counter(){
//           const[count,setCount]= useState('')
//            return(
//             <button onClick=()=>setCount(count+1)>{count}</button>
//         )}

//           when count changes,
//                  |
//                  |
//                  v
//           components runs again
//                  |
//                  |
//                  v
//              UI updates
//                  |
//                  |
//                  v
//            This is re-rendering 


// Problem:-
//    Sometimes React re-renders components even when the displayed data has not changed.
//     This is called unnecessary re-rendering.


// Eg:-


// If Parent re-renders, Child also re-renders by default,even if Child data did not change.



// Causes of Unnecessary Re-renders:-
//   1. Parent component re-renders

//             Parent Re-render
//                   |
//                   |
//                   v
//           Child Re-render
//         Even if Child props are same.

//   2. New Function Creation

//        const handleClick = () => {
//          console.log('clicked')
//        }

// Whenever component re-renders, a new function is created.

//              New Function
//                  |
//                  |
//                  v
//        Child thinks prop changed
//                  |
//                  |
//                  v
//            Child re-renders

// 3. New Objects and Arrays

//          const user = {
//             name:'John'
//           }

// If an object or array is created inside the component, a new reference is created on every render.

//              New Object
//                  |
//                  |
//                  v
//          Child thinks prop changed
//                  |
//                  |
//                  v
//         Child re-renders


// How to Avoid Unnecessary Re-renders?

//     1. React.memo():- Prevents child component re-render if props are unchanged.

//     2. useCallback():-Memoizes (remembers) functions. Prevents unnecessary function recreation.

//     3. useMemo():- Memoizes calculated values. Prevents unnecessary recalculations.


// Benefits:-

// * Better performance
// * Faster UI
// * Less work for React
// * Better user experience


