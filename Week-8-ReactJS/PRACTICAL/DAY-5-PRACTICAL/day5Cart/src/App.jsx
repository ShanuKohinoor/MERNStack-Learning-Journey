
import { useState } from 'react'
import { lazy,Suspense } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Modal from './components/Portal'


import './App.css'
const Home= lazy(()=>import ('./pages/HomePage'))       //  Lazy Loading

const Cart = lazy(()=>import  ('./pages/CartPage'))


import { CartContext } from './context/CartContext'


  export default function App(){
       const [page,setPage] = useState('home')
       const [cart,setCart] = useState([])

    return(
     <CartContext.Provider value={{cart,setCart}}>
      <Suspense fallback={<h1>Loading...</h1>}>
           {page ==='home' ? <Home/>  : <Cart/>}
      </Suspense>
        <Modal/>

        <div className="buttonsContainer">
          <button onClick={()=>setPage('home')}>Home</button>
          <button onClick={()=>setPage('cart')}><FaShoppingCart/></button>
        </div>

     </CartContext.Provider>
    )
  }
