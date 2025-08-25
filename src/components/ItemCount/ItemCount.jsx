import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="text-center">
        <div className="d-flex justify-content-center align-items-center gap-3 my-3">
            <button className="btn btn-warning" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="btn btn-warning" onClick={increment}>+</button>
        </div>
        
        {/* Botón fijo */}
        <button
            className="btn btn-danger fw-bold"
            onClick={() => onAdd(count)}
        >
            Agregar al carrito
        </button>
        </div>
    );
}

export default ItemCount;
