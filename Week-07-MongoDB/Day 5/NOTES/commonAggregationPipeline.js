//                          Core/Common Stages in agrregration
//                          ----------------*-----------------


//            _______________________________|__________________________________
//           |           |            |           |         |        |          |
//           |           |            |           |         |        |          |
//           V           v            v           v         v        v          V
//         $match     $project    $addFields   $group     $sort    $limit     $skip


//      1) $match :- It used to filter documents.
//      ---------
//       * It decides which document should enter aggregration pipeline.
//       *  It reduces data early and makes pipeline faster.
//       * It works like a gatekeeper.
//       * It works like find,but inside pipelne.

//      *  If we want all documents we dont want to use $match. Match is used only if we want to filterand get specific documents.
//      syntax:-
//           {$match:{
//             field:value,
//             field 2:{$operator:value}
//            }
//           }

//          like:-  {$match:{
//                    status:deivered,
//                    amount:{$gt:1000}
//                   }
//                  }   

//         Eg:- If we have collection named payments, 
                // [
                //   { doctor: "Anaya", amount: 5000, status: "Paid" },
                //   { doctor: "Anaya", amount: 3000, status: "Pending" },
                //   { doctor: "Rahul", amount: 4000, status: "Paid" }
                // ]

//         * When we use pipeline here, $match,like
//             db.payments.aggregrate ([
//               { $match: {status: 'Paid}}
//             ])  

//             Output will be:-
                // [
                //   { doctor: "Anaya", amount: 5000, status: "Paid" },
                //   { doctor: "Rahul", amount: 4000, status: "Paid" }
                // ]
//         * We can use:-
//              - $gt, $lt
//              - $in
//              - $and, $or

//       2) $project:- It is used to control the structure of document.
//       -----------
//    * It decides which fields to keep which fields to remove and what new fields to create.
//    *  With match we filter which document to keep,but  with project we decide which fields to keep.
//    *  Reshapes document
//    *  Can remove fields
//    *  Can rename fields  
//    *  Often used to control output


//    syntax:- {
//               $project{
//                field1: 1,
//                field2: 2
//               }
//           }

//       like:-
//           a) {
//               $project:{
//                password:0,
//                secretKry: 0             // 0 means wont take
//               }
//             }


//         b) {
//               $project:{
//                field: 1,
//                newField:'$oldField'            //  if we use '$', only take old value,otherwise will take as string
//               }
//            }


//  3) $addFields:- Keeps all original fields and adds new fields on top of them.
//  --------------
//     * $addFields adds a new field to documents without removing existing fields.
//     * Projects reshape documents whereas addFields extends the document.
//     * Extends document, means keeps all original fields and adds new calculated fields.


//    syntax:- {
//           $addFields:{
//            newField: <Expression>
//          }
//        }   

//    Eg:- {
//           $addFields:{
//              finalAmount:{
//               $subtract:[
//                {$multiply:['$items','$price']
//                },'$discount']
//               }
//             }
//           }



//    
//       4) $group:- which helps to combine many documents into one summary document,usually for counts,total,average etc
//   * Used to combine multiple documents to fewer documents.     
//   * For calculation we use $group.
//   * It group documents based on key. And perform calculations on each group.
// 
//     syntax:-
//            {
//               $group:{
//                 _id: <grouping key>,
//                 field1:{<accumulator> : <expression>}
//                 field2: {<accumulator> : <expression>}
//              }
//            }
//  Eg~:- 
//              db.payments.aggregrate([
//                {$match: {status: 'Paid}},
//                {$group: {
//                  _id: '$doctor',
//                  totlAmount: {$sum: '$amount}
//               }
//             }
//            ])
//           Output:-
//                 [
                //   { _id: "Anya", totalAmount: 5000 },
                //   { _id: "Rahul", totalAmount: 4000 }
                // ]


//   5) $sort :- Sort documents with ascending or descending order.
//   --------
//      syntax:-
//        {
//          $sort:{
//            field1 : 1,                      //  ascending= 1
//            field2: -1                       //  descending= -1
//          }
//        }

//      Eg:- 
//          db.payments.aggregrate([
//            {$match:{status: 'Paid'}},
//           {
//             $group: {
//             _id: '$doctor',
//              totalAmount: {$sum: '$amount'}
//            }
//          },
//          {$sort:{$totslAmounts: -1 }}
//        ])

//          Output will be:-
//                [
                //   { _id: "Anaya", totalAmount: 5000 },
                //   { _id: "Rahul", totalAmount: 4000 }
                // ]




// 6) $limit:- Take top N documents.
// ---------
//  * Limit the no:of documents passed forward.

//    syntax:-
//      {
//        $limit: <number>
//      }

//    Eg:- 
            // db.payments.aggregate([
            //   { $match: { status: "Paid" } },
            //   {
            //     $group: {
            //       _id: "$doctor",
            //       totalAmount: { $sum: "$amount" }
            //     }
            //   },
            //   { $sort: { totalAmount: -1 } },
            //   { $limit: 1 }  // only top doctor
            // ])

//         Output:-
                // [
                //   { _id: "Anaya", totalAmount: 5000 }
                // ]

// $limit is come after $sort, to get top or bottom N items.




