//                                  Capped Collections
//                                  --------*---------


// It is a fixed size collection,that automatically
//     overwrites/deletes the oldest documents and add new document when it reaches its size limits.

// It works like a circular queue(FIFO)

// in this collection has maximum size. Once the size is full,data is removed automatically without a manual deletion
//     & new data keeps come

// Use:- When we dont want old data and we wannt only recent datas.

// Eg:- 
//      Application logs
//      Chat messages (recent only)
//      Sensor data
//      Audit trails
//      Live activity feeds

//                            Flow of capped collections
//                            --------------------------


//                             Define a maximum size
//                                        |
//                                        |
//                                        V
//                    MongoDB stores documents until size limit is reached
//                                        |
//                                        |
//                                        V
//                   When it full(automatically oldest document removed)
//                                        |
//                                        |
//                                        V
//                            New document inserted


//  Rules of capped collections:-

//  1. Documents are stored in the order they are inserted.
//  2. Oldest documents are removed first when space is needed
//       - Works on FIFO (First In, First Out) principle.
//  3. We cannot delete documents manually.
//       - we cannot use deleteOne() or deleteMany()
//  4. We cannot update when size increases the limit.
//  5. Faster insert performance.
//       - It is faster than normal collecion becuase:-
//              * No indexing reordering.
//              * Fixed memory allocation.


// Syntax:-

//       db.createCollection('collectionName',{
//          capped:true,
//          size: <size_in_bytes>,                  // size:- maximum memory size (must given)
//          max: <max_documents>                    // max:- maximum no:of documents(which is optional)
//      })

// 1:- when create a capped collection:-
//   Eg:-
//       db.createCollection('logs',{
//          capped: true,
//          size: 1024 * 1024,              //    1 MB
//          max: 1000
//      })                                   // Stores only latest 1000 documents or 1MB data, whatever comes first


// 2:- whwn insert a data:-
//        db.logs.insertOne({
//          message: 'Server started',
//          time: new Date()
//        })                                // In this MongoDB automatically delete old log and insert new, when the collection is full


// 3:- when convert normal collection to capped collection:-
//        * we cannot directly concert to capped collection but we can do like this:-
//          db.runCommand:({
//             convertToCapped: 'collectionName',
//             size: 1024 * 1024
//          })

// 4:- when we want to check whether the collection is capped or not:-
//          db.collectionName.isCapped()                // return true if it is capped otherwise return false if it is normal