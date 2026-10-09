//                          Routes And Route
//                          ----------------


// It helps to define which component loads for which URL.
// By importing Routes and Route from  'react-router-dom'
// 

    //   import {Routes,Route} from 'react-router-dom'

    //     function App(){
    //         return(
    //             <Routes>
    //                 <Route path='/' element={<Home/>} />
    //                 <Route path='/about' element={<About/>} />
    //             </Routes>
    //         )
    //     }


// Routes is a container that holds all Route components and decides which one to render
// ------
//        * It checks all <Route> inside it
//        * Finds the best matching path
//        * Renders only that one


// Route defines a mapping between a URL path and a component
// -----

// Syntax:-
//         <Route path="/about" element={<About />} />

//   * element takes JSX (not component name)