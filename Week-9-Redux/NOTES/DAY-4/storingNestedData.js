//                                 Storing Nested Data
//                                 ------------------

// It means how we design and keep related data inside the Redux store using objects and arrays.




// Nested data :- Storing data inside another data.
//    Eg:- 
        // user: {
        // id: 1,
        // name: 'A',
        // address: {
        //     city: 'London',
        //     zip: '10001"
        // }
        // }                     Here address and city are nested data inside user data

 // In Redux, we can't directly go deep inside like this, state.user.address.city = 'Paris' to update.
 //           * Because Redux state must be immutable (not directly changed).

// Instead, we normally use:
//          * spread operator (...) manually
//                       OR
//          * Redux Toolkit (which uses Immer internally)

//  Immer which is a library (used inside Redux Toolkit) allows us to write:
//        * state.user.address.city = 'Paris'
//          - But internally it safely creates a copy and updates state correctly.



//Storing nested data means keeping related data inside objects and arrays within the Redux store. 
//   Since Redux state must remain immutable, nested data cannot be updated directly. Traditionally,
//   we use spread operators to create copies of nested objects. In Redux Toolkit,
//    Immer allows us to write mutation-like code while safely performing immutable updates internally.

//Nested data :_ data inside data

// Redux :- never mutate directly

// Redux Toolkit + Immer :- write simple mutation-like code, get immutable updates automatically