

//                           use Navigate
//                           ------------


// It is used to move user to another page using JS

//    import { useNavigate } from "react-router-dom";

//    function Home(){
//     const navigate = useNavigate();

//     return(
//         <button onClick={()=>navigate('/about')}>
//             Go to About
//         </button>
//     )
//    }



// Use:- 
//       After login -->redirect
//       After submit --> go to dashboard






//                Difference between useNavigate and <Navigate/>
//                ----------------------------------------------


// useNavigate() is imperative navigation.
// -------------
//        That means,
//             - we give commands and control the process manually.
//             - we are commanding React to move to another page
//             - like, when an event happens,go to another page.

//            Eg:-
//                * Button clicks
//                * Form Submission
//                * API Response
//                * Login Success

//  Eg:-
// import { useEffect } from "react"
// import { useNavigate, Outlet } from "react-router-dom"

// export function Protected() {
//   const isLoggedIn = false
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate("/login")
//     }
//   }, [])

//   return isLoggedIn ? <Outlet /> : null
// }




// <Navigate/> is declarative navigation.
// -----------
//       That means,
//             - We declare the result we want.
//             - React Router handles redirection automatically.
//             - Used based on conditions.

//         * Used inside JSX     
//         * Used in protected Routes
//         * React Router handles it automatically

//  Eg:-
// import { Navigate, Outlet } from "react-router-dom"

// export function Protected() {
//   const isLoggedIn = localStorage.getItem("isLoggedIn")

//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
// }






// Final Difference
// ----------------

// useNavigate() -->Imperative (manual command)
// // <Navigate/> --> Declarative (conditional redirect)