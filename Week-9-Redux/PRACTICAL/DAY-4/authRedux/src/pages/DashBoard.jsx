
import { logOut } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function DashBoard(){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = ()=>{
       dispatch(logOut())
       localStorage.removeItem('token')
       navigate('/')
    }
    return(

        <>
        <h1>Welcome to Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}