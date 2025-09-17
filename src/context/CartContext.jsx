import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        setCart(prevCart => {
            const existing = prevCart.find(p => p.id === item.id);
            if (existing) {
                // ⚡ Sobrescribir cantidad
                return prevCart.map(p =>
                    p.id === item.id ? { ...p, quantity } : p
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const totalItems = useMemo(
        () => cart.reduce((acc, item) => acc + item.quantity, 0),
        [cart]
    );

    const totalPrice = useMemo(
        () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        [cart]
    );

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};