// 7) $skip:- Skip first N documents
// --------
//   * Skips certain number of documents.
//  syntax:- 
//       { $skip: <number> }

//     Eg:-
            // db.payments.aggregate([
            //   { $match: { status: "Paid" } },
            //   {
            //     $group: {
            //       _id: "$doctor",
            //       totalAmount: { $sum: "$amount" }
            //     }
            //   },
            //   { $sort: { totalAmount: -1 } },
            //   { $skip: 1 },  // skip top doctor
            //   { $limit: 1 }  // take next doctor
            // ])

//   Output will be:- 
// [
//   { _id: "Rahul", totalAmount: 4000 }
// ]



// Real life example comparison:-
// $match --> choose fresh vegetables

// $group --> cook vegetables into curry

// $sort --> serve the tastiest dishes first

// $skip + $limit --> give only the 6th plate to a customer if we  write $skip:5 and $limit:1, then we will get 6th plate after skipping 5 plates





//                              Real life example($match,$project,$group,$sort,$limit)
//                              -------------------------------------------------------

//  If i run a food delivery app,

// Order Collection:-

// [
//   { customer: "Asha", item: "Pizza", price: 200, quantity: 2, city: "Delhi" },
//   { customer: "Rahul", item: "Burger", price: 100, quantity: 3, city: "Delhi" },
//   { customer: "Asha", item: "Pizza", price: 200, quantity: 1, city: "Mumbai" },
//   { customer: "John", item: "Pizza", price: 200, quantity: 1, city: "Delhi" }
// ]

// Which item has the highest total sales from Delhi orders ?

// Solution:-
// ---------

//  If we get a question like this, we can use aggregration pipelines for data processing.
//  We want to , 
//           * get only from Delhi.
//           * want to know Items name and Total Price(price * quantity)
//           * Total sales amount per item.
//           * then sort items by highest sales first.
//           * then finally show top-selling one item name with amount.
//  we can use,
//                                  $match 
//                                     |
//                                     |  Filter
//                                     |
//                                     v
//                                 $project  
//                                     |
//                                     |  Modify
//                                     |  Calculate
//                                     |
//                                     v 
//                                  $group 
//                                     |
//                                     |  Group
//                                     |
//                                     v 
//                                   $sort 
//                                     |
//                                     |  Sort
//                                     |
//                                     v 
//                                  $limit


//  STEP:1 :- $match(To filter data)
//  ------
//             db.orders.aggregate ([
//                { $match : {city: 'Delhi'} }
//             ])


//     Output will be:- 
// [
//   { customer: "Asha", item: "Pizza", price: 200, quantity: 2, city: "Delhi" },
//   { customer: "Rahul", item: "Burger", price: 100, quantity: 3, city: "Delhi" },
//   { customer: "John", item: "Pizza", price: 200, quantity: 1, city: "Delhi" } 
// ]                          
//                                                          // Removed Mumbai from collection



//  STEP 2 :- $project(Select + Calculate)
//  ------
//      Next we want only fields 'item name' and 'price '.$
//        * To calculate the total amount of that item, we want to take price and quatity.
//            * Avoid other fields. So we can use project for this calculations.

//         db.orders.aggregate([
//             { 
//                $project: {
//                 item: 1,                                  // here '1' means include field, if we write '0' means exclude thiis field
//                 totalPrice: {$multiply: ['$price','$quantity'] }      // here use arithematic operator $multiply
//               }                                                        // syntax of multiply arithematic operator :- $multiply: [ value1, value2 ]
//            }
//        ])


//     output will be:-
// [
//   { item: "Pizza", totalPrice: 400 },
//   { item: "Burger", totalPrice: 300 },
//   { item: "Pizza", totalPrice: 200 },
//   { item: "Pizza", totalPrice: 200 }
// ]




// STEP 3 :- $group (Group + Accumulate):- 
// ------
//     Here we want to get group all same item with total amount.
//       Eg:- want to get all pizza together with totalprice. so we can use $group here.


//        db.orders.aggregate([
//          {
//            $group: {
//              _id : '$item',
//              totalSales : {$sum : '$totalPrice'}    //  create new fields using accumulator operator.
//           }
//         }
//       ])      

//        Output will be:-
// [
//   { _id: "Pizza", totalSales: 800 },
//   { _id: "Burger", totalSales: 300 }
// ]


//  STEP 4 :- $sort(ascending or descending order)

//        db.orders.aggregate([
//           {
//             $sort: {totalSales: -1}               // Will get descending order of prices
//           }
//       ])

//      Output will be:-

//           Pizza - 800
//           Burger - 300


//  STEP 5 :- $limit(top results)

//      db.orders.aggregate([
//        {
//          $limit : 1                    // will getonly one
//        }
//      ])                 

//     Output will be:-
//            Pizza - 800           // This is the final answer.



//   Our complete code together to get final result:-
//  -----------------------------------------------



//             db.orders.aggregate([
//                  { $match: { city: 'Delhi' } },
//                  { $project: { item: 1, totalPrice: { $multiply: ['$price', '$quantity'] } } },
//                  { $group: { _id: '$item', totalSales: { $sum: '$totalPrice' } } },
//                  { $sort: { totalSales: -1 } },
//                  { $limit: 1 }
//            ])











