import { Link } from "react-router-dom";
import { useState } from "react"

const NavBar = () => {
    let [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(prev => !prev)
    }

    return (
        <header>
            <nav className="navBar">
                <h1><Link to={"/"}>THE DESIGN PROJECT</Link></h1>
                <ul>
                    <li><Link to={"/recs"}>Weekly Recommendations</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                </ul>
            </nav>
            <button className={`burger `} onClick={toggleMenu}>{menuOpen ? "Close" : "Open"}</button>
            <nav className={`menuNav ${menuOpen ? "showMenu" : ""}`}>
                <ol>
                    <li><Link to={"/recs"}>Weekly Recommendations</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li onClick={toggleMenu}><Link to={"/"}>Back</Link></li>
                </ol>
            </nav>
        </header>
    );
}

export default NavBar;