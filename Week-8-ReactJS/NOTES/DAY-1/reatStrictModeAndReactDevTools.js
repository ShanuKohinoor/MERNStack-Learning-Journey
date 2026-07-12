//                             React Strict Mode
//                             ----------------


// It is a special wrapper component provided by React helps to find potential problems in our application during development.
// Only runs in development mode,it does not affect production.
// In development mode, React Strict Mode intentionally renders components twice (only for initial render and certain lifecycle effects).
// Helps detect side effects, deprecated code, and accidental mutations early.

//     * Detect unsafe lifecycle methods.
//     * Helps in finding unexpected side effects.
//     * Highlights bugs before production.
//     * Helps to catch accidental mutation.



//      Wrap our root component ( <App />) inside <React.StrictMode>.

//            Eg:- 

//       import React from 'react' 
//       import ReactDOM from 'react-dom/client'
//       import App fro './App'


//       ReactDOM.createRoot(document.getElementById('root')).render(
//           <React.StrictMode>
//              <App/>
//           </React.StrictMode>
//       )













//                                ReactDevTools
//                                -------------

//   It is a browser extension for Chrome, Firefox, and Edge.
//  * Helps to inspect React component hierarchy, props, and state in real-time.
//  * Useful for 
//      - debugging, 
//      - profiling performance, and
//      - understanding component re-renders.


//   Features:-

//    1) Component tree:-
//         * Shows all React components as a tree structure in our app.
//                - Like a family tree
//                - Every component we create (App, StudentCard, Header etc.) is shown as a branch in the tree.

//         * When we click a component, we can see its props,state and hooks.
//             Eg:- If we have <App> --> <Header> -->  <StudentCard>, DevTools shows this hierarchy.

//     2) Inspect Props and State:-
//         * Click a component to view current props and state values.
//              - Props = information passed to a component.
//              - State = information stored inside a component.
//         * Helps to understand why a component rendered in such way.
//              - In DevTools, we can click a component and see exactly what props it received and what state it currently has.
//              - This helps understand why the component looks or behaves a certain way.

//            Eg:-
//                 <StudentCard name="Shanu" batch="8" />

//              when click,studennt card shows,
//                     props: { name: "Shanu", batch: "8" }
//                     state: {}       



//     3) Highlight Updates
//         * Shows which components re-render(updated) when something (state or props) change.
//         * This is useful to see if unnecessary components are re-rendering.
//         * Helps for app faster
//           Eg:-
//                Clicking a button increases a counter --> only the counter component is highlighted, instead of the whole page.

//     4) Profiler
//         * Profiler measures how long each component takes to render..
//         * Shows if some components are slow.
//         * Helps us optimize our app for better performance.

//            Eg:-
//                StudentCard is rendering slowly because of a big image --> Profiler helps us notice it.