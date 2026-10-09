//                                    Day 2 task 3
//               (Create a simple Login Form using controlled components.)

  import { useState } from "react"
  
  import './LoginForm.css'

   function LoginForm(){
    
     const [username,setUsername] = useState('');      //  State
     const [password,setPassword] = useState('');


     const handleSubmit = (e)=>{                 
        e.preventDefault()
     }

    return(
        <form onSubmit={handleSubmit}   className="loginForm">

            <h2 className="loginTitle">Access Your Account</h2>
             {/*username input*/}
            <input
              type="text"
              value={username}                              // react is controlling the input
              onChange={(e)=>setUsername(e.target.value)}   // updates the value when user types
                                                             // if we remove onChnge input becomes read-only.

             />  


             {/*password input*/}
            <input
             type="password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit"> Login </button>
        </form>
    )
   }



   export default LoginForm