import { Link } from "react-router"

import "../styles/Navbar.css"

export function Navbar(){
    
    return <nav className="navbar">
        <div className="navbar-brand">SpinMovies</div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}