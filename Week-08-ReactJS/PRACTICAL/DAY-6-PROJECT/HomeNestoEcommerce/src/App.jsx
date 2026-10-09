
import NavBar from "./component/NavBar"
import { lazy,Suspense } from 'react'

import { Routes,Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Protected } from "./component/ProtectedRoute"

import { Home } from "./pages/Home"

// Lazy Loading Pages
const Login= lazy(()=>import("./pages/Login"))
const SignUp =lazy(()=>import ("./pages/SignUpPage"))
const Cart = lazy(() => import("./pages/Cart"));
const ProductCardDetail = lazy(() =>import("./pages/ProductCardDetails"));



export default function App(){
   const [data,setData] = useState([])
   const [loading,setLoading] = useState(true)
   const [error,setError] = useState('')


   
   useEffect(()=>{
    
     axios.get("https://dummyjson.com/products")
    .then((res)=>{
      setData(res.data.products)
      setLoading(false)
     })
     .catch((err)=>{
      setError(err.message || 'Something went wrong')
      setLoading(false)
     })
   },[]) 


   if(loading)
     return <h1>Loading...</h1>
   if(error)
     return <p>{error}</p>

   
  return(
    <div>
      <NavBar/>
      
      <Suspense fallback={<h2>Loading Page....</h2>}>
          <Routes>
            <Route path="/" element={<Home products={data}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route element={<Protected/>}>
                  <Route path="/cart" element={<Cart/>}/>   
            </Route>
            <Route path="/product/:id" element={<ProductCardDetail/>}/>
          </Routes>

      </Suspense>

    </div>
  )
}

