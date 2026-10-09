//                Environment Variables
//                ---------------------

// Environment variables are values stored outside our React code
//         * used to keep important configuration  settings

// instead of writing API URL inside code like this,
// const api = "https://api.com"

// Store it outside in .env file like this,
//        REACT_APP_API_URL=https://api.com

//use:-
//    * To avoid hardcoding values
//         - So,we don't want to write values everywhere in code.

//    * Easy to change between environments (dev/prod)
//         - If API changes:
//              * change only .env file
//              * no need to touch thr code

//    * Different environments
//          - Development (our laptop)
//          - Production (live website)

//    * Better security and flexibility


// We can access/use in React like process.env.REACT_APP_API_URL


// Rules:
// * Must start with REACT_APP_
// * Must restart server after changes
//    - npm start


// Used for:
// * API URLs
// * App config
// * Environment settings


// Benefits:
// * Cleaner code
// * Easy configuration change
// * Better project structure



// Definition:- It is a way to store configuration values outside the code,so we can easily change them without modifying the code.