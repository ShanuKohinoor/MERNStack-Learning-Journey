import { useContext } from 'react'

import { CartContext } from '../context/CartContext'
import './CartPage.css'

export default function Cart(){

  const {cart,setCart} = useContext(CartContext)

  const removeFromCart=(IdToRemove)=>{
    const updatedCart = cart.filter((item)=> item.id !== IdToRemove)
    setCart(updatedCart)
  }


    return(
        <div>
            <h1>Cart Page</h1>
            {cart.length === 0 ? <p>Cart is empty</p>: 
            cart.map((item)=>(
              <div key={item.id} className='cartItem'>           {/* can also write key={item,index} instead of key={item.id} */}
                  <img src={item.image} alt={item.name}  className='cartImage'/>
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                  <button onClick={()=>removeFromCart(item.id)}>Remove</button>
              </div>  

            ))}
        </div>
    )
  }












