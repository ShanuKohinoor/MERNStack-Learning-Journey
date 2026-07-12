//                                 ADVANCED AGGREGATION
//                                 --------------------


//            _______________________________|__________________________________
//           |                  |                             |                 |
//           |                  |                             |                 |
//           V                  v                             v                 V
//         $lookup           $unwind                       $facet           $bucket     



// 1) $lookup:- To join collections
// ----------
//  * Used when data in two collections.
//         Eg:- orders+ customers--> show customer name with order

// $lookup connects documents from another collection and brings matching data

//  Eg:- 
//  Collection 1(orders):-
//     [
//         { _id: 1, customerId: 101, item: "Pizza", price: 200 },
//         { _id: 2, customerId: 102, item: "Burger", price: 100 },
//         { _id: 3, customerId: 101, item: "Burger", price: 200 }
//     ]

// Collection 2(customers)
//    [
//        { _id: 101, name: "Asha", city: "Delhi" },
//        { _id: 102, name: "Rahul", city: "Mumbai" }
//    ]

//  when we want to Show all orders along with customer details, we use $lookup

// syntax:-
//    db.orders.aggregate([
//     {
//        $lookup: {
//           from: 'customers',
//           localField: 'customerId',
//           foreignField: '-id',
//           as: 'customerInfo'
//        }
//      }
//   ])


//  Output will be:-
        // [
        //   {
        //     _id: 1,
        //     customerId: 101,
        //     item: "Pizza",
        //     price: 200,
        //     customerInfo: [
        //       { _id: 101, name: "Asha", city: "Delhi" }
        //     ]
        //   },
        //   {
        //     _id: 2,
        //     customerId: 102,
        //     item: "Burger",
        //     price: 100,
        //     customerInfo: [
        //       { _id: 102, name: "Rahul", city: "Mumbai" }
        //     ]
        //   },
        //   {
        //     _id: 3,
        //     customerId: 101,
        //     item: "Burger",
        //     price: 200,
        //     customerInfo: [
        //       { _id: 101, name: "Asha", city: "Delhi" }
        //     ]
        //   }
        // ]



//  2) $unwind :- To break array into documents
//  ----------

//   It helps to break an array and bring the object outside.
//   Eg:- After $lookup,customerInfo is in an Array. To bring that to documents,we use $unwind

// Array may exist:-
//         - In original documents.
//         - From $lookup.
//         - From $group using $push / $addToSet.
//         - From $project / $addFields


//   * $unwind creates one output document per array element.
//  if there is nothing,will remove complete document
//        - if array has 3 elements,output will be ---> 3 documents.
//        - if array has 2 elements,output will be ---> 2 documents.
//        - if array has 1 element,output will be ---> 1 document.
//        - if array has 0 element,output will be ---> 0 document. if output is 0, documents disappera from the result.
//                  * To avoid this,we can use preserveNullAndEmptyArrays. So we can preserve.
//                  * We can use it along with $unwind. Eg:-
//                         {
//                           $unwind:{
//                             path: 'items',
//                             preservedNullAndEmptyArrays : true
//                          }
//                         }


// Definition:- $unwind deconstructs an array field and give outputs one document per array element.

// When $unwind is required:-

//    * a) Converting array --> object structure
//          - Mainly After $lookup
//  When we use $unwind along with $lookup like this,

//  output will be:-
            // [
            //   {
            //     _id: 1,
            //     customerId: 101,
            //     item: "Pizza",
            //     price: 200,
            //     customerInfo: {
            //       _id: 101,
            //       name: "Asha",
            //       city: "Delhi"
            //     }
            //   },
            //   {
            //     _id: 2,
            //     customerId: 102,
            //     item: "Burger",
            //     price: 100,
            //     customerInfo: {
            //       _id: 102,
            //       name: "Rahul",
            //       city: "Mumbai"
            //     }
            //   },
            //   {
            //     _id: 3,
            //     customerId: 101,
            //     item: "Burger",
            //     price: 200,
            //     customerInfo: {
            //       _id: 101,
            //       name: "Asha",
            //       city: "Delhi"
            //     }
            //   }
            // ]

//    * b) Grouping by array values.
//          - To count how many times each item was ordered.
//            Eg:- 
//               db.orders.aggregate([
//                { $unwind: "$items" },
//                { $group: { _id: "$items", count: { $sum: 1 } } }
//               ])



//        - Without $unwind:-
                        // db.orders.aggregate([
                        //   {
                        //     $group: {
                        //       _id: '$items',
                        //       count: { $sum: 1 }
                        //     }
                        //   }
                        // ])
//          Output will be:-
//              ['Pizza','Burger'] --> 1
//              ['Pizza','Juice'] --> 1
//                                                  MongoDB takes whole array as one value
 

//     -With $unwind:-
                    // db.orders.aggregate([
                    //   { $unwind: "$items" },
                    //   {
                    //     $group: {
                    //       _id: "$items",
                    //       count: { $sum: 1 }
                    //     }
                    //   }
                    // ])
//                          MongoDB takes like:-
//                               Juice
//                               Juice
//                               Pizza
//                               Burger
//                               Pizza
//                               Juice

//         Output will be:-
//                 Pizza --> 2
//                 Burger --> 1
//                 Juice  --> 3



//    * c) Filtering based on array elements.
//    * d) Calculation per array item.
            // {
            //   _id: 1,
            //   items: [
            //     { name: "Pizza", price: 200 },
            //     { name: "Burger", price: 150 }
            //   ]
            // }

//    If we want to add 10% tax to order per item, we can use $unwind.
//            without $unwind MongoDB cant apply calculation per item.            

        //     db.orders.aggregate([
        //         { $unwind: "$items" },
        //         {
        //             $addFields: {
        //             tax: { $multiply: ["$items.price", 0.1] }
        //             }
        //         }
        //    ])






// 3) $facet :- Helps to run multiple aggregation pipelines in parallel and and get multiple results in one output.
// ----------
// Use of $facet eg:-
//     we want to display in admin dashboard
//       * total orders,
//       * orders by items and 
//       * orders by city 
// Normally we want to run 3 separate queries. But with $facet, need only one query,but multiple results.

//  Syntax:- 
//       {
//         $facet : {
//           report 1: [pilpeline stages],
//           report 2: [pipeline stages],
//           report 3: [pipeline stages]
//         }
//       }                                     // Each report wworks independently on the same input

//  Eg:- we have datas,

            // [
            //   {
            //     _id: 1,
            //     item: "Pizza",
            //     price: 200,
            //     customerInfo: { name: "Asha", city: "Delhi" }
            //   },
            //   {
            //     _id: 2,
            //     item: "Burger",
            //     price: 100,
            //     customerInfo: { name: "Rahul", city: "Mumbai" }
            //   },
            //   {
            //     _id: 3,
            //     item: "Burger",
            //     price: 200,
            //     customerInfo: { name: "Asha", city: "Delhi" }
            //   }
            // ]


//  When we run,
        //  db.orders.aggregate([
        //   {
        //     $lookup:{
        //         from: 'customers',
        //         localField: 'customerId',
        //         foreignField: '_id',
        //         as : 'custimerInfo'
        //     }
        //   },
        //   {
        //     $unwind: '$customerInfo'
        //   },
        //   {
        //     $facet:{
        //         totalOrders: [
        //             { $count: 'count'}
        //         ],
        //         ordersByItem: [
        //             {
        //                 $group:{
        //                     _id : '$item',
        //                     totalOrders: {$sum :1}         
        //                }
        //             }
        //         ],
        //         orderByCity: [
        //             {
        //                 $group:{
        //                     _id: '$customerInfo.city',
        //                     totalOrders: {$sum: 1}
        //                 }
        //             }
        //         ]
        //     }
        //   }
        //  ])




//     Output will be:-

// [
//   {
//     totalOrders: [
//       { count: 3 }
//     ],

//     ordersByItem: [
//       { _id: "Pizza", totalOrders: 1 },
//       { _id: "Burger", totalOrders: 2 }
//     ],

//     ordersByCity: [
//       { _id: "Delhi", totalOrders: 2 },
//       { _id: "Mumbai", totalOrders: 1 }
//     ]
//   }
// ]


// Does $lookup affect performance?
//  Yes,$lookup is the one of the most expensive stage in aggregation.
//      $lookup impacts performance because it performs a join across collections, increasing CPU, memory usage, and I/O.
//      To optimize it, we should reduce input size using $match, ensure indexes on the joined fields,
//        limit projected fields, and prefer embedding or denormalization where possible.

// How to overcome this?
//   a) Always use $match before $lookup.
//        filter first---> then join

//   b) Index the foreignField.

//      Index the foreign field(MongoDB uses indexes during $lookup)




//   c) Return only required fields. Helps to save memoryspace
//            * By default lookup return entire documents.
//                - This increases memory usage.
//                - Slows down aggregation.
//            * To get required fields alone we can use,mini aggregate pipeline on the foreign collection.It is called pipeline-based $lookup.
//                - pipeline-based lookup let you run mini aggregation pipeline on the foreign collection for each document.
//                - Return only required fields.
//                - Improve performance.
//            Eg:- when we have two collections, orders and customers,

//         Collection 1(orders):-
                // [
                //   { _id: 1, customerId: 101, item: "Pizza",  price: 200 },
                //   { _id: 2, customerId: 102, item: "Burger", price: 100 },
                //   { _id: 3, customerId: 101, item: "Burger", price: 200 }
                // ]

//         Collection 2(customers):-
                // [
                //   { _id: 101, name: "Asha",  city: "Delhi",  phone: "99999", email: "asha@gmail.com" },
                //   { _id: 102, name: "Rahul", city: "Mumbai", phone: "88888", email: "rahul@gmail.com" }
                // ]

// When we try to join these collections with help of $look up,Normally $lookup return whole documents.
//     Eg:- if we don't want email and phone number. It is wastage of memory.

//  When use mini pipeline like this:-

//                 db.orders.aggregate([
                //   {
                //     $lookup: {
                //       from: "customers",
                //       let: { cid: "$customerId" },        // pass customerId from orders to lookup pipelne. 'let' is used to pass values from current document into the lookup pipelines.
                //       pipeline: [
                //         {
                //           $match: {
                //             $expr: { $eq: ["$_id", "$$cid"] }        //$match:-  customers._id === orders.customerId.
                //           }                                          // When the expression is expression based, we must use $expr
                //         },
                //         {
                //           $project: {                            // return only required field. Avoid phone and email
                //             _id: 0,
                //             name: 1,
                //             city: 1
                //           }
                //         }
                //       ],
                //       as: "customerInfo"
                //     }
                //   },
                //   {
                //     $unwind: "$customerInfo"
                //   }
                // ])



//   Output will be:- 
                            // [
                            //   {
                            //     _id: 1,
                            //     customerId: 101,
                            //     item: "Pizza",
                            //     price: 200,
                            //     customerInfo: {
                            //       name: "Asha",
                            //       city: "Delhi"
                            //     }
                            //   },
                            //   {
                            //     _id: 2,
                            //     customerId: 102,
                            //     item: "Burger",
                            //     price: 100,
                            //     customerInfo: {
                            //       name: "Rahul",
                            //       city: "Mumbai"
                            //     }
                            //   },
                            //   {
                            //     _id: 3,
                            //     customerId: 101,
                            //     item: "Burger",
                            //     price: 200,
                            //     customerInfo: {
                            //       name: "Asha",
                            //       city: "Delhi"
                            //     }
                            //   }
                            // ]


//      d) Avoid multiple lookup stages.
//        prefer
//          * embedd data
//          * preagrregated collection:- $merge,$out etc

//      e) Use $lookup when necessary
//             * By using snapshotting



// 4) $bucket :- Helps to group documents into ranges instead of exact value.
// ----------

//  When we have a question like, 'How many orders fall into different price ranges?'
//    Eg:- 
//       Cheap (0–100)
//       Medium (100–200)
//       Expensive (200+)

//  We can use $bucket. Like this:-
//         db.orders.aggregate([
        //  {
        //     $bucket: {
        //         groupBy : '$price',                    // Use price to decide the bucket
        //         boundaries: [0,100,200,500],           // Use to create range
        //         default: 'other',                      // If price doesnt include in any above ranges,  use this
        //         output :{
        //             count: {$sum: 1}                   // Used to count how many documents in each buckets
        //         }
        //     }
        //  }
//        ])


//   Output will be:- 
//   [
//      { _id: 100, totalOrders: 1 },
//      { _id: 200, totalOrders: 2 }
//   ]



// 5) $bucketAuto:- $bucketAuto automatically creates buckets (ranges) based on the data.
// --------------

// Same concept as $bucket.
// We do not need to manually define boundaries.
//     * In $bucket we define the range. But in $bucketAuto MongoDB define the range.
//     * MongoDB will
//            - analyze the data 
//            - divide it into equal number of buckets
// We should say how many buckets we need


//           db.students.insertMany([
//            { name: "Ali", marks: 45 },
//            { name: "Sara", marks: 62 },
//            { name: "John", marks: 78 },
//            { name: "Mike", marks: 88 },
//            { name: "Lily", marks: 95 }
//           ])



//           db.students.aggregate([
//            {
//             $bucketAuto:{
//              groupBy:"$marks",           // Field used for bucketing.
//              buckets:3                  // Number of buckets we want.
//            }
//           }
//         ])


//  Output:-
//        [
//          { _id: { min: 45, max: 62 }, count: 2 },
//          { _id: { min: 62, max: 88 }, count: 2 },
//          { _id: { min: 88, max: 95 }, count: 1 }
//        ]