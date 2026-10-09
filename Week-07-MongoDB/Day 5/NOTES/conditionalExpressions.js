//               Conditional Expressions
//              -----------------------





//  Used to apply conditions inside aggregation pipeline, similar to if-else logic in programming. 
// usually used in,
//     * $project
//     * $set
//     * $group

//  $cond :- similar to if else condition
//  -----
//    Syntax :-

//       {
//        $cond :[
//         <condition>,
//         <value_if_true>,
//         <value_if_false>
//        ]
//      }


//  Eg:-if we want to set a status passed,when score is greater than 50,otherwise status is fail
            //    db.sales.aggregate([
            //     {
            //     $project:{
            //         item:1,
            //         quantity:1,
            //         status:{
            //           $cond:[
            //              {$gt:['$revenue',500]},  // if revenue >500
            //                 'High',
            //                 'Low'
                         
            //      ]
            //         }
            //     }

            //    }
            // ])


 //Eg 2:-
            //   db.sales.aggregate([
            //     {
            //         $addFields:{
            //             status:{
            //                 $cond:[
            //                     {$eq:['$item','Laptop']},
            //                      'Electronics',
            //                      'Other Product'
            //                 ]
            //             }
            //         }
            //     }
            //   ])           


                


// we can use $cond only in if-else condition.
// if there is multiple condition,we can use $switch
//   For eg:-
//    if we want revenue in 3 categories like,
//        Low:- revenue <= 100
//        Medium:- revenue > 100 and <= 1000
//        High :- revenue > 1000
//   * In this condition we can't use if-else condition. Here we use $switch.



// 2) $switch:- 
// ----------

// $switch is used to check multiple conditions and return different results depending on which condition is true.
// It works like switch–case statements in programming languages.


// syntax:-

//     {
//      $switch:{
//        branches:[
//          {case:{<condtion1>},then:'<result1>'},
//          {case:{<condition2>},then:'<result2>'},
//          {case:{<condition3>},then:'<result3>'}
//        ],
//       default:'<default value>'
//     }
//    }



//  Eg:- 
//           db.sales.aggregate([
//            {
//                $project: {
//                item: 1,
//                revenue: 1,
//                status: {
//                   $switch: {
//                   branches: [
//                        { case: { $lte: ["$revenue", 100] }, then: "Low" },
//                        { case: { $and: [{ $gt: ["$revenue", 100] }, { $lte: ["$revenue", 1000] }] }, then: "Medium" },
//                        { case: { $gt: ["$revenue", 1000] }, then: "High" }
//                    ],
//                    default: "Unknown"
//                    }
//                }
//                }
//            }
//        ])