//                 Aggregation Pipeline
//                 ---------*-----------

// It is a framework in MongoDB, that processes data through multiple stages like filtering,joining,grouping, and transforming to produce computed results.

// It helps to turning raw data  into useful information.
// Aggregation Pipeline is a step-by-step process in MongoDB that takes raw data, filters it, groups it, joins other data, and converts it into meaningful results.
// It works like a flowing line(pipeline), where data moves stage by stage, and each stage transforms the data.
// Pipeline means data flows step by step.
//    * Output of one step is the input of next step.
//    * Each step of pipeline is called stage.
//    * Every stage has only one responsibility.It does one job and passes result to the next stage.
// And order is very important. So must follow the order.
//   * But any stage is not mandatory. We can use whatever stage. But should be in order.
// Won't change in Database. Processes only happens inside pipeline for our use. Database remains same.
// syntax:- 
//       db.collection.aggregrate([            // It is always an array.
//          {stage 1},
//          {stage 2},
//          {stage 3}  
//       ])




//                          Core/Common Stages in agrregration
//                          ----------------*-----------------


//            _______________________________|__________________________________
//           |           |            |           |         |        |          |
//           |           |            |           |         |        |          |
//           V           v            v           v         v        v          V
//         $match     $project    $addFields   $group     $sort    $limit     $skip


//                    ARITHEMATIC OPERATORS
//                    --------------------

//They are MongoDB operators used inside pipeline for mathematical calculations.
// They are used when we want calculation of values inside a single document.
// a) $add :- Addition  
// -------  
//    Eg:- $add:{['$Salary','$bonus']}


// b) $subtract :- Subtraction
// ------------
//    Eg:- $subtract:{['$totalAmount','$siccount']}

// c) $multiply :- Multiplication
// ------------
//   Eg:- $multiply:{['$qty','$price']}

// d) $divide :- Division
// ----------
//   Eg:-m$divide:{['$totalMrks','$subjectCounts']}



//                    ACCUMULATOR OPERATIONS
//                    ----------------------

// a) $sum :- Adds values or counts
// --------

// b) $avg:- Average
// -------

// c) $min:- Smallest Value
// -------

// d) $max:- Largest Value
// -------

// e) $first:- First value in group
// --------

// f) $last:- Last value in group
// --------


// g) $push :- Collect values into array
// --------

// h) $addToSet:- Collect unique values
// -------------



//                                 ADVANCED AGGREGATION
//                                 --------------------


//            _______________________________|__________________________________
//           |                  |                             |                 |
//           |                  |                             |                 |
//           V                  v                             v                 V
//         $lookup           $unwind                       $facet           $bucket     




