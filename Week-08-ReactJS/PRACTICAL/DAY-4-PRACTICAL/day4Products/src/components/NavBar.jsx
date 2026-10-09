import { Link } from "react-router-dom";
import './navBar.css'


export default function NavBar(){
    return(
        <nav className="navBar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/login'>Login</Link>
            <Link to='/products'>Products</Link>
        </nav>
    )
}