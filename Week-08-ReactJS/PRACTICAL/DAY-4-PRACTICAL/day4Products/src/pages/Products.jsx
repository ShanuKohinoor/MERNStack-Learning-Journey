import { Link } from "react-router-dom"
import './product.css'

  export default function Products(){

     const products = [
        {id: '1', name: 'Air Fryer', price:'150', image: '/images/Airfryer.jpg'},
        {id: '2', name: 'Electric Kettle', price:'35', image:'/images/ElectricKettle.jpg'},
        {id: '3', name: 'Vacuum Cleaner', price: '200', image:'/images/VaccumCleaner.jpg'},
        {id: '4', name: "Dining Table Set", price: '500',image:'/images/DiningTableSet.jpg'}
     ]


    return(
        <div>
            <h1>Products List</h1>
            <div className="productContainer">
                {products.map((product)=>(
                    <div key={product.id}>
                        {product.image && <img src={product.image} alt={product.name} className="productName"/>}
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </div>    
                ))}

            </div>
        </div>
    )
  }