import { useState, useEffect, createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";


export const CartContext = createContext();

export function CartProvider({ children }) {
  const { userEmail } = useContext(AuthContext);
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // ADD TO CART 
  const addToCart = (product) => {
    if (!userEmail) {
      navigate("/login");
      return;
    }

    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // REMOVE FROM CART

  const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};

// DECREASE FROM CART
  const decreaseFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (item.quantity || 1) - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // LOAD CART 
  useEffect(() => {
    if (!userEmail) {
      setCart([]);
      setIsLoaded(true);
      return;
    }

    const savedCart = localStorage.getItem(`cart_${userEmail}`);

    try {
      const parsed = savedCart ? JSON.parse(savedCart) : [];

      const normalized = parsed.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }));

      setCart(normalized);
    } catch (err) {
      setCart([]);
    }

    setIsLoaded(true);
  }, [userEmail]);

  // SAVE CART 
  useEffect(() => {
    if (!userEmail || !isLoaded) return;

    localStorage.setItem(
      `cart_${userEmail}`,
      JSON.stringify(cart)
    );
  }, [cart, userEmail, isLoaded]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}