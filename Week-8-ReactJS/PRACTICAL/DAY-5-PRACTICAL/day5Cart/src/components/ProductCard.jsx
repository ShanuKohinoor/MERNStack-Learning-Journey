
import { memo } from "react"
import './ProductCard.css'
import {FaShoppingCart} from 'react-icons/fa'

function ProductCard({product,addToCart}){    
    return(
        <div className="productCard">
            <img src={product.image} alt={product.name}/>
            <h2>{product.name}</h2>
            <p>{product.price}</p>

            <button onClick={()=>addToCart(product)}><FaShoppingCart/></button>
        </div>
    )
}


export default memo(ProductCard)