//              Protected Routes with Redux
//              ---------------------------



// Without protected route anyone can open the dashboard,settings,profile etc even if user is not logged in.
// Main purpose of protected route is ,
//       * if user is logged in--> allow access
//       * if user is not logged in-->redirect to login page


//                     when user tries to open dashboard
//                                    |
//                                    |
//                                    v
//                   Protected Route checks Redux state
//                                    |
//                                    |
//                                    v
//                             Is user logged in?
//                              |              |
//                              |              |
//                              v              v
//                             YES             NO
//                              |              |
//                              |              |
//                              v              v
//                       Show Dashboard   Redirect to Login

// Protected routes are routes that allow access only to authenticated users by checking login state (usually from Redux or context) 
//      and redirecting unauthenticated users to login page.
