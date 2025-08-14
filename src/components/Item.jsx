function Item({ item }) {
    return (
        <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
            <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="fw-bold">${item.price}</p>
            <a href={`/item/${item.id}`} className="btn btn-warning">
                Ver Detalle
            </a>
            </div>
        </div>
        </div>
    );
}

export default Item;

