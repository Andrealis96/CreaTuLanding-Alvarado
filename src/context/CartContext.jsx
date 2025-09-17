// CartContext.js
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar producto
    const addToCart = (product, quantity) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
        setCart(cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        ));
        } else {
        setCart([...cart, { ...product, quantity }]);
        }
    };

    // Quitar producto (uno por uno o todo)
    const removeFromCart = (id) => {
        const existing = cart.find(item => item.id === id);
        if (!existing) return;

        if (existing.quantity > 1) {
        // Resto 1 unidad
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ));
        } else {
        // Si queda en 0, lo saco del carrito
        setCart(cart.filter(item => item.id !== id));
        }
    };

    // Vaciar carrito
    const clearCart = () => setCart([]);

    // Totales
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,   
        clearCart,
        totalItems,
        totalPrice
        }}>
        {children}
        </CartContext.Provider>
    );
};
