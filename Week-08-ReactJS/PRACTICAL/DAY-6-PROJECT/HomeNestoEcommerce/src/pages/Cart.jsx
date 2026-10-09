import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";


export default function Cart() {
  const { cart, addToCart, removeFromCart,decreaseFromCart } = useContext(CartContext);
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  // total price includes quantity
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const filteredCart = cart.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

    const totalItems = filteredCart.reduce(
        (sum, item) => sum + item.quantity,0
    );

  return (
    <div className="cartPage">

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="emptyCart">
          <h2>Your HomeNesto Cart is Empty 🛒</h2>
          <p>Looks like you haven't added anything yet</p>

          <div className="emptyButtons">
            <button onClick={() => navigate("/")}>
              Continue Shopping
            </button>
          </div>
        </div>

      ) : filteredCart.length === 0 ? (
        /* SEARCH NO MATCH */
        <div className="emptyCart">
          <h2>No items found 🔍</h2>
          <p>No products match your search</p>

          <div className="emptyButtons">
            <button onClick={() => setSearch("")}>
              Clear Search
            </button>
          </div>
        </div>

      ) : (
        <div className="cartContainer">

          {/* LEFT SIDE */}
          <div className="cartItems">

              {filteredCart.map((item) => (
                <div
                  className="cartCard"
                  key={item.id}
                >

                  {/* IMAGE */}
                  <img src={item.thumbnail} alt={item.title} />

                  {/* INFO */}
                  <div className="cartInfo">
                    <h3>{item.title}</h3>

                    {/* PRICE × QTY */}
                    <p className="price">
                      £{item.price} × {item.quantity}
                    </p>

                    <p className="subtotal">
                      Subtotal: £{item.price * item.quantity}
                    </p>
                  </div>

                  <button className="deleteBtn" onClick={() => removeFromCart(item.id)}>
                    <FaTrash />
                  </button>

                  {/* QUANTITY*/}
                  <div className="qty">

                    <button onClick={() => decreaseFromCart(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => addToCart(item)}>
                      +
                    </button>

                  </div>

                </div>
              ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="cartSummary">

            <h2>Order Summary</h2>

            <p>Total Items: {totalItems}</p>

            <h3>Total: £{totalPrice.toFixed(2)}</h3>

            <button className="checkoutBtn">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
}