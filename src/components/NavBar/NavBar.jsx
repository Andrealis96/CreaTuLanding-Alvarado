import CartWidget from './CartWidget';
import logoCarbonLenos from '../../assets/iconos/logoCarbonLenos.png';
import { FaHamburger, FaPizzaSlice, FaHome, FaInfoCircle } from "react-icons/fa";
import { GiFrenchFries, GiSodaCan, GiSandwich } from "react-icons/gi";
import { BiRestaurant } from "react-icons/bi";
import { Link } from "react-router-dom";

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

            {/* Links fijos a la derecha */}
            <div className="d-flex align-items-center gap-3">
                {/* Ícono Home */}
                <Link to="/" className="text-dark ">
                    <FaHome size={28} />
                </Link>

                {/* Ícono Abous */}
                <Link to="/about" className="text-dark">
                    <FaInfoCircle size={24} />
                </Link>

                {/* Carrito fijo arriba a la derecha */}
                <Link to="/cart" className="text-dark">
                <CartWidget />
                </Link>
            </div>

            {/* Menú lateral */}
            <div 
                className="offcanvas offcanvas-start text-bg-warning" 
                tabIndex="-1" 
                id="menuLateral" 
                aria-labelledby="menuLateralLabel"
            >
                {/* Link al Home */}
                <div className="offcanvas-header">
                    <Link 
                        to="/"
                        className="offcanvas-title text-decoration-none text-danger fw-bold fs-1 logo-text" // estilos para que se vea igual
                        id="menuLateralLabel"
                    >
                        Home
                    </Link>
                    {/* Botón de cerrar */}
                    <button 
                        type="button" 
                        className="btn-close btn-close-dark" 
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close"
                    ></button>
                </div>


                {/* GATEGORIAS */}
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-4">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2 fw-bold" to="/category/hamburguesas">
                                <FaHamburger size={28} /> Hamburguesas
                            </Link>
                        </li>
                        <li className="nav-item fs-4">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2 fw-bold" to="/category/sanduches">
                                <GiSandwich size={28} /> Sánduches
                            </Link>
                        </li>
                        <li className="nav-item fs-4">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2 fw-bold" to="/category/salchipapas">
                                <GiFrenchFries size={28} /> Salchipapas
                            </Link>
                        </li>
                        <li className="nav-item fs-4">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2 fw-bold" to="/category/combos">
                                <FaPizzaSlice size={28} /> Combos
                            </Link>
                        </li>
                        <li className="nav-item fs-4">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2 fw-bold" to="/category/bebidas">
                                <GiSodaCan size={28} /> Bebidas
                            </Link>
                        </li>
                        <li className="nav-item fs-4">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2 fw-bold" to="/category/adicionales">
                                <BiRestaurant size={28} /> Adicionales
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar; 
