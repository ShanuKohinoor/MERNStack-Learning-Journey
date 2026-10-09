//                                 LazyLoading 
//                                 -----------




//  It means,wont load components at first. Load components only when needed.


// Use :-
// * Faster initial page load
// * Better performance
// * Saves bandwidth
// * Better user experience

// * In normal  react loading, 
//       when App loads,all components load immediately.
//                          App starts 
//                               |
//                               |
//                               v
//           All components load (Home, About, Contact, Dashboard...)


//         - And the problem will be,
//                * slow initial load
//                * unnecessary code loaded
//                     - Even if user sees home page load everything


// * But in lazy loading,
//     * When App loads,only important parts load
//           - Other components load later when needed
//           -  with the help of,
//                  * React.lazy() and Suspense
//     * Lazy components must be wrapped inside Suspense
//            - Otherwise React will throw error




//   Eg:- 
// step 1:- import lazy
        // import { lazy } from "react";
        // const About =lazy(()=> import('./About'))

// step 2:- use suspense
// import { Suspense } from "react";

    //    function App(){
    //     return(
    //         <Suspense fallback={<h1>Loading...</h1>}>
    //             <About/>
    //         </Suspense>
    //     )
    //    }        


//                        When user open app
//                               |
//                               |
//                               v
//                          App loads
//                               |
//                               |
//                               v
//                         About dont load
//                               |
//                               |
//                               v
//           About load when we need(When user click About only,it loads)



// React.lazy is used to load components dynamically, and
//      Suspense is used to show fallback UI while the component is loading.






//                How React.lazy works?
//                --------------------


//                           When we write
//                               |
//                               |  const About = lazy(()=> import('./About'))
//                               |
//                               |
//                               |   *  import('./About'):- wont load immediately. Instead it returns a promise(loads later when needed)
//                               |         This is known as CODE SPLITTING
//                               |
//                               |   * Arrow function () => import("./About"). So React can call it later
//                               v
//              When react load lazily,there is a delay in loading
//                               |
//                               |
//                               v
//               For that use Suspense,which acts like a wrapper
//                               |
//                               |
//                               |   <Suspense fallback={<h1>Loading...</h1>}>
//                               |      <About/>
//                               |   </Suspense>
//                               | 
//                               |          * Suspense:- act like a wrapper
//                               |          * fallback:- means loading UI
//                               |          * About:- lazy component
//                               |
//                               |
//                               v
//                          Click About
//                               |
//                               |   Shows loading...
//                               |
//                               v
//                          About loaded
//                               |
//                               |   
//                               v
//                     Shows About component







// Difference between Code splitting And Lazy Loading
// --------------------------------------------------

// Code splitting:- Breaking large JavaScript bundle into smaller files

//        Instaed of main.js (Home + About + Contact + Dashboard),
//             Split like:-
//                * Home.js
//                * About.js
//                * Contact.js
//                * Dashboard.js

// Lazy loading:- Loading a code-split file only when needed












// If we use lazy without Suspense like this:-

//          const About = lazy(() => import("./About"));

//           function App() {
//              return <About />; 
//           }

// React will crash







//                         When we write the code
//                               |
//                               | const About = lazy(() => import("./About"))
//                               |   
//                               v 
//                        VITE DEV SERVER STARTS
//                               |
//                               | (http://localhost:5173)
//                               |   
//                               v
//                       VITE SCANS YOUR CODE
//                               |
//                               |Detects: import("./About") is dynamic
//                               |   
//                               v
//                        CODE SPLITTING HAPPENS
//                               |
//                               | About.js is not added to main.js
//                               |   
//                               | Separate chunk is prepared
//                               |   
//                               v
//                     APP LOADS IN BROWSER
//                               |
//                               | main.js loads only core app
//                               |   
//                               | About.js is not loaded yet
//                               v
//                       USER INTERACTION
//                               |
//                               | Click "About" button
//                               |   
//                               v
//                       REACT TRIGGERS import()
//                               |
//                               | React requests About component
//                               |   
//                               v
//                      VITE DEV SERVER RESPONSE
//                               |
//                               | Vite detects request for About.js
//                               |   
//                               | Sends About.js file to browser
//                               |
//                               v
//                       BROWSER LOADS CHUNK
//                               |
//                               | About.js downloaded
//                               |
//                               | React executes module
//                               |   
//                               v
//                           UI RENDERS
//                               | <About /> is shown
//                               | Suspense fallback disappears
