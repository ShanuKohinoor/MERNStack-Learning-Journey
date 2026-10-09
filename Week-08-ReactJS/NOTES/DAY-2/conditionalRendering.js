//                         Conditional Rendering
//                        ----------------------


// It is showing different UI based on condition true or false.

//   Eg:- if something is true--> show that UI
//        if it is false, show something else
//                (Eg:- If logged in --> show Dashboard ,
//                       else show login page again)




//  1) if Statement:-  (if...else)
//     ------------
//      * Used outside JSX

//         function LoginApp(){
//            let isLoggedIn = true;
//          
//            if(isLoggedIn){
//               return <h1>Welcome User</h1>      //  true :- Welcome User
//            } else {
//               return <h1>Please Login</h1>       // false :- Please Login
//            }
//         }

//    we dont need <div> here like conditional because, if..else is outside JSX 
//       * We are returning only one at a time.
//       *  <div> is only needed when writing JSX (inside return)


//   2) Ternary operator :- (? true condition : false condition)
//      ----------------
//      * Used inside JSX

//        function LoginApp(){
//            let isLoggedIn = true;
//            return (
//              <div>
//               { isLoggedIn ? <h1> Welcome User </h1> : <h1> Please Login </h1>  }
//              </div>
//            )

//        }


//  3) Only true condition :-  (&&)
//     --------------------
// *  Used for show or hide
// * && is used when we only want to Show something if condition is true.
//             - If false --> nothing is rendered.


//            function LoginApp(){
//              let isLoggedIn = true;
//       
//              return (
//                 <div>
//                    {isLoggedIn && <h1> Welcome User </h1>}           // If true show UI otherwise dont show anything
//                 </div>
//              ) 
//            }



// 4) multiple conditions :- 
//    -------------------    

//   Eg  1:-
// function LoginApp() {
//   let role = "admin";

//   if (role === "admin") {
//     return <h1>Admin Panel</h1>;
//   } 
//   else if (role === "user") {
//     return <h1>User Dashboard</h1>;
//   } 
//   else {
//     return <h1>Guest Page</h1>;
//   }
// }                                             // we cant write if else inside jsx, but we can use
                                                 //    before return like this above code.This is called
                                                 //        'Early return pattern'


//  Eg 2:- Nested ternary
//     function LoginApp(){
//        let role = 'admin'
//       
//         return(
//           <div>
//            {
//              role === 'admin' 
//                ? <h1>Admin Panel</h1>
//                : role === 'user' 
//                   ? <h1>User Dashboard</h1>
//                   : <h1>Guest Page</h1>          
//           }
//           </div>
//         )
//      }

                          //  admin --> Admin Panel
                          //  user --> User Dashboard
                          //  else --> Guest Page



// 5) Conditional Button
//    ------------------

//   Showing different button text or buttons based on a condition

// Eg 1:-
//  let isLoggedIn = true;
//     return (
//       <button>
//          {isLoggedIn ? "Logout" : "Login"}
//       </button>
//   );

                         //  If user is logged in --> show Logout button  
                         //  If not logged in --> show Login button


// Eg 2:-
//  let isAdmin = true;

//   return (
//     <div>
//       {isAdmin && <button>Delete User</button>}
//     </div>
//   );                                    // Delete user button appears