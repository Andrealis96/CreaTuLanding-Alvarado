import { HiMenuAlt1 } from "react-icons/hi";

const ItemListContainer = ({ saludo }) => {
    return (
        <div className="container mt-4">
            <h1 className="saludo-oleo text-center text-danger"> {saludo} </h1>
        </div>
    );
};

export default ItemListContainer; 