//                               useState
//                               --------
//  useState helps to 
//       * remember value
//       * re-render UI when value changes

//   Syntax:-
//         const [count,setCount] = useState(initialValue)

                        // count= current count
                        // setCount = function to update value
                        // initialValue = starting value



//                      Initially count = 0    
//                               |
//                               |
//                               V
//                       write useState
//                               |
//                               |
//                               V
//                      when click button 
//                               |
//                               |  setCount(count+1)    
//                               |
//                               V
//                    React updates count value
//                               |
//                               |
//                               V
//                     component re-renders
//                               |
//                               |
//                               V
//                    UI update automatically              


// If  dont use useState,
//   * Value will not be remembered by React.
//   * UI will not update
//   * Component behaves like normal JavaScript function. So React cant track the values.


//  when write setCount:-
//     React doesnot reload page, instead only updatechanged part. This is re-render