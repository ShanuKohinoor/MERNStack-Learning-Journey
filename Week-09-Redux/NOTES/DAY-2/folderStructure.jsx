//                                Folder Structure
//                                ----------------

// It is the way we organize Redux files in a project so everything is clean, scalable, and easy to manage.
// Each feature has its own folder and slice file.

// src/
//   redux/
//     ├── store.js                         // Combines all reducers
//     |
//     ├── Features
//     |     ├── counter/                         
//     |     |     ├── counterSlice.js          // Handle counter logic only 
//     |     |
//     |     ├── user/
//     |     |     ├── userSlice.js               // Hnadle login/user logic only
//     |     |
//     |     ├── cart/
//     |           ├── cartSlice.js               // Handle cart logic only
//     │
//     ├── components/
//     ├── pages/
//     └── App.js

// Folder structure in Redux means organizing code in a clean, feature-based way so each slice and logic is easy to manage.



// 1.  In store.js,
//             import { configureStore } from "@reduxjs/toolkit";
//             import authReducer from "../features/auth/authSlice";
//             import taskReducer from "../features/tasks/taskSlice";

//           export const store = configureStore({
//             reducer: {
//                auth: authReducer,
//                 tasks: taskReducer
//             }
//           });
//          * This is the central Redux store

// 2. Features:- most important folder.
//     Each feature has its own folder
//     Eg:-
//         * auth feature
//            auth/
//             ├── authSlice.js

//        * task feature
//            tasks/
//             ├── taskSlice.js

//        * cart feature
//             cart/
//             ├── cartSlice.js




// Use:-
// easy to scale
// easy to maintain
// easy teamwork
// clean code