//                          SHARDING
//                          --------


// Splitting database into smaller parts and storing them on multiple servers.

// when :-
//   * One server can store only limited no:of datas.
//   * Many users write / read at a time will results in slowing down of server.
//   * If sever fails,all data will lost unless replication is used.

//  with the help of sharding we can resolve this problem.

//    Sharding helps to split database into smaller pieces(shards).
//    Each shard store on different server.
//    Request go only to the shard,that contains required data.
//    We can add more servers as our data grows.



//                                      Client sends query
//                                             |
//                                             |
//                                             v
//                                   Query Router(mongos) recieves query
//                                             |
//                                             |
//                                             v
//                                 Config Server (Finds correct shard)        
//                                             |  tell the router which shard has data
//                                             |
//                                             v
//                                Router sends query to the Correct Shard 
//                                             |
//                                             |
//                                             v
//                                      Shard responds
//                                             |
//                                             |
//                                             v
//                              send results back to the Client


// Components of sharding
// ----------------------

// 1. Shard:- Stores a portion of data.
// 2. Config Server :- Keeps track of which data is on which shard.
// 3. Query Router:- Recieve queries and sends them to the right shard.





// Shard Key:- MongoDB uses a shard key to decide which shard stores a particular document.



// Types of sharding:-
// -----------------
// 1. Range Sharding :- Data is split based on a range of values.
//         Eg: CustomerID 1-100 = Shard1,
//                       101-200 = Shard2.

// 2. Hash Sharding :- Data is split using a hash of the shard key --> more even distribution.