//                        Loading & Error State Management
//                        -------------------------------
// When we click a button to call API, there should be a server response and will recieve data if success 
//        or an  error if it failed.


//  So,UI must know, whether API is, Loading / API requested successful / error occurs.

// So, we need three states for this to identify. They are:-
//        1. data (actual result)
//        2. loading (waiting state)
//        3. error (problem state)


// Basic Redux structure is:-

//   {
//       data: [],
//       loading: false,
//       error: null
//   }


//                            When API starts(pending)
//                                      |
//                                      |      loading : true
//                                      |      error : null
//                                      |
//                                      v
//                            When API succeeds(fulfilled)
//                                      |
//                                      |     loading : false
//                                      |     data : responseData
//                                      |
//                                      v
//                            When API failed(rejected)
//                                      |
//                                      |______ loading : false
//                                              error : 'Something went wrong'








//                                  Redux flow
//                                  ----------

//                              User Clicks Button
//                                    |
//                                    |
//                                    v
//                          dispatch (createAsyncThunk action)
//                                    |
//                                    |
//                                    v
//                        Redux Toolkit(internally uses Thunk Middleware)
//                                    |
//                                    |   Redux Toolkit Automatically creates pending ,fulffiled , 
//                                    |       rejected from createAsyncThunk()
//                                    |
//                                    v
//                           API call happens(axios/fetch inside async function)
//                                    |
//                                    |
//                                    v
//                        Automatically dispatches:
//                                    |
//                                    |    - pending
//                                    |    - fulfilled or rejected
//                                    |
//                                    v
//                        Reducer updates State
//                                      |
//                                      |______ loading /data / error
