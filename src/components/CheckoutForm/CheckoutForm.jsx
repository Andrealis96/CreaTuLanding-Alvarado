import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CheckoutForm() {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email || !formData.telefono) {
        alert("Por favor completa todos los campos 😅");
        return;
        }

        // Simulamos una orden
        const order = {
        comprador: formData,
        items: cart,
        total: totalPrice,
        fecha: new Date().toLocaleString(),
        };

        console.log("✅ Orden generada:", order);

        alert(`Gracias por tu compra ${formData.nombre}! 🛒 Total: $${totalPrice}`);

        clearCart();
        setFormData({ nombre: "", email: "", telefono: "" });
    };

    return (
        <div className="container my-5">
        <h2 className="text-center text-danger fw-bold mb-4">Finalizar Compra</h2>
        <form
            onSubmit={handleSubmit}
            className="mx-auto p-4 border rounded shadow"
            style={{ maxWidth: "500px" }}
        >
            <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
                type="text"
                name="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label">Email</label>
            <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </div>

            <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
                type="tel"
                name="telefono"
                className="form-control"
                value={formData.telefono}
                onChange={handleChange}
                required
            />
            </div>

            <h4 className="my-3">Total a pagar: <span className="text-danger">${totalPrice}</span></h4>

            <button type="submit" className="btn btn-success w-100 fw-bold">
            Confirmar Compra
            </button>
        </form>
        </div>
    );
}

export default CheckoutForm;
