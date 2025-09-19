import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function CheckoutForm() {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        detallePedido: "",
        modoPedido: "",

    });

    const [ordenCreada, setOrdenCreada] = useState(false);
    const [datosCompra, setDatosCompra] = useState(null);
    const [loading, setLoading] = useState(false); // estado para loader

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const generarIdAmigable = () => {
        const fecha = new Date();
        const dia = fecha.getDate().toString().padStart(2, "0");
        const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
        const año = fecha.getFullYear().toString().slice(-2);
        const random = Math.floor(1000 + Math.random() * 9000);
        return `ORD-${dia}${mes}${año}-${random}`;
    };

    const enviarPedido = async (e) => {
        e.preventDefault();
        if (!formData.nombre || !formData.email || !formData.telefono || !formData.detallePedido || !formData.modoPedido ) {
        alert("Por favor completa todos los campos 😅");
        return;
        }

        setLoading(true); // mostrar loader

        const orderData = {
        comprador: formData,
        items: cart,
        total: totalPrice,
        fecha: serverTimestamp(),
        };

        try {
        // 1️⃣ Guardar en Firestore
        const docRef = await addDoc(collection(db, "orders"), orderData);

        // 2️⃣ Generar ID amigable
        const idAmigable = generarIdAmigable();

        // 3️⃣ Guardar datos para modal
        setDatosCompra({
            nombre: formData.nombre,
            total: totalPrice,
            idOrden: idAmigable,
        });

        // 4️⃣ Limpiar carrito y formulario
        clearCart();
        setFormData({ nombre: "", email: "", telefono: "" });

        // 5️⃣ Enviar a Formspree
        const formspreeData = {
            idOrden: idAmigable,
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            detallePedido: formData.detallePedido,
            modoPedido: formData.modoPedido,
            total: totalPrice,
            items: cart.map(item => `- ${item.title} x ${item.quantity} ($${item.price})`).join("\n"),
        };

        await fetch("https://formspree.io/f/xvgbepqb", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formspreeData),
        });

        // 6️⃣ Mostrar modal final
        setOrdenCreada(true);

        } catch (error) {
        console.error("Error procesando la orden:", error);
        alert("Hubo un error enviando tu pedido, intentá nuevamente.");
        } finally {
        setLoading(false); // ocultar loader
        }
    };

    return (
        <div className="container my-5">
        <h2 className="text-center text-danger mb-4 logo-text">Finalizar Compra</h2>
        <form
            onSubmit={enviarPedido}
            className="mx-auto p-4 border rounded shadow"
            style={{ maxWidth: "500px" }}
        >
            <div className="mb-3">
            <label className="form-label fw-bold">Nombre:</label>
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
            <label className="form-label fw-bold">Email:</label>
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
            <label className="form-label fw-bold">Teléfono:</label>
            <input
                type="text"
                name="telefono"
                className="form-control"
                value={formData.telefono}
                onChange={handleChange}
                required
            />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Detalle del pedido:</label>
                <input
                    type="text"
                    name="detallePedido"
                    className="form-control"
                    value={formData.detallePedido}
                    onChange={handleChange}
                    placeholder="Ej: sin cebolla ..."
                />
            </div>

            <div className="mb-3">
                <label className="form-label fw-bold">Modo de pedido:</label>
                <select
                    name="modoPedido"
                    className="form-select"
                    value={formData.modoPedido || ""}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="En el local">En el local</option>
                    <option value="Retiro">Pasar Retirando</option>
                </select>
            </div>


            <h4 className="my-3">
            Total: <span className="text-danger">${totalPrice}</span>
            </h4>

            <button type="submit" className="btn btn-danger w-100 fw-bold">
            Confirmar Compra
            </button>
        </form>

        {/* Loader */}
        {loading && (
            <div className="loader-overlay">
            <div className="loader-content">Enviando pedido...</div>
            </div>
        )}

        {/* Modal */}
        {ordenCreada && datosCompra && (
            <div className="modal-overlay">
            <div className="modal-content bg-white">
                <h4 className="logo-text">COMPRA CONFIRMADA 🎉</h4>
                <p>
                Gracias por tu compra {datosCompra.nombre}! <br />
                Total: ${datosCompra.total} <br />
                ID de tu orden: <strong>{datosCompra.idOrden}</strong>
                </p>
                <button
                className="btn btn-danger mt-3"
                onClick={() => {
                    setOrdenCreada(false);
                    navigate("/");
                }}
                >
                Cerrar
                </button>
            </div>
            </div>
        )}
        </div>
    );
}

export default CheckoutForm;
