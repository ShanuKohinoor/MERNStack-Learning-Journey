import { useParams } from "react-router-dom";
import "./ProductCardDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { FaShoppingCart } from "react-icons/fa";

export default function ProductCardDetail() {
  const {addToCart} = useContext(CartContext)
  const { id } = useParams();

  const [data,setData]= useState(null)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState('')

   useEffect(()=>{
      if (!id) return;
     axios.get(`https://dummyjson.com/products/${id}`)
     .then((res)=>{
      setData(res.data)
      setLoading(false)
     }).catch((err)=>{
      setError('Something went wrong')
      setLoading(false)
     })
   },[id])

   if(loading) return <p className="loading">Loading product...</p>;
   if(error)  return <p>{error}</p>
   if(!data) return <p>No product Found</p>

  return (
    <div 
         className="detailPage"
    >

      {/* Image Section */}
      <div
          className="imageSection"
      >

        <img src={data.thumbnail} alt={data.title} />
      </div>

      {/* Detail Section*/}
      <div
          className="infoSection"
        >

        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <h3 className="price">£ {data.price}</h3>

        <button
          className="cartBtn"
          onClick={() => addToCart(data)}
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>

  );
}