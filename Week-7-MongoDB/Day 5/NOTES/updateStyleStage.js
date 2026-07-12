
//                         Update Style Stage
//                         ------------------

// 

// Do not change number of documents
// Do not group documents
// Do not filter document
// These stages modify or reshape documents inside the pipeline.
// Whereas $project is mainly used to redesign or select fields.


//  $set :- adds or update fields
//  ----
//  * add new fields
//  * update existing fields
//  * Keeps all other fields unchanged
//  * $set is the same as $addFields.

//   syntax:-
//          {
//            $set: {
//                field1: value,
//                field2: expression
//            }
//           }

//  Eg:- 
//        db.sales.aggregate([
//        {
//            $set: {
//            revenue: { $multiply: ["$quantity", "$price"] }
//            }
//        }
 //       ])




//  $unset:- delete fields
//  -------
//  * Removes fields from the document.
//  * like removing properties in update

//   syntax
//      {
//        $unset: "fieldName"
//      }

//  * can remove multiple fields


// syntax:- 
//      {
//         $unset: ["field1", "field2"]
//       }

//  Eg:- 
//           db.sales.aggregate([
//            {
//              $unset: "date"               //will remove date fileds
//            }
//          ])


//  $replaceRoot:- completely replace document
//  ------------
//  * Dangerous if we don't know the structure because the original document is completely replaced.
//  * Commonly used to promote an embedded document to the top level
//  syntax:-
//        {
//            $replaceRoot: {
//                newRoot: <expression>
//            }
//            }

// Eg:-
//         db.users.aggregate([
//          {
//            $replaceRoot: {
//              newRoot: "$address"
//            }
//          }
//        ])                       // The address object becomes the new document.



//  $replaceWith
//  ------------
//   * Modern version of $replaceRoot
//   * same as replaceRoot. But cleaner version

//   syntax:-
//     {
//       $replaceWith: <expression>
//     }



//   Eg:-

//        db.users.aggregate([
//         {
//           $replaceWith: "$address"
//         }
//        ])