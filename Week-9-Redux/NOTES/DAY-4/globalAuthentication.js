//                            Global Authentication flow
//                            --------------------------


// If authentication is needed in multiple places, we would have to pass props through many components.
//   To avoid prop drilling, we store authentication data globally in Redux(Redux global state).

//  In detail:- Authentication data such as the logged-in user, token, and login status is needed 
//    by many components like Navbar, Profile, Dashboard, and Settings. If we keep it inside a single
//    component, we would need to pass props through multiple levels. Redux stores authentication state
//    globally, allowing any component to access it directly without prop drilling.


//                              User logs in
//                                    |
//                                    |
//                                    v
//                        Backend returns user & token
//                                    |
//                                    |
//                                    v
//                      Redux stores auth data globally
//                                    |
//                                    |
//                                    v
//                   Any component can access it directly
//                                    |
//                                    |
//                                    v
//                          Navbar shows user
//                          Dashboard shows content
//                          Profile shows user details