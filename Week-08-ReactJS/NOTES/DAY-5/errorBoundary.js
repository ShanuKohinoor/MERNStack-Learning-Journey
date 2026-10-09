//                          Error Boundary
//                          -------------




// It helps to catch error and stops whole app from crashing.


//  Eg:-
//     We have,
//        * Home page 
//        * Navbar 
//        * Profile  (error happens here)

//   Without error boundary, the whole app crashes nothing shows on screen.
//   But with error boundary,
//        * Home page 
//        * Navbar 
//        * Profile  
//            - Error Boundary shows 'Something went wrong'
//            - Instead of full app crash, Only broken part is replaced.