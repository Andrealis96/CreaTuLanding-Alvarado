import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa";

function CartItem({ item }) {
    const { addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div className="d-flex justify-content-between align-items-center border p-2 my-2">
        {/* Imagen e info */}
        <div className="d-flex align-items-center gap-3">
            <img
            src={item.pictureUrl}
            alt={item.title}
            className="img-cart w-25"
            />
            <div>
            <h5>{item.title}</h5>
            <p className="mb-0">Precio unitario: ${item.price}</p>
            <p className="mb-0 fw-bold">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
            </p>
            </div>
        </div>

        {/* Controles de cantidad */}
        <div className="d-flex align-items-center gap-2">
            <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => removeFromCart(item.id)}
            >
            <FaMinus />
            </button>

            <span className="fw-bold">{item.quantity}</span>

            <button
            className="btn btn-sm btn-outline-success"
            onClick={() => addToCart(item, 1)}
            >
            <FaPlus />
            </button>
        </div>
        </div>
    );
    }

export default CartItem;
