import Item from "./Item";

const ItemList = ({ products = [] }) => {
    return (
        <div className="row">
            {products.length > 0 ? (
                products.map((product) => <Item key={product.id} product={product} />)
            ) : (
                <p className="text-center text-muted">No se encontraron productos</p>
            )}
        </div>
    );
};

export default ItemList;


