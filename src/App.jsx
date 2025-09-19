import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";
import './App.css';
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import About from "./pages/About";

function App() {
  return (
      <div>
      <NavBar />
      <Routes>
        {/*  Saludo de Bienvenida */}
        <Route 
          path="/" 
          element={
            <ItemListContainer saludo="Bienvenidos a Carbón y Leños Burger" />
          } 
        />
      
        {/* Catálogo filtrado por categoría */}
        <Route path="/category/:idCategory" element={<ItemListContainer />} />

        {/* Detalle de un producto */}
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        
        {/* Carrito */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<CheckoutForm />} />
        
        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Ruta 404 */}
        <Route path="*" element={<h2 className="text-center mt-5">404 - Página no encontrada 😢</h2>} />
          
      </Routes>
    </div>
  );
}
export default App;
