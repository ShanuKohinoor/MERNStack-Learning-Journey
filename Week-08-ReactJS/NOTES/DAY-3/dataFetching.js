//                                 Data Fetching
//                                 -------------



// Getting data from a server(API) and showing it in UI.

//  Eg:- 
//     * Weather data
//     * post
//     * userlist 
//     * products etc




//                            Fetching Data by two ways
//                                        |
//                ------------------------------------------------
//               |                                                |
//               |                                                |
//               v                                                v
//             Fetch                                            Axios
//      (Built in JavaScript)                                 (Library)
//    * No installation need                               * Cleaner Syntax
//    * Comes with Browser                                 * Better errorhandling
//                                                         * Easier to use




// Fetch:-
// -----

//  It is built in JavaScript function used to send a request to a server and get data back.
//  useEffects runs only after component renders.
//  syntax:-
//              useEffect(()=>{...},[])

// fetch doesnt give data immediately. But it returns promise immediately,
//         and actual data comes later after server responds.

// It works in 3 stages:-
//             1. send request
//             2. wait for response
//             3. get final data

//       Eg:- 
            // useEffect(()=>{ 
            //     fetch("https://jsonplaceholder.typicode.com/users")         // send request to server.Data wont ready at this time. But return promise
            //     .then((res)=>res.json())        // server responds to get response object. Converst response to real JSON data.
            //     .then((data)=>console.log(data))  // 
            // },[]) 


//                        Component loads
//                               |
//                               |
//                               V
//                       React renders UI
//                               |
//                               |
//                               V
//                   useEffect runs(after render)
//                               |
//                               |
//                               V
//   fetch sends request(and immediately returns a Promise, while request continues in background.)
//                               |
//                               |
//                               V
//                         server responds
//                               |
//                               |
//                               V
//     convert to JSON(res.json() converts response into JavaScript object and also returns a Promise)
//                               |
//                               |
//                               V
//                          data received
//                               |
//                               |
//                               V
//                         console.log(data)




// Axios:-
// ------

// Axios is a JavaScript library used to make HTTP requests (API calls).

// It is similar to fetch but easier to use and has better features.

// To use axios, we need to install it:
// npm install axios

// Eg:-

// useEffect(() => {
//   axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       console.log(res.data);   // data is directly available
//     });
// }, []);




