//                       SCHEMA VALIDATION
//                       -----------------

// Schema Validation ensures that documents inserted into a collection follow specific structure and data type rules.


// Schema is structure or rules of data stored in a collection.

//          User
//             name
//             age
//             email
//  Setting rules for our data so MongoDB only allows correct data in a collection.
//  To ensure that all documents follow a proper structure, 
//  MongoDB schema validation is applied using $jsonSchema.

//  With different datatypes,database will be messy.So use schema validation.
//     * Setting rules for documents before inserting into a collection.
//     * MongoDB will check the document before saving.
//     * If rules are broken --> insertion fails.

// Create rule in MongoDB with $jsonSchema


// db.createCollection("users", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",                            // document must be an object
//       required: ["name", "age"],                     // fields that must exist
//       properties: {
//         name: {
//           bsonType: "string",
//           description: "must be a string"             // rules for each field
//         },
//         age: {
//           bsonType: "int",
//           minimum: 0,
//           description: "must be a positive number"
//         }
//       }
//     }
//   }
// })



// For already existing collection:-

//           db.runCommand({
//            collMod: 'students',
//              validator:{
//                jsonSchema:{
//                  bsonType:'object',
//                    required:['name','course','joiningDate'],
//                    properties:{
//                       name:{
//                         bsonType:'String',
//                         description: 'Name must be a string and is required'
//                       },
//                       course:{
//                         bsonType:'objectId',
//                         decsription: 'Course must be objectId and is required'
//                       },
//                       joiningDate:{
//                         bsonType: 'date',
//                         description: 'Joining date must be date and is required'
//                       },
//                       fees:{
//                         bsonType:'String',
//                         enum:['pending','paid'],
//                         description:'Fess must be either pending or paid'
//                       },
//                       status:{
//                        bsonType: 'String',
//                        description: 'Status must be a string'
//                       }
//                     }
//                  }
//          },
//           validationLevel: 'strict'       
//        })


//                       Client inserts document
//                                 |
//                                 |
//                                 v
//                    MongoDB checks Schema Validation
//                                 |
//              -------------------------------------------------
//              | Eg:-                                          |  Eg:-
//              | {                                             |   {
//              |   name: 'Alice',                              |     name: 'Alice'
//              |   age: 25                                     |     age: twenty five
//              | }                                             |   }
//              |                                               |
//          Rules Valid                                  Rules Invalid
//              |                                               |
//              |                                               |
//              v                                               v
//        Document Saved                                 Insert Rejected