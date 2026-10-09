import { FaShoppingCart } from "react-icons/fa";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div
      className="productCard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`} className="imgBox">
        <img src={product.thumbnail} alt={product.title} />
      </Link>

      <h2 className="title">{product.title}</h2>

      <div className="priceAndCart">
        <p className="price">£{product.price}</p>

        <motion.button
          className="cartBtn"
          onClick={() => addToCart(product)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaShoppingCart />
        </motion.button>
      </div>
    </motion.div>
  );
}