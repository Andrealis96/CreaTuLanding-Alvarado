import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../data/products";
import { HiMenuAlt1 } from "react-icons/hi";

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getProducts()
        .then((data) => setItems(data))
        .catch((error) => console.error("Error cargando productos:", error));
    }, []);   
    return (
        <div className="container mt-4">
            <h1 className="saludo-oleo text-center text-danger"> {saludo} </h1>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer; 