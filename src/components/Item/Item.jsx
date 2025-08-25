import { Link } from "react-router-dom";
import "../../App.css";

function Item({ product }) {
    if (!product) return null;

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 d-flex flex-column card-hover">
                <img 
                    src={product.pictureUrl} 
                    className="card-img-top w-50 img-fluid mx-auto" 
                    alt={product.title} 
                />
                {/* Card body con flex column */}
                <div className="card-body d-flex flex-column shadow ">
                    <h5 className="card-title text-danger fw-bold">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="fw-bold">${product.price.toFixed(2)}</p>

                    {/* Botón pegado al fondo */}
                    <Link 
                        to={`/item/${product.id}`} 
                        className="btn btn-danger  fw-bold mt-auto align-self-center"
                    >
                        Ver Detalle
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;

