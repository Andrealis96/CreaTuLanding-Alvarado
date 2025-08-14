import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // NECESARIO para que funcione el offcanvas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
    </BrowserRouter>
);
