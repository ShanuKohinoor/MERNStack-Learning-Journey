//                SECURITY
//                --------



// MongoDB security has three main pillars:-

//   1) Authentication :– Verify who is accessing the database.
//        * Use --auth when starting the server in production.

//   2) Authorization (Roles & Permissions) :– Determines what the user can do once logged in.
//       * read :- Read-only access to a database
//       * readWrite :- Read and write access
//       * dbAdmin :- Manage indexes, users, and collections
//       * root :- Full administrative access
//     - we can create roles with specific privileges using db.createRole().


//   3) User Management :– Create and manage users with proper roles.
//       * View users: show users
//       * Delete user: db.dropUser("username")
//       * Create user: db.createUser({...})