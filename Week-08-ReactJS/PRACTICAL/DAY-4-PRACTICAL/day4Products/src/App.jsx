import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import ProtectedRoute from "./pages/ProtectedRouteFile";


export default function App(){
    return(
    <BrowserRouter>
      
       <NavBar/>

       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/products" element={<Products/>}/>

           {/* Dynamic route */}
         <Route path="/products/:id" element={<ProductsDetail/>}/>

         <Route  element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
         </Route>

         <Route path="*" element={<h1>Page Not Found</h1>}/>

       </Routes>
    </BrowserRouter>

    )
}

