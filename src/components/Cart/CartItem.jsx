import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartItem({ item }) {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="d-flex justify-content-between align-items-center border p-2 my-2">
        <div className="d-flex align-items-center gap-3">
            <img 
            src={item.pictureUrl} 
            alt={item.title} 
            style={{ width: "80px" }} 
            />
            <div>
            <h5>{item.title}</h5>
            <p className="mb-0">Cantidad: {item.quantity}</p>
            <p className="mb-0">Precio: ${item.price}</p>
            <p className="mb-0 fw-bold">Subtotal: ${item.price * item.quantity}</p>
            </div>
        </div>
        <button 
            className="btn btn-sm btn-danger"
            onClick={() => removeFromCart(item.id)}
        >
            Eliminar
        </button>
        </div>
    );
}

export default CartItem;
