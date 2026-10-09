
 import { useParams } from "react-router-dom"

export default function ProductsDetail(){

    const {id} = useParams()

     const products = [
        {id: '1', name: 'Air Fryer', price:'150'},
        {id: '2', name: 'Electric Kettle', price:'35'},
        {id: '3', name: 'Vacuum Cleaner', price: '200'},
        { id: '4', name: "Dining Table Set", price: '500' },
     ]

       const product= products.find((product)=>product.id === id)

    return(
        <div>
            <h1>Product Details</h1>
            {product 
            ? <h2>Product ID: {product.id} <br/> Product Name:{product.name} <br/> Product Price: {product.price}</h2> 
            : <p>Product Not Found</p>}
        </div>
    )
}