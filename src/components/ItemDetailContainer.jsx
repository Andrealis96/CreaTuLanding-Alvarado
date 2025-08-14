import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products.jsx";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { idItem } = useParams();
    useEffect(() => {
        getProducts(idItem).then(data => setProduct(data));
    }, [idItem]);
    if (!product) return <p>Cargando...</p>;
    return (
        <div className="container mt-4">
        <h2>{product.title}</h2>
        <img src={product.pictureUrl} alt={product.title} style={{ width: "300px" }} />
        <p>Precio: ${product.price}</p>
        </div>
    );
}

export default ItemDetailContainer;
