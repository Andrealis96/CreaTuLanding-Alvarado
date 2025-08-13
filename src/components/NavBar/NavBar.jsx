import CartWidget from '../CartWidget';
import logoCarbonLenos from '../../assets/iconos/logoCarbonLenos.png';
import { PiHamburgerBold } from "react-icons/pi";
import { FaReceipt } from "react-icons/fa"; 
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-warning px-4 position-relative">
            {/* Logo que abre el menú */}
            <a  
                href="#"
                className="navbar-brand p-0" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#menuLateral"
                aria-controls="menuLateral"
                style={{ cursor: 'pointer' }}
                onClick={(e) => e.preventDefault()}
            >
                <img 
                    src={logoCarbonLenos} 
                    alt="logo" 
                    width={60}
                    height={60}
                    className="d-inline-block align-text-top"
                />
            </a>

            {/* Carrito fijo arriba a la derecha */}
            <CartWidget />

            {/* Menú lateral */}
            <div 
                className="offcanvas offcanvas-start text-bg-warning" 
                tabIndex="-1" 
                id="menuLateral" 
                aria-labelledby="menuLateralLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="menuLateralLabel">MENÚ</h5>
                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                                <PiHamburgerBold size={24} /> PRODUCTOS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                                <FaReceipt size={24} /> RESUMEN
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar; 
