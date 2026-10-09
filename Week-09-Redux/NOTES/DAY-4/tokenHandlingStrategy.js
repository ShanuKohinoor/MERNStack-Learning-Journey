//                       Token Handling Strategy
//                       -----------------------


//                       User enter email and password
//                                    |
//                                    |
//                                    v
//                           User clicks Login
//                                    |
//                                    |
//                                    v
//                          Frontend sends request  
//                                    |
//                                    |
//                                    v
//                       Backend checks credentials            
//                                    | Server:-
//                                    |   * Check email in database
//                                    |   * Check password
//                                    v
//                           Success Response (User Data & Token)
//                                    |
//                                    |
//                                    v
//                --------------------------------------------
//                         SAVE DATA IN TWO PLACES   
//                --------------------------------------------
//               Path-1                                  Path-2      
//                 |                                        |
//                 |                                        |
//                 v                                        v
//            Redux store                             localStorage
//             (in-memory)                        (permanent storage)
//                |                                         |
//                |                                         |
//                v                                         v
//            UI updates                          saves for future use
//        (user logged in UI)                      (survives refresh)
//                |                                         |
//                |                                         |
//                v                                         v
//         User is logged in                      Token saved for later use
//                |
//                |
//                v
//   -----------------------------------
//         USER PRESSES F5 (REFRESH)
//   ------------------------------------
//    |                                |
//    |                                |
//    v                                v
// REDUX STORE                    localStorage
// (will clear)                 (will have data)
//    |                                |
//    |                                |
//    v                                v
// State lost                     Token found
//    |                                |
//    |                                |  
//    |                                v
//    |                            Verify Token
//    |                                |
//    |                                |
//    V                                v
// No user info                 Restore session
// No Token                   * Dispatch to Redux
//    |                                |
//    |                                |
//    v                                v
// User logged out              Redux rebuilt
//                                    |
//                                    |
//                                    v
//                               UI updates
//                                    |
//                                    |
//                                    v
//                          User still logged in
                    
//  -----------------------------------------------------------------------
//    When we use both Redux store and localstorage together to store data
//  -----------------------------------------------------------------------
//                          Redux & localStorage 
//                                    |
//                                    |
//                                    v
//                         Redux --> UI (temporary data(live state))
//                         localStorage --> backup(permanent data)
//                                    |
//                                    |
//                                    v
//                          --------------------
//                                Refresh
//                          --------------------

//                              User press F5
//                                    |
//                                    |
//                                    v
//                            Redux store clears
//                                    |
//                                    |
//                                    v
//                               App reloads
//                                    |
//                                    |
//                                    v
//                            Check local storage
//                                    |
//                                    |
//                                    v
//                             If Token exist, 
//                                    |
//                                    |
//                                    v
//                              Verify Token
//                                    |
//                                    |
//                                    v
//                          Dispatch login action to redux
//                                    |
//                                    |
//                                    v
//                              Redux rebuilt
//                                    |
//                                    |
//                                    v
//                               UI update
//                                    |
//                                    |
//                                    v
//                            User stays logged in