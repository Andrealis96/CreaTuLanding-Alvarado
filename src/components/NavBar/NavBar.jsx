import CartWidget from './CartWidget';
import logoCarbonLenos from '../../assets/iconos/logoCarbonLenos.png';
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
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

            {/* Carrito fijo arriba a la derecha */}
            <CartWidget />

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
                        className="offcanvas-title text-decoration-none text-dark fw-bold fs-2" // estilos para que se vea igual
                        id="menuLateralLabel"
                    >
                        HOME
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
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2" to="/category/hamburguesas">
                                <FaHamburger size={22} /> HAMBURGUESAS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2" to="/category/sanduches">
                                <GiSandwich size={22} /> SÁNDUCHES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2" to="/category/salchipapas">
                                <GiFrenchFries size={22} /> SALCHIPAPAS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2" to="/category/combos">
                                <FaPizzaSlice size={22} /> COMBOS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2" to="/category/bebidas">
                                <GiSodaCan size={22} /> BEBIDAS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center gap-2" to="/category/adicionales">
                                <BiRestaurant size={22} /> ADICIONALES
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar; 
