import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
    const { cart, clearCart } = useContext(CartContext);

    // 🔹 Totales
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    // 🔹 Confirmación al vaciar carrito
    const handleClear = () => {
        if (window.confirm("¿Seguro que quieres vaciar el carrito?")) {
            clearCart();
        }
    };

    if (cart.length === 0) {
        return (
            <div className="text-center my-5">
                <h3>Tu carrito está vacío 😢</h3>
                <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-danger saludo-oleo fs-1">🛒 Mis Compras</h2>

            {/* Lista de productos */}
            {cart.map(item => (
                <CartItem key={item.id} item={item} />
            ))}

            <hr />

            {/* Totales */}
            <h5>
                <span className="fw-bold text-warning">Cantidad de productos:</span> <span className="fw-bold">{totalQuantity}</span>
            </h5>

            <h4>
                <span className="fw-bold text-warning">Total:</span> <span className="fw-bold">${totalPrice.toFixed(2)}</span>
            </h4>

            {/* Acciones */}
            <div className="d-flex gap-3 mt-3">
                <button className="btn btn-danger" onClick={handleClear}>
                    Vaciar carrito
                </button>
                <Link to="/" className="btn btn-danger">Seguir comprando</Link>
                <Link to="/checkout" className="btn btn-danger">Finalizar compra</Link>
            </div>
        </div>
    );
}

export default Cart;
