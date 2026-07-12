//                           CHANGE STREAM
//                           -------------


//   In MongoDB, Change Streams allow applications to listen to real-time changes in the database.
//      * Whenever data is inserted, updated, or deleted, MongoDB can immediately notify your application.
//  Change Streams allow us to watch a collection, database, or even the whole cluster for changes in real time.

// Changes can be:
//       * Insert
//       * Update
//       * Delete

// This is very useful if we want our application to react immediately when data changes.


// Instead of polling(asking repeatedly), change stream work whenever needs.


//              Application starts watching collection
//                              | 
//                              |
//                              v
//                       MongoDB Change Stream 
//                              |  without we need to watch every seconds.
//                              |
//                              v
//                   User inserts/updates/deletes data
//                              | 
//                              |
//                              v
//                 MongoDB detects change in collection
//                              | 
//                              |
//                              v
//                 Change event sent to application
//                              | 
//                              |
//                              v
//          Application reacts (update UI / send notification)



// Change stream only work when MongoDB uses replica Set, even it is single node replica set.
//       Because MongoDB reads changes from oplog.



//                   Client inserts data
//                              | 
//                              |
//                              v
//                 MongoDB stores document
//                              | 
//                              |
//                              v
//               Change Stream detects change
//                              | 
//                              |
//                              v
//                   Application receives event


// Change Streams allow applications to listen to real-time data changes in MongoDB collections without polling the database.