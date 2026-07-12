//                Nested Routes
//                ------------

// It is Routes inside Routes
// Use Outlet only in parent component.
// Index also uses Outlet



{/* 
    <Route path="/dashboard" element={<Dashboard />}>                 //  shows Dashboard
       <Route path="profile" element={<Profile />} />                 // should show Profile inside Dashboard
       <Route path="settings" element={<Settings />} />               // should show Settings inside Dashboard
    </Route>

*/}



// Eg:-

// In App.jsx,
// import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Dashboard from "./Dashboard";
// import Profile from "./Profile";
// import Settings from "./Settings";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       <Route path="/dashboard" element={<Dashboard />}>
//         <Route path="profile" element={<Profile />} />
//         <Route path="settings" element={<Settings />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;




// In Dashboard.jsx,

//   import {Outlet} from 'react-router-dom'

//   function Dashboard(){
//     return(
//         <div>
//             <h1>DashBoard</h1>
//             <Outlet/>                       // Place where child route renders.
//         </div>                                         // Without Outlet,profile wont show.
//     )
//   }

//   export default Dashboard;



// Outlet always goes inside the parent component() not in App.jsx).





// In Profile.jsx,

// function Profile() {
//   return <h2>Profile Page</h2>;
// }

// export default Profile;



// In Settings.jsx,

// function Settings() {
//   return <h2>Settings Page</h2>;
// }

// export default Settings;










