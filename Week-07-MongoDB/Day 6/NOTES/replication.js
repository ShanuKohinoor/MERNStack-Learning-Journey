//                                   REPLICATION
//                                   -----------

// Replication is the process of duplicating our databases across multiple servers.
//     * To ensure high availability(our database is always online) and data safety(no data loss)
//     * Replication is implemented using Replica Set.

// Main purpose of replcation is doesn't want to lost data and must work our database even main server crashes


// Replica Set Components
// ----------------------
//          * It is a group of MongoDB servers that maintain same data.


//        Primary                               Secondary                        Arbiter
//  Act like main office               * Act like backup office copying work       * Act like a Manager deciding who becomes boss
//    where work is done 

// Primary:- Reecieves all write operations(insert,update,delete)       
//   * It acts like a main office.
//   * When insert/write into primary,logs the action in oplog (act like a notebook of all changes).
//   * Oplog stores the  operations,not the final result.
//   * Only one primary at a time.

//   *Heartbeats are sending between servers to detect crash.
//      if heartbeat missing,we can identify crash happened,then votting happen

// Secondary:- Copies datas from primary.
//   * Secondaries read the oplog(operation log) and copy the action.
//   * Optionally sometimes use for read operations.
//   * Multiple secondaries can exist.
//   * They cannot accept writes directly (unless using special configs).

// Arbiter :- Helps in voting to elect a new primary if the current primary fails.
//   * It doesn't store data.
//   * Once primary fails Arbiter and other secondaries vote for next new primary.
//   * The secondary with the latest data becomes new primary.




// Step 1:- Write Data
// ---------------------
//                          Primary (Main)
//                              | Insert "Customer: Alice"
//                              |
//                              v
//                       Oplog logs the action
//                              | 
//                              |
//                              v
//                 Secondary 1 (Backup): Waiting
//                 Secondary 2 (Backup): Waiting
//                 Arbiter (like Manager): Waiting
//                              | 
//                              |
//                              v

// Step 2 Secondaries Copy
// -----------------------
//                Secondary 1: Reads Oplog --> Copies "Customer: Alice"
//                Secondary 2: Reads Oplog --> Copies "Customer: Alice"

//                        Primary: Done
//                              | 
//                              |
//                              v
//                     Secondaries: Up-to-date(by copying everything)
///                             | 
//                              |
//                              v
//                     Arbiter: Still observing


// Step 3:- Primary Fails
// -----------------------
//                    when Primary crashes
//                              |  secondary detects missing heartbeat
//                              |
//                              v
//                Secondaries notice Primary is down
//                              | 
//                              |
//                              v
//                Arbiter participates in voting
//                              |  voting happens automatically
//                              |  Mjority wins
//                              v
//            Secondary 1 has latest data --> elected as new Primary

// Step 4:- New Primary Works
// ---------------------------
//             Secondary 1: Now Primary --> receives writes
//                              | 
//                              |
//                              v
//                Secondary 2: Still copying
//                              | 
//                              |
//                              v
//              if (Old Primary comes back): it becomes Secondary and catches up using oplog like secondary did before.
//                              | 
//                              |
//                              v
//                 Arbiter: Observes election







// When primary crash before replication,data will lost. To overcome write concern use
// write concern:- which decides when MongoDB should say write successful.

// Write Concern controls how many replica set members must confirm a write before MongoDB returns success.


//   1. Default w : 1


//                      Client Insert Data
//                              | 
//                              |
//                              v
//                       Primary saves data
//                              | primary confirms write
//                              | Doest wait for secondary
//                              v
//                     Primary replies "SUCCESS" 
//                              | 
//                              |
//                              v
//                   Primary crashes before replication
//                              | Data will lost
//                              |
//                              v
//                      Election happens
//                              | 
//                              |
//                              v
//                 Secondary 1 becomes new Primary
//                              | 
//                              |
//                              v
//              New Primary does not have that data
//                              | 
//                              |
//                              v
//                Data lost (Rollback happens)



// 2. w: majority

// Primary waits until majority of replica set members confirm.
// Safer
// slightly slower



//                      Client Insert Data
//                              | 
//                              |
//                              v
//                       Primary saves data
//                              | primary confirms write
//                              |  wait for secondary
//                              v
//                      Secondary one copies data 
//                              | 
//                              | Now 2 servers have data (Majority reached)
//                              v
//                      Primary crashes 
//                              | Data wont lost
//                              |
//                              v
//                      Election happens
//                              | 
//                              |
//                              v
//                 Secondary 1 becomes new Primary
//                              | 
//                              |
//                              v
//                       Data  still exist
//                              | 
//                              |
//                              v
//                        No Data loss 


//            db.users.insertOne(
//              { name: "Shanu" },
//              { writeConcern: { w: "majority"} }
//            )



// Use majority when:-
//       * Payments
//       * Orders
//       * Financial transactions
//       * important logs

//                 otherwise default can use


// Never use secondary for :-
//      * Login verification
//      * Payment validation
//      * Critical real-time data


// Read preference:- primary read from primary. We can use secondary to reduce the load.
// Replication lag:- Replication is not instant. Secondary may take millisecons to copy data.



//Replication is asynchronous