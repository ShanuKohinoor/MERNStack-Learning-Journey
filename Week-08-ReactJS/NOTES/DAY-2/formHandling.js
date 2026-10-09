//                       FORM HANDLING
//                       -------------


// which means getting user input, storing it, and using it in React.

// Form handling in React means controlling form inputs using state and handling submission using onSubmit event.





//  In normal HTML,

// <form>
//   <input type="text" />
//   <button>Submit</button>
// </form>


//                       User types data
//                               |
//                               |
//                               V
//                Browser handles everything
//                               |
//                               |
//                               V
//                   Page reloads on submit 





// In React form Handling,

//  use:-
//      * useState
//      * value
//      * onChange
//      * onSubmit




// import { useState } from "react";

// function App() {
//   let [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();                          // stops page reload
//     console.log("Submitted name:", name);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
      
//       <input
//         type="text"
//         placeholder="Enter name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;




//                        WHEN TYPE INPUT
//                               |
//                               |
//                               V
//                      onChange triggers
//                               |
//                               |
//                               V
//                    setName() updates state
//                               |
//                               |
//                               V
//                        React re-renders
//                               |
//                               |
//                               V
//                   Input shows updated value





//                       WHEN CLICK SUBMIT
//                               |
//                               | (Eg:- user clicks login)
//                               V
//                          Form submits
//                               |
//                               |
//                               V
//                        handleSubmit() runs
//                               |
//                               |
//                               V
//                 e.preventDefault() stops refresh
//                               |
//                               |
//                               V
//                     Get value from state
//                             (we get username + password)