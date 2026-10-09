//                     Code Splitting
//                     -------------

// Code splitting means breaking a large JavaScript bundle into smaller chunks.

// Without code splitting:
//     * One large bundle file (slow)

// With code splitting:
//     * Multiple smaller files (faster)


// Eg:-
//   * home.js
//   * dashboard.js
//   * profile.js


// React automatically supports code splitting using React.lazy()


// Eg:-
// const Dashboard = React.lazy(() => import('./Dashboard'));


// Benefits:
// * Faster page load
// * Smaller initial bundle size
// * Better performance
// * Better user experience


// Relation with Lazy Loading:
// Lazy Loading :- when to load
// Code Splitting :- how files are split