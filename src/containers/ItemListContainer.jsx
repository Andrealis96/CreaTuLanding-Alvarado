import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import Item from "../components/ItemListContainer/Item";

function ItemListContainer({ saludo }) {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const productsRef = collection(db, "products");

        const q = idCategory
        ? query(productsRef, where("category", "==", idCategory))
        : productsRef;

        getDocs(q).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, [idCategory]);

    if (!products.length) return <p className="text-center mt-5 fw-bold text-danger fs-2">Cargando productos...</p>;

    return (
        <div className="container my-4">
        {!idCategory && (
            <h2 className="text-center mb-4 text-danger fs-1 logo-text">{saludo}</h2>
        )}
        <div className="row justify-content-center">
            {products.map((prod) => (
            <Item key={prod.id} product={prod} />
            ))}
        </div>
        </div>
    );
}

export default ItemListContainer;

