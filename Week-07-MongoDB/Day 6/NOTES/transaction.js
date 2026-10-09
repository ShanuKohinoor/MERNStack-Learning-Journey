//                            TRANSACTION
//                            -----------

//
// MongoDB(NoSQL) didnt follow ACID property before. 
// ACID properties are 4 guarantees a database provides to ensure reliable transactions.
// ACID:-
//   Atomacity:-
//   Consistency
//   Isolation
//   Durability


// Atomicity: All operations in a transaction succeed together or fail together.

// Consistency: The database always remains in a valid state before and after the transaction.

// Isolation: Other operations cannot see partial changes until the transaction is committed.

// Durability: Once committed, changes are permanent, even if the server crashes.


// A transaction is like a bundle of operations that should all succeed or all fail together.


// Transaction require:-
//    * replica set
//    * Session(transaction context)


//                       Start Session( open a special workspace to track all operations.)
//                           |
//                          v
//                       Start Transaction (all operations inside are bundled together.)
//                           |
//                           v
//                    Perform Operations (update multiple documents/collections.) 
//                         -------------------------------------
//                         |                                    |
//                         |                                    |
//            Success      |                                    |Fail
//                         |                                    |
//                         v                                    v
//                 Commit Transaction                   Abort Transaction          
//                     (Save all)                        (Rollback all)  
//                         |
//                         v
//                   End Session









// 