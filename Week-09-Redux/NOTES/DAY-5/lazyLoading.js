//                     Lazy Loading with Redux
//                     -----------------------


// Lazy loading means loading components only when needed,instead of loading everything at the start.
//    *   A part of app  wont load initially,only loads when it required.

// Without lazy loading:
//   * Entire app loads at once (slower performance)

// With lazy loading:
//   * Only required component loads (faster performance)



// Eg:-
//      const Dashboard = React.lazy(() => import('./Dashboard'));   // React.lazy():-Used to load components dynamically

//      <Suspense fallback={<p>Loading...</p>}>     // Suspense:-  Shows fallback UI while loading component
//         <Dashboard />
//      </Suspense>


// Benefits:
// * Faster initial load
// * Better performance
// * Smaller bundle size
// * Improved user experience


// In Redux apps:
// * Load only required Redux slices/pages
// * Improve scalability