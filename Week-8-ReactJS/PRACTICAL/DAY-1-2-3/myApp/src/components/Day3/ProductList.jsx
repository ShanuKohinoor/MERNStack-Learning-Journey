import useProducts from "../../hooks/Day3Products.js";

import './ProductList.css'

 function Products(){

      const {products,loading,error} = useProducts();

    return(
        <div className="container">
            <h1>Products List</h1>
            
            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}

            <ul>
                {products.slice(0,10).map((product)=>(
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </ul>
        </div>
    )
 }



 export default Products;