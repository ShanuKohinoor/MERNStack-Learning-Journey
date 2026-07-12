//                      UseRef
//                      -----



// It is used to :-
//    * Access DOM element directly.
//    * Store values  that do not trigger re-render




// comparison of useState and useRef:-

// useState:-use when we want screen UI to change,
//               const [count,setCount] = useState(0)
//           * when we change count,
//                setCount(count + 1);     
//                   - React will re run and update the screen
//                   - So,UI changes


// useRef:- use whhen we want to store a value,but dont want to change the screen.
//              const countRef = useRef(0)
//           * when we change,
//               countRef.current++
//                   - React will not re-render, not update UI
//                   - Only value changes silently in the background




// It returns an object.
// value is stored inside .current.
// special use of useRef is it store previous value