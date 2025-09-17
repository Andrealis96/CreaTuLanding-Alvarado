import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
    const { cart, clearCart } = useContext(CartContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
        <h2>Mi Carrito</h2>
        {cart.map(item => (
            <CartItem key={item.id} item={item} />
        ))}
        <hr />
        <h4>Total: ${totalPrice}</h4>
        <div className="d-flex gap-3 mt-3">
            <button className="btn btn-danger" onClick={clearCart}>
            Vaciar carrito
            </button>
            <Link to="/" className="btn btn-secondary">Seguir comprando</Link>
            <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
        </div>
        </div>
    );
}

export default Cart;
