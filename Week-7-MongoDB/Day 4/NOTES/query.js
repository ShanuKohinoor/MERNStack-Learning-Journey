
// When MongoDB runs a query,it must search for a document. It can done by two ways

//            _______________________________|_____________________________
//           |                                                             |
//           |                                                             |
//           V                                                             V
//      COLLSCAN                                                        IXSCAN
//   (Collection Scan)                                                (Index Scan)

//  Collection Scan:-
//  ---------------
//        MongoDB checks every document in the collection one by one.   

//    Eg:-
//       db.students.find({marks :80})
//       * If there is no index for 'marks',MongoDB scans for all students 
//       * It is slow for large collections


// Index Scan:-
// ----------
//      MongoDB uses an index to directly find matching documents.

//    Eg:-
//     db.students.createIndex({marks:1})
//     db.students.find({marks:80})

//     * It is very fast and best for large data







//                     explain('executionStats')
//                     -----------*------------
// explain() tells us how MongoDB executed our query
// syntax:-
//          db.collection.find({marks:80}).explain('executionStats)



//                    Covered queries and Winning plans
//                     ---------------*----------------
// MongoDB answers the query using onlt the index.

//  Eg:-
//               db.students.createIndex({name:1, age: 1})

//              db.students.find(
//               {name: 'Hiba',
//               { _id: 0, name:1 age: 1})



//                        limit() and projections 
//                        ---------*-------------
// It is used for efficiency

//  limit():- Stops after certain number of documents
//  -------
//   Eg:-  db.students.find().limit(10)

// projection:- Return only required fields
// ----------
//             db.students.find(
//              { age: 20 },
//              { name: 1, _id: 0 }
//             )












// When to use and avoid indexes?

// Use:-
// ----
//   * Mnay read operations
//   * Large collections
//   * Frequent filtering or searching
//   * Production apps

//   Eg:- 
//     Login by email
//     Search products
//     Filter patients by doctorId


// Avoid:-
// ------
//     * Avoid Too Many Indexes When
//     *  Heavy write operations
//     * Frequent inserts/updates





