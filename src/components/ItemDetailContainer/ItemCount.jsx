import { useState } from "react";
import { Link } from "react-router-dom";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial); // ⚡ inicializa con cantidad en carrito
    const [added, setAdded] = useState(false);

    const increment = () => {
        if (count < stock) setCount(c => c + 1);
    };

    const decrement = () => {
        if (count > 1) setCount(c => c - 1);
    };

    const handleAdd = () => {
        onAdd(count);
        setAdded(true); // ⚡ activa los botones al primer click
    };

    if (stock === 0) return <p className="text-center text-danger">Producto sin stock</p>;

    return (
        <div className="text-center">
            {!added ? (
                <>
                    <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                        <button className="btn btn-warning" onClick={decrement}>-</button>
                        <span>{count}</span>
                        <button className="btn btn-warning" onClick={increment}>+</button>
                    </div>
                    <button className="btn btn-danger fw-bold" onClick={handleAdd}>
                        Agregar al carrito
                    </button>
                </>
            ) : (
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <Link to="/cart" className="btn btn-success">Ir al carrito</Link>
                    <Link to="/" className="btn btn-secondary">Seguir comprando</Link>
                </div>
            )}
        </div>
    );
}

export default ItemCount;
