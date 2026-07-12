  // Day 3 Task
  // ----------
  
    // • Fetch products from a public API.
    // • Display loading message.
    // • Handle error properly.
    // • Create a reusable custom hook for API fetching.




    import { useState,useEffect } from "react";
    import axios from "axios";
    

    function useProducts(){
        const [products,setProducts] = useState([]);
        const [loading,setLoading] = useState(true);
        const [error,setError] = useState(null)


         const productsList = async()=>{
            setLoading(true)
            setError(null)

             try{
                const res = await axios.get('https://fakestoreapi.com/products')
                setProducts(res.data)
             } catch(err){
                setError('Something went wrong')
             } finally{
                setLoading(false)
             }

         }


              useEffect(()=>{
                productsList()
              },[])


        return {products,loading,error,productsList}
    }



    export default useProducts;




