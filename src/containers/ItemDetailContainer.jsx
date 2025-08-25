import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../data/products";
import ItemCount from "../components/ItemCount/ItemCount";
import "../App.css";
import { FaHome } from "react-icons/fa";


function ItemDetailContainer() {
    const { idItem } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(parseInt(idItem)).then((res) => setProduct(res));
    }, [idItem]);

    if (!product) return <h2 className="text-center mt-5 text-danger">Cargando producto...</h2>;

    const handleAdd = (quantity) => {
        console.log(`Agregaste ${quantity} ${product.title} al carrito`);
    };

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-end m-3">
                <Link to="/" className="btn btn-danger fw-bold">
                <FaHome size={24} className="me-2" /> Home
                </Link>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card card-hover shadow-lg p-3">
                        {/* Imagen */}
                        <img 
                            src={product.pictureUrl} 
                            className="card-img-top w-50 img-fluid mx-auto d-block" 
                            alt={product.title} 
                        />
                        {/* Contenido */}
                        <div className="card-body text-center d-flex flex-column">
                            <h3 className="text-danger fw-bold">{product.title}</h3>
                            <p>{product.description}</p>
                            <h4 className="fw-bold">${product.price.toFixed(2)}</h4>

                            {/* Contador abajo */}
                            <div className="mt-auto">
                                <ItemCount stock={10} initial={1} onAdd={handleAdd} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 Botón de volver afuera, alineado a la derecha */}
        </div>
    );
}

export default ItemDetailContainer;
