//                                MongoDB Pipeline based lookup
//                               -------------------------------

//  $lookup:- In MongoDB, $lookup is used to join two collections.
//      $lookup is powerful ,but expensive


//     Eg:- students.courseId = courses._id

//                                         2 Types of $lookup
//              ----------------------------------------------------------------------
//              |                                                                     |
//         simple $lookup                                                     pipeline based $lookup
//       * Used only when field equality is needed                   * Use when need filtering, multiple conditions, projection, grouping, or complex joins.






//  we have students collection and courses collection like this:-

// student collection:-
//              { _id: 1, name: "Ali", courseId: 101 },
//              { _id: 2, name: "Sara", courseId: 102 },
//              { _id: 3, name: "John", courseId: 103 }


// courses collection
//             { _id: 101, course: "Math", price: 600 },
//             { _id: 102, course: "Science", price: 500 },
//             { _id: 103, course: "History", price: 400 },
//             { _id: 104, course: "English", price: 700 }     // Extra course whivh is not linked


// we can join these two collections by using $lookup.


// 1) simple $lookup:-
//      * Already we learned(using localField & foreignField)
//            Eg:- 
//                db.students.aggregate([
//                  {
//                    $lookup:
//                     {
//                      from: 'courses',       //     Collection to join (courses)
//                      localField: 'courseId',
//                      foreignField:'_id',
//                      as: 'courseInfo'
//                     }
//                  }
//                ])

// Matches students.courseId with courses._id automatically.

//  Output will be:- 


// [
//   {
//     _id: 1,
//     name: 'Ali',
//     courseId: 101,
//     courseInfo: [ { _id: 101, course: 'Math', price: 600 } ]
//   },
//   {
//     _id: 2,
//     name: 'Sara',
//     courseId: 102,
//     courseInfo: [ { _id: 102, course: 'Science', price: 500 } ]
//   },
//   {
//     _id: 3,
//     name: 'John',
//     courseId: 103,
//     courseInfo: [ { _id: 103, course: 'History', price: 400 } ]
//   }



// This is easy to use, but can't handle complex conditions.

// 2) pipeline based lookup
//  Run a mini aggregation pipeline on the foriegn collection for each document.
//  Instead of localField and foreignField of simple lookUp, here we use let,expr,eq etc..


//   We used this when we need:-
//         * Filtering (e.g., price > 500),
//         * multiple conditions,
//         * projection (only select certain fields),
//         * grouping inside joined collection,
//         * complex joins

//       Eg:- db.students.aggregate([
//             {
//              $lookup:
//               {
//                 from: 'courses',                 // from:-Collection to join (courses)
//                 let:{cid: '$courseId'},          // let:- Pass values from main collection(current colllection) into the pipeline
//                 pipeline:[                       // pipeline:- Runs aggregation on the joined collection
//                  {
//                    $match:{                      // $match:- Filter documents inside pipeline
//                      $expr:                    // $expr :- Allows comparison between fields/variables
//                       { $eq: ['$_id','$$cid'],      // $eq:- Checks equality
//                       { $gt: {'$price': 500} 
//                      }                                 // $:- Field from lookup collection (courses). Eg:- '$_id'
//                    }                                   // $$:- Variable passed via let from main collection (students)
//                  }                                                    // Eg:- '$$cid'
//                ],
//                as:'courseInfo'                   //  as:- Stores joined results as an array
//               }
//             }
//         ])


//   Output will be:-

// [
//   { _id: 1, name: 'Ali', courseId: 101, courseInfo: [ { _id: 101, course: 'Math', price: 600 } ] },
//   { _id: 2, name: 'Sara', courseId: 102, courseInfo: [] },
//   { _id: 3, name: 'John', courseId: 103, courseInfo: [] } 
// ]                                     // here we can see empty array.Because it matches the condition.Ids are same but condition is not true(not greater than 500)
//                                       // so return like this.


// To get exact output we can again $match afyer filter. Like this:- 

// db.students.aggregate([
//   {
//     $lookup: {
//       from: 'courses',
//       let: { cid: '$courseId' },
//       pipeline: [
//         {
//           $match: {
//             $expr: {
//               $and: [
//                 { $eq: ['$_id', '$$cid'] },    // match courseId
//                 { $gt: ['$price', 500] }      // filter price > 500
//               ]
//             }
//           }
//         }
//       ],
//       as: 'courseInfo'
//     }
//   },
// { $match: { courseInfo: { $ne: [] } } }  // only students with course price > 500

// ])


//   Output will be:-

// [
//   {
//     _id: 1,
//     name: 'Ali',
//     courseId: 101,
//     courseInfo: [ { _id: 101, course: 'Math', price: 600 } ]
//   }
// ]



//                  students document
//                             |  
//                             |                      
//                             v                          
//                let creates variable              // let is used to send a value from the main collection to the lookup pipeline.
//                             |  
//                             |                      
//                             v                          
//                   $$variable created
//                             |  
//                             |                      
//                             v                          
//               open courses collection
//                             |  
//                             |                      
//                             v                          
//                     pipeline starts
//                             |  
//                             |                      
//                             v                          
//                  $match + $expr compares
//               courses._id = students.courseId
//                             |  
//                             |                      
//                             v                          
//              matching documents found
//                             |  
//                             |                      
//                             v                          
//                  stored in "as" field
//                             |  
//                             |                      
//                             v                          
//             matched documents returned



// Why do we use let in $lookup pipeline?
// let is used to pass values from the parent collection to the lookup pipeline so that we can compare them using $expr.


// we can use pretty() to get better look


// we can use all pipeline queries inside pipeline based lookup too..like:- projection(to get name and email only)

// when the condition is expression based, we can use $expr.
//  *  $expr allows MongoDB to evaluate expression inside $match.

//    Conditions when we use $expr are:-
//     * field vs variable
//     * field vs field
//     * calculations






// $lookup is ACCEPTABLE in:-
//  Reporting
//  Low frequency queries
// Admin dashboard
//  Analytics