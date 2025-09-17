import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);
    return (
        <div className = "position-relative cart-container">
            <FaShoppingCart size = {24} color = "danger" />

            {/* Solo mostrar badge si hay productos */}
            {totalItems > 0 && (
                <span className = " translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                </span>
            )}
        </div>
    );
};

export default CartWidget; 