//                       TIME SERIES COLLECTION
//                       ----------------------

// Special type of collection designed to store time-based data efficiently.
// Eg:-
//   * Temperature reading every minute
//   * Heart rate every second
//   * Patient monitoring data
//   * Server CPU monitoring
//   * Website traffic logs



// Every record has value+ time
//  Eg:- 
//      First reading:-
//         Temperature = 25°C
//         Time = 10:00

//      Second reading:-
//         Temperature = 26°C
//         Time = 10:01

//      Third reading:-
//         Temperature = 27°C
//         Time = 10:02

// It looks like:-

//        Time      Temperature
//        10:00        25
//        10:01        26
//        10:02        27

// This type of data is called time series data.

// It was introduced in MongoDB 5.0.


// Instead of storing each document separately like normal collections,
// MongoDB:

//   * Automatically groups data
//   * Compresses similar data
//   * Stores data efficiently in buckets



// Normal Collection
// ------------------

// If we insert time-based data in a normal collection:

//   * MongoDB stores each document separately
//      Eg:-  Doc1
//            { temp:25, time:10:00 }

//           Doc2
//            { temp:26, time:10:01 }

//           Doc3
//             { temp:27, time:10:02 }

//  MongoDB stores like:- 
//            Doc1
//            Doc2
//            Doc3

//   * Takes more storage space
//   * Slower for time-based queries
//   * No internal optimization for time data


// Instead of storing each document separately, MongoDB groups data together. This group is called a bucket.


// Time Series Collection
// ----------------------

// When time-based data is inserted:

//   * MongoDB groups documents internally into buckets
//   * Compresses similar values
//   * Reduces storage usage
//   * Improves query performance
//   * Automatically manages indexing on the time field


// Instead of storing documents one by one,internally, MongoDB groups them into time buckets.


// Eg:-

// Sensor sends data every minute:

//      10:00 --> 25°C
//      10:01 --> 26°C
//      10:02 --> 27°C
//      10:03 --> 25°C


// MongoDB stores them like this internally:

//     Bucket 1
//       10:00
//       10:01
//       10:02

//     Bucket 2
//       10:03
//       10:04
//       10:05




// Important Fields
// ----------------
//  When creating a Time Series collection,3 impotant fields are there.

// a) timeField :- This tells MongoDB which field stores time.
// Eg:
//           {
//               temperature: 27,
//               timestamp: "2026-03-05T10:30:00"
//           }

//        This field helps to 
//           - group documents,
//           - sort time data,
//           - create buckets

// b)  metaField :- This stores information about the data source.

// Example:
//         {
//           sensorId: "sensorA",
//           location: "Room1"
//         }



// c) granularity :- Defines how frequently data is recorded.

// Possible values:
//   seconds
//   minutes
//   hours

//  This helps MongoDB optimize bucket size.


// Eg of Creating Time Series Collection
// -------------------------------------

//           db.createCollection("temperature", {      //Collection name --> temperature
//               timeseries: {
//                 timeField: "timestamp",             // timestamp --> time field
//                 metaField: "sensorId",              // sensorId --> source of data
//                 granularity: "minutes"              // minutes --> data recorded every minute
//              }
//          })



// Eg Document
// ----------------

//            {
//              sensorId: "sensorA",
//              temperature: 28,
//              timestamp: ISODate("2026-03-05T10:30:00Z")
//            }




// Advantages
// ----------

// * Faster queries for time-based data
// * Reduced storage space
// * Automatic data compression
// * Optimized for IoT and monitoring systems
// * Efficient handling of large time datasets












//                             TTL Index(Time to live)

// It deletes documents automatically after a certain time.
// MongoDB itself remove old data automatically without writing delete queries.

// TTL is very useful for Session data, Login tokens, Cache data, Logs, OTP records, Temporary analytics data
// Only works on Date fields, not compound indexes