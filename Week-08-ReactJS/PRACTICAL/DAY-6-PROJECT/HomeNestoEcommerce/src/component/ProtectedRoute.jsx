import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function Protected(){

   const {isLoggedIn} = useContext(AuthContext)

   return(
      isLoggedIn ? <Outlet/> : <Navigate to= '/login'/>
   )
}