import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className = "position-relative cart-container">
            <FaShoppingCart size = {24} color = "danger" />
            <span className = " translate-middle badge rounded-pill bg-danger"> 3 </span>
        </div>
    );
};

export default CartWidget; 