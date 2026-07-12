//                        customHook
//                        ---------


// It is reusable function.
// Custom hook name must start with 'use'.
// A custom hook is reusable function that contains React logic(hook+ state+ effects)
// Definition:- A custom hook is a reusable function that extracts React logic (state and effects)
//          from components to make UI components clean and reusable.

// without custom hook:-

// const [count, setCount] = useState(0);

// const increment = () => {
//   setCount(count + 1);
// };



// with custom hook:-

// function useCounter() {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);

//   return { count, increment };             //we can use everywhere
// }




// Eg:- 




// function is reused in same file,but
// custom hook is reused in across components.




//            Difference between function inside component and custom hook
//            ------------------------------------------------------------
 


//                          function inside component                       custom hook
//                          -------------------------                       -----------

//   Scope              * Used only inside one component               * Can be used in multiple components
//   Reusability        * Not reusable across components               * Fully reusable
//   Purpose            * Handles single component logic               * Extract reusable logic from UI
//                                                                        - UI --> Component file (Eg:-FetchData.jsx)
//                                                                        - Logic --> Custom Hook file (Eg:-useFetchTodos.js)
//   Code structure     * Written directly inside component file       * Written in separate file (Eg:- useFetchData.js)
//   code location      * Inside component file                        * Separate file (useSomething.js)
//   Eg use case        *                                              *
//                        - Fetch todos in one page                      - API fetching used in multiple pages
//                        - Handle button click logic                    - Authentication (useAuth)
//                        - Simple API calls                             - Forms (useForm)
//                                                                       - Pagination (usePagination)

//  Complexity          * Best for small and simple logic              * Best for medium to large applications