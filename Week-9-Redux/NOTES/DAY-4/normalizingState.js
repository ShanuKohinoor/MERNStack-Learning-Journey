//                    Normalizing State
//                    -----------------


// If we want to store users in normmaly, we use non-normalized(nested array) like this,

// users: [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" }
// ]

//  But when we want to update anything inside this,we want to loop through array to find user and update it
//         and also want to resave whole array.

// To avoid this, Redux introduce Normalizing state.
//      ie, which means storing data in structured way using IDs for fast access and easy updates

//   we can write like,
//      users: {
//        byId:{                                               // byId:- Quick access using ID
//          1: {id:1, name: 'Anitha'},
//          2: {id:2, name: 'Chithra'},
//          3: {id:3, name: 'Sujitha'},
//          4: {id:4, name: 'Radhikha'}
//        },
//        allIds: [1,2,3,4]                                   // allIds:- List of all users
//      }


// USES:-
// ----
//  * Faster updates
//  * Easier deletion
//  * Better Performance


// Definition:- Normalized state means storing data using IDs and objects
//          instead of nested arrays to make updates fast and simple.


// Redux Toolkits use createEntityAdapter() (which is the advanced version of normalization)