//                       useCallback with Redux
//                       ----------------------

// useCallback is a React Hook used to memoize (remember) a function.

// Normally, whenever a component re-renders, all functions inside that component are recreated.

// This can cause unnecessary re-renders of child components, if those functions are passed as props.


// useCallback prevents function recreation unless its dependencies change.


// Syntax:-
//                  const memoizedFunction = useCallback(() => {      // function logic
//                     }, [dependencies]);



// Eg:-
//                   const handleClick = useCallback(() => {
//                         console.log('Clicked');
//                   }, []);

// Here, handleClick will be created only once
// and reused on future re-renders because dependencies are empty.

// In Redux applications, useCallback is often used when:
//   * Passing functions to child components
//   * Using React.memo()
//   * Preventing unnecessary child component re-renders

// Benefits:
//   * Stable function reference
//   * Better performance
//   * Fewer unnecessary re-renders