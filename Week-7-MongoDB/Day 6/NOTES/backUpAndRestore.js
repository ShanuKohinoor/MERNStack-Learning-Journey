//                           BACKUPS 
//                           -------


// When accidently delete a collection,there are two options to get that back.They are:-

// 1. Back up

// 2. Restore

// MongoDB provides tools to safely backup our data and restore it when needed.
//       This is essential for data safety in production environments.


// Back up:-
//   Mongodump creates binary copy of database.
//      - We can backup entire database or specific collection.
//      - Creates .bson files for each collection.
//      - Stored in a safe folder (dump/mydb/).
//      - Output files are stored in .bson (data) and .json (metadata) format.
//  Use binary backups (mongodump) instead of JSON exports for speed and completeness.


//    a) Backup entire database
//      syntax:- 
//             mongdump --db mydb
//                 * Creates folder dump/mydb/ with .bson files for all collections.

//    b) Backup specific collection
//      syntax:-
//             mongodump --db mydb --collection users
//                 * Only backs up the users collection as dump/mydb/users.bson.


//    c) Backup with Authentication
//       syntax:-
//          mongodump --db mydb  --username admin --password  1234 --authenticationDatabase admin
//                 * Needed when MongoDB requires login credentials.









//                         RESTORE
//                         -------


// mongorestore restores data from a backup into MongoDB.
// We can restore entire database or a single collection.
// Optionally, we can replace existing data using --drop.


//   a) Restore entire database
//       syntax:-
//            mongorestore dump/mydb
//               * All collections from the backup will be restored into mydb.

//   b) Restore a single collection
//      syntax:- 
//           mongorestore --db  mydb --collection users dump/mydb/users.bson
//              * Only restores the users collection.

//   c) Restore and overwrite existing data
//       syntax:-
//          mongorestore --drop dump/mydb
//             * --drop deletes existing collections before restoring.
//             * Useful to avoid duplicate data or conflicts.




// Database is restored exactly as it was before ( like at backup time).

// mongodump is for safe backups, where as mongoexport is for data extraction/sharing.