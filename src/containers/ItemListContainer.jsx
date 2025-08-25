import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Item from "../components/Item/Item";
import { getProducts } from "../data/products";

function ItemListContainer({ saludo }) {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams(); //capturamos categoria desde la URL

    useEffect(() => {
        getProducts().then((res) => {
            if (idCategory) {
                // Filtrar por categoría si hay idCategory en la URL
                setProducts(res.filter((prod) => prod.category === idCategory));
            } else {
                // Si no hay categoría, mostrar todos
                setProducts(res);
            }
        });
    }, [idCategory]); // importante: que se ejecute cuando cambia la categoría

    if (!products.length) return <p className="text-center mt-5">Cargando productos...</p>;
    
    return (
        <div className="container my-4">
            {/* Saludo solo en la página principal */}
            {!idCategory && (
                <h2 className="saludo-oleo text-center mb-4 text-danger fs-1">{saludo}</h2>
            )}
            {/* Contenedor Bootstrap que centra */}
            <div className="product-list row justify-content-center">
                {products.map((prod) => (
                    <Item key={prod.id} product={prod} />
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
