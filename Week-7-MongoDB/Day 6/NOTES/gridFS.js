//                            GridFS

// GridFS is a way to store very large files in MongoDB that cannot fit in a single document.


// In MongoDB, documents normally have size limit.
//    * Maximum size limit is 16 MB
//   * When we try to store large files like video,large image,pdf,audio etc, MongoDB cannot store in a single document.
//   * To sove this MongoDB uses gridFS.

// GridFS splits files into chunks of 255 KB by default.

//  GridFS splits a large file into small pieces called chunks.
//   Eg:- video file size is 100MB, MongoDB splits into chunks. like,chunk 1,chunk 2,chunk 3 etc...
//            * Each chunk is stored as separate document.

// When GridFS stores files, MongoDB creates two collections.

// fs.files :-  Stores file information
// fs.chunks :- Stores file pieces



//                        User uploads large file
//                                 |
//                                 |
//                                 v
//                    MongoDB GridFS splits file
//                                 |
//                                 |
//              -------------------------------------------------
//             |                                                 |
//             |              STORE IN DATABASE                  |
//             v                                                 v
//       Chunks stored in fs.chunks                     File info stored in fs.files
//             |                                                 |
//             |                                                 |
//              -------------------------------------------------
//                                 |
//                                 |
//                                 v
//               When requested(when someone downloads) 
//                                 | chunks retrieved and combined
//                                 |
//                                 v
//                      Original file returned