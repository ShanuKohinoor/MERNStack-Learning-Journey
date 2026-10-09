
import { useSelector,useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"





export default function NavBar(){

    const {user,isLoggedIn} = useSelector((state)=>state.userAuth)
    const dispatch = useDispatch()



      return(
<>
        {isLoggedIn?(

        
        <>
         <h1>
              Welcome {user.name}
         </h1>
         <button onClick={()=>dispatch(logout())}>Logout</button>
         </>
         ): (<p>Please Login first</p>

         )
        }

</>
      )
}