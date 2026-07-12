//                         Protected Routes
//                         ----------------


// It is a route where only logged-in users can access. Like,




// We can protect route by creating protectec route.

// import {Navigate,Outlet} from 'react-router-dom'


//    function ProtectedRoute(){
//         const isLoggedIn = false;
//         return isLoggedIn ? <Outlet/> : <Navigate to = '/' />
//    }                                             //<Outlet /> means here, If logged in show child pages. Else redirect to homepage.
   
//    export default ProtectedRoute







//    In App.jsx,

// import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Dashboard from "./Dashboard";
// import Profile from "./Profile";
// import ProtectedRoute from "./ProtectedRoute";

//      function App(){
//         return(
//             <Routes>
//                 <Route path='/'  element={<Home/>} />
   
                
//                  {/* protected Routes */}
//                 <Route element={<ProtectedRoute/>}>
//                     <Route path='/dashboard'  element={<Dashboard/>}>
//                        <Route path= 'profile' element={<Profile/>}/>
//                     </Route>

//                 </Route>
//             </Routes>
//         )
//      }

//     export default App



//     * Home:- everyone can access(It is not protected route). But,
//     * dashboard:- Only logged-in users can access(protected route).
//     * profile:- Only logged-in users can access(protected route).





//                         User Request
//                              | 
//                              |
//                              V   
//                        ProtectedRoute
//                         |           |
//                         |           |
//                         V           V
//                      Logged?     Not a user or not loggedIn
//                         |           |
//                         |           |
//                         V           V
//                       Outlet   Navigate("/")
//                         | 
//                         |
//                         V   
//                 Dashboard (always show)                    // Dashboard is parent
//                         |                                      // Parent layout (always renders if allowed)
//                         |
//                         V   
//                      Outlet                              //  Placeholder where child routes appear
//                         |                                   
//                         |
//                         V   
//              Profile (only if, /dashboard/profile)        // Child inside parent Dashboard
                                                                 //  Child route (renders only when URL matches)