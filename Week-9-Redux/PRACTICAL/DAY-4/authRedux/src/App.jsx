
import { useDispatch } from "react-redux"
import { login } from "./features/auth/authSlice"
import { useEffect } from "react"
import Login from "./pages/Login"
import DashBoard from "./pages/DashBoard"

import { Routes,Route } from "react-router-dom"
import Protected from "./components/Protected"


export default function App(){

  const dispatch = useDispatch()

  useEffect(()=>{
         const  token = localStorage.getItem('token')
         if(token){
          dispatch(login({token}))
         }
  },[])
  return(
     <>
        <Routes>
          <Route  path="/" element={<Login/>}/>
          {/* protected route */}

          <Route path="/dashboard" 
            element={
              <Protected>
                <DashBoard/>
              </Protected>
            }
          />
        </Routes>
     </>
  )
}