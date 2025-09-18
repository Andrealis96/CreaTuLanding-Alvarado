import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetailContainer/ItemDetail";
import "../App.css";
import { FaHome } from "react-icons/fa";


function ItemDetailContainer() {
    const { idItem } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);
    getProductById(idItem) // <-- SIN Number()
        .then((res) => {
            setProduct(res);
        })
        .catch((err) => {
            console.error("Error fetching product:", err);
            setProduct(null);
        })
        .finally(() => setLoading(false));
    }, [idItem]);


    return (
        <div className="container my-5">
            {/* Pasamos producto y función a ItemDetail */}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {loading ? (
                        <p className="text-center fw-bold text-danger fs-2">Cargando producto...</p>
                    ) : (
                        <ItemDetail product={product} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;
