import { Link } from "react-router-dom";
import { useState } from "react";
import back from "../assets/img/back.svg";
import burger from "../assets/img/burger.svg"

const NavBar = () => {
    let [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(prev => !prev)
    }

    return (
        <header>
            <h1><Link to={"/"}>THE DESIGN PROJECT</Link></h1>
            <nav className={`navBar`}>
                <ul>
                    <li><Link to={"/recs"}>Weekly Recommendations</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                </ul>
            </nav>
            <img src={burger} alt={"burger menu"} className={`burger`} onClick={toggleMenu} />
            <nav className={`menuNav ${menuOpen ? "showMenu" : ""}`}>
                <ol>
                    <li><Link to={"/recs"}>Weekly Recommendations</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <Link to={"/"}><li onClick={toggleMenu}><img src={back} alt={"back arrow"} className="backArrow" /></li></Link>
                </ol>
            </nav>
        </header>
    );
}

export default NavBar;