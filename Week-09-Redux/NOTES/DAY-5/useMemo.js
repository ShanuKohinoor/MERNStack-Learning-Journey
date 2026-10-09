//                        useMemo with Redux
//                        ------------------

// useMemo is a React Hook used to memoize (remember) the result of a calculation.

// Normally, when a component re-renders,all calculations inside it run again.

// If a calculation is expensive (filtering, sorting, searching, large loops, etc.),
//    it can affect performance.

// useMemo stores the calculated result and reuses it until its dependencies change.

// Syntax:-
//         const memoizedValue = useMemo(() => {
//           return calculation;
//         }, [dependencies]);


// Eg:-

//              const filteredUsers = useMemo(() => {
//                return users.filter(user => user.active);
//              }, [users]);


// Here,
//      * The filtering runs only when users changes.
//      * On other re-renders, React reuses the previous result.


// Common Use Cases:
//    * Filtering data
//    * Sorting data
//    * Searching data
//    * Complex calculations
//    * Large lists


// Benefits:
//    * Avoids unnecessary recalculations
//    * Improves performance
//    * Reduces work during re-renders