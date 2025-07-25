import { useState } from 'react';
import CartWidget from './CartWidget';
import logoCarbonLenos from '../assets/iconos/logoCarbonLenos.png';
import { PiHamburgerBold } from "react-icons/pi";
import { FaReceipt } from "react-icons/fa"; 

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning px-4">
            <button
                className={`navbar-brand btn btn-link p-0 ${menuOpen ? 'rotate-logo' : ''}`}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-controls="navbarNav"
                style={{ cursor: 'pointer' }}
            >
            <img 
                src={logoCarbonLenos} 
                alt="logo" 
                width={50}
                height={50}
                className="d-inline-block align-text-top me-2"
            />
            </button>

            <div
                className={`collapse navbar-collapse bg-Warning p-3 ${menuOpen ? 'show' : ''}`}
                id="navbarNav"
            >
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link text-danger d-flex align-items-center gap-2" href="#">
                    <PiHamburgerBold size={24} color = "bg-dark" /> MENÚ
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger d-flex align-items-center gap-2" href="#">
                    <FaReceipt size={24} color = "bg-dark" /> RESUMEN
                    </a>
                </li>
                </ul>
            </div>  
            <CartWidget />
        </nav>
    );
};

export default NavBar;
