import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import Item from "../components/ItemListContainer/Item";
import { FaSearch } from "react-icons/fa"; 

function ItemListContainer({ saludo }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(""); 
    const [currentPage, setCurrentPage] = useState(1); // 📌 estado para paginación
    const itemsPerPage = 6; // 📌 cantidad de productos por página

    const { idCategory } = useParams();

    useEffect(() => {
        const productsRef = collection(db, "products");

        const q = idCategory
            ? query(productsRef, where("category", "==", idCategory))
            : productsRef;

        getDocs(q).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setCurrentPage(1); // resetear página al cambiar categoría
        });
    }, [idCategory]);

    if (!products.length) {
        return (
            <p className="text-center mt-5 fw-bold text-danger fs-2">
                Cargando productos...
            </p>
        );
    }

    // 🔍 Filtrado dinámico
    const filteredProducts = products.filter((prod) =>
        prod.title.toLowerCase().includes(search.toLowerCase())
    );

    // 📌 Lógica de paginación
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="container my-4">
            {!idCategory && (
                <h1 className="text-center mb-4 text-danger logo-text">
                    {saludo}
                </h1>
            )}

            {/* 🔍 Input buscador con icono */}
            <div className="mb-4 text-center">
                <div className="input-group w-50 mx-auto">
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-control"
                    />
                    <span className="input-group-text">
                        <FaSearch />
                    </span>
                </div>
            </div>

            {/* Productos */}
            <div className="row justify-content-center">
                {currentItems.length > 0 ? (
                    currentItems.map((prod) => (
                        <Item key={prod.id} product={prod} />
                    ))
                ) : (
                    <p className="text-center text-muted">
                        No se encontraron productos
                    </p>
                )}
            </div>

            {/* 📌 Paginación */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <button
                        className="btn btn-outline-danger mx-1"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        ◀
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`btn mx-1 ${
                                currentPage === i + 1 ? "btn-danger" : "btn-outline-danger"
                            }`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        className="btn btn-outline-danger  mx-1"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        ▶
                    </button>
                </div>
            )}
        </div>
    );
}

export default ItemListContainer;
