import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function ItemDetail({ product }) {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    if (!product) return <p className="text-center">Producto no encontrado</p>;

    // Buscar si ya está en el carrito
    const itemInCart = cart.find(item => item.id === product.id);
    const quantityInCart = itemInCart?.quantity ?? 0;

    return (
        <div className="card p-3 text-center">
        {product.pictureUrl && (
            <img
            src={product.pictureUrl}
            alt={product.title}
            className="card-img-top img-fluid mb-3 w-50 mx-auto d-block"
            />
        )}

        <h3 className="fw-bold text-danger">{product.title}</h3>
        <p>{product.description}</p>
        <h4 className="fw-bold">${product.price.toFixed(2)}</h4>

        <p>Cantidad actual en carrito: {quantityInCart}</p>

        {/* Controles de cantidad */}
        <div className="d-flex justify-content-center align-items-center gap-2">
            <button
            className="btn btn-warning"
            onClick={() => removeFromCart(product.id)}
            disabled={quantityInCart === 0} // deshabilita si no hay nada
            >
            ➖
            </button>

            <span className="fw-bold">{quantityInCart}</span>

            <button
            className="btn btn-warning"
            onClick={() => addToCart(product, 1)}
            >
            ➕
            </button>
        </div>

        {/* Navegación */}
        <div className="mt-3 d-flex justify-content-center gap-3">
            <Link to="/cart" className="btn btn-danger fw-bold">Ir al carrito</Link>
            <Link to="/" className="btn btn-danger fw-bold">Seguir comprando</Link>
        </div>
        </div>
    );
}

export default ItemDetail;
