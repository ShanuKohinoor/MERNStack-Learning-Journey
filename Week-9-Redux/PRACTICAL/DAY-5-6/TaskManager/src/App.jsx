import { Routes,Route } from "react-router-dom"
import Dashboard from "./pages/DashBoard"
import { Navigate } from "react-router-dom"
import { lazy,Suspense } from "react"
const Login = lazy(()=> import("./pages/Login"))
import Protected from "./components/Protected"

export default function App(){
  return(
   <Suspense fallback={<h1>Loading.....</h1>}>
    <Routes>
      <Route path="/" element={<Navigate to = "/login"/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={
        <Protected>        
           <Dashboard/>
        </Protected>
      }/>
    </Routes>

    </Suspense>
  )
}