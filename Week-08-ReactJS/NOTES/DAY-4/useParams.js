//                               useParams
//                              -----------

// It is used to get dynamic values from the URL
//     Eg:-

//          /user/20
//          /user/10

//          <Route path='/user/:id' element={<User/>} />


// Definition:- useParams() is a React Router hook used to extract dynamic parameters from the URL.



// import { useParams } from "react-router-dom";

// function Product() {
//   const { id } = useParams();

//   return <h1>Product ID: {id}</h1>;
// }



// For URL:- /product/10 ,
//         Output willbe:- Product ID: 10


// For URL:- /product/25 ,
//         Output willbe:- Product ID: 25








// *1) Multiple parameters
//            * Will get more thn one value from URL.
//                - Eg:-
//                    <Route path='/user/:id/:name' element={<User/>} />

//                      * const {id,name} = useParams()
//                      * Eg URL:- /user/10/john


// *2) Params are always string.
//             * const { id } = useParams();     // id is always string


// *3) Works Only Inside Route Components.


// *4)  Used for Dynamic Data Fetching


// *5)  Works with Nested Routes

// *6)  Can Rename While Destructuring

// *7)  If Param not present,id will be undefined

// *8)  URL must match Pattern

// *9) No page reload.
