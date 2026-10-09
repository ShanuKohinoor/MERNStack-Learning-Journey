
import { Link } from "react-router-dom"
import './NavBar.css'
import { FaShoppingCart } from "react-icons/fa"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { SearchContext } from "../context/SearchContext"
import { CartContext } from "../context/CartContext"



export default function NavBar(){

    const { isLoggedIn, logout } = useContext(AuthContext);
    const {search,setSearch} = useContext(SearchContext)
    const {cart} = useContext(CartContext)
 
    const cartCount = isLoggedIn
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;    
  
  const handleLogout = () => {
        logout();              
    };


    return(
        <nav className="nav">
             <h2 className="logo">HomeNesto</h2>
           
             <div className="middleNav">
                <div className="searchBar">
                    <input type="search" placeholder="Search a product..." value={search}
                    onChange={(e)=>setSearch(e.target.value)}/>
                </div>
             </div>

            <div className="navLinks">
                <Link to="/">Home</Link>

                <Link to="/cart" className="cartIcon">
                <FaShoppingCart />
                {cartCount >0 && <span className="cartBadge">{cartCount}</span>}
                </Link>
                {
                isLoggedIn ?
                    <button onClick={handleLogout} className="logoutBtn">LogOut</button>
                    : 
                <Link to= '/login'>Login</Link>
                }
            </div>
        </nav>
    )

}