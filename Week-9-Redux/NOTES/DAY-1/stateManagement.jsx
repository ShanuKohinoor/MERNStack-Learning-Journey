

//                          State Management
//                          ----------------

// It helps us understand how we store, update, and share data in an application.

// State Management helps us manage application data properly.

// It includes:
//    1. Store data
//    2. Update data
//    3. Share data between components

// Definition:
// State Management is the process of handling and controlling data (state)
// in an application so that the UI always stays in sync with the data.

//                             State Management
//             ************************|************************___
//            |                                                    |
//            |                                                    |
//            v                                                    v
//         Local State                                        Global State
//          (useState)                                        (Redux / Context API)

//                                Local State
//                                -----------
// Managing data inside a single component.

// Example:
// const [count, setCount] = useState(0)

// Used when data is not needed by other components.

//                                Global State
//                                ------------
// Managing shared data across multiple components.

// Used to avoid prop drilling.

// Redux / Context API helps in managing global state.

// Examples:
//    * Logged-in user
//    * Cart items
//    * Theme











//                           Problems with Prop Drilling
//                           ----------*----------------

// 1.Unnecessary code
//      * we have to write unnecassery code again and again like,
//             - prop.user
//             - prop.user in every step


// 2. Hard to Maintain
//     * If structure changes, should update all prop manually

// 3. Components Become Messy
// 4. Debugging Becomes Hard
//     * we dont know,where it come from,where it need etc

// 5.Not scalable












// Prop drilling is when we keep passing data through multiple components that don't need it,
//          just to reach the component that actually needs it.
//     * In large apps, this makes the code messy and difficult to maintain.
//     * That's why we use Context API or Redux to manage shared data.

//         Context API is a built-in React feature used to manage global state and avoid prop drilling,
//                 but it is best suited for simpler state management needs.

//         Redux, on the other hand, is a more powerful and scalable state management library used for
//                 complex applications where state needs to be managed in a predictable and structured way.

