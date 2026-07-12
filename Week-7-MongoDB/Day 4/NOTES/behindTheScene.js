

// OS is the owner of Disk. OS control everything.
//  OS controls:-
//     * computer hardware(CPU,RAM,DISK),
//     * software resources and
//     * provides services for computer programs(like MongoDB).

// It acts as a bridge between the user,application and the physical machine ensuring everything runs smoothly.
// OS manages everything like memory,files,storage,keyboard,mouse etc

//  MongoDB doesn't own the disk. It can only request Disk space. And OS decides whether to give or not.

//                               When mongoDB installed
//                                        |  * only MongoDB binaries installed(mongosh,mongod,config files)
//                                        |  * No data folder or database files yet
//                                        V
//                                  when MongoDB server(mongod) starts for the first time
//                                        |  mongoDB automatically creates a data directory
//                                        |
//                                        |        
//                              MongoDB initialize Storage Engine
//                                        |     default Wired Tiger
//                                        |
//                                        V
//                           WiredTiger creates Internal engine files:
//                                        | - WiredTiger.wt
//                                        | - WiredTiger.turtle
//                                        | - WiredTiger.lock
//                                        | - Journal files 
//                                        |        
//                                        |     These files store:-
//                                        |        * Metadata
//                                        |        * Transaction information
//                                        |        * Recovery data
//                                        v
//                           MongoDB asks WiredTiger to create files
//                                        |
//                                        |
//                                        V
//                            WiredTiger asks OS for disk space
//                                        |
//                                        |
//                                        V
//               If there is space inside Disk, OS will provide extra space for storing files.
//                                        |
//                                        |  file appears inside folder
//                                        V
//                           Then data folder size will increase


//                              when file creates?
//         _______________________________|_______________________________                              
//        |                                                               |
//    insert document                                               create collection
//        |                                                                | MongoDB tells WiredTiger to create collection
//        |                                                                |
//        V                                                                v
//  MongoDB sends document to Wired Tiger                           Initial file size is Small
//        |                                                                |
//        |                                                                |
//        V                                                                v
//  Wired Tiger chcks for free spaces                           OS allocates minimal disk space   
//      inside .wt pages                                                   * here file exist but file is not fully grown
//       ___________|_____________
//      |                         |
//      |                         |
//      V                         v
//   if enough space,       if there is no space,
//        |                       |    Wired Tiger asks OS to extend .wt pages
//        |                       | * OS enlarges files on Disk(adds new blocks)
//        |                       | - So,files grow only when needed
//        v                       v
//    documents insert
//    inside existing page


//                  DELETE DOCUMENT
//                       |
//                       |
//                       V
//             Document is  delete or relocate
//                       |
//                       |
//                       V
//               gap will be there
//                       |
//                       |
//                       V
//              wiredTger wont inform OS
//                       |
//                       |
//                       V
//           WiredTiger reuses this gap
//              for future inserts

//    
//    if we delete entire collection, space will go to OS


//                                      MongoDB 
//                                        |
//                                        |
//                                        V
//                                    WiredTiger 
//                                        |
//                                        |
//                                        V
//                                        OS 
//                                        |
//                                        |
//                                        V
//                                       Disk

