import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function Protected({children}){
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

    if(!isLoggedIn){
        return <Navigate to='/' />
    }

    return children;
}

