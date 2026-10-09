//                        count

// It is an aggregation stageused to count the totalno:of documents currently passing through the pipeline.

// * Returns one document with the count value.
// * In most pipeline $count must be the last stage.
// * If no documents reach $count, it returns empty result [], instead of 0.


//  syntax:-

//     {
//      $count: 'fieldName'
//     }


// Eg:- 
// [
//  { item: "Notebook", quantity: 15 },
//  { item: "Pen", quantity: 25 },
//  { item: "Laptop", quantity: 5 }
// ]

//  run:-
//  db.sales.aggregate([
//   {
//     $count: 'totalDocuments'
//   }
//  ])


// output will be:-
//   [
//      { "totalDocuments": 3 }
//   ]


//   It is the shortcut of $group with sum:1



// It is usually placed after $match, $group, or other stages to count the remaining documents.


//   Eg:-
//    db.sales.aggregate([
//     {
//      $match:{ quantity:{$gt: 10}}
//     },
//     {$count: 'highQuantitySales'}
//    ])


//   output will be:-
//  [
//     { "highQuantitySales": 2 }
//  ]





// countDocuments():- normal query counting     // db.sales.countDocuments():- Counts documents directly without aggregation.
// $count:- aggregation pipeline counting