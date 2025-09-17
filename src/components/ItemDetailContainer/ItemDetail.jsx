import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
    const { cart, addToCart } = useContext(CartContext);

    if (!product) return <p className="text-center">Producto no encontrado</p>;

    // ⚡ inicializa con la cantidad que ya está en el carrito
    const itemInCart = cart.find(item => item.id === product.id);
    const initialCount = itemInCart?.quantity ?? 1;

    const handleAdd = (quantity) => {
        addToCart(product, quantity);
    };

    return (
        <div className="card p-3 text-center">
            {product.pictureUrl && (
                <img
                    src={product.pictureUrl}
                    alt={product.title}
                    className="card-img-top img-fluid mb-3 w-50 mx-auto d-block"
                />
            )}
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>${product.price}</h4>

            <p>Cantidad actual en carrito: {itemInCart?.quantity ?? 0}</p>

            <ItemCount stock={product.stock ?? 10} initial={initialCount} onAdd={handleAdd} />
        </div>
    );
}

export default ItemDetail;
