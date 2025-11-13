import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar fija superior con estilo moderno */}
      <div className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <i className="bi bi-stack me-2"></i> Gestión CRUD
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="/inicio">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categorias">Categorías</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* Contenedor principal */}
      <div className="container" style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />

          {/* Productos */}
          <Route path="/productos" element={<ProductList />} />
          <Route path="/productos/nuevo" element={<ProductForm />} />
          <Route path="/productos/editar/:id" element={<ProductForm />} />

          {/* Categorías */}
          <Route path="/categorias" element={<CategoryList />} />
          <Route path="/categorias/nueva" element={<CategoryForm />} />
          <Route path="/categorias/editar/:id" element={<CategoryForm />} />
        </Routes>

        {/* Footer */}
        <footer className="text-center text-muted py-3 mt-4 border-top">
          <small>© 2025 Gestión CRUD Productos y Categorías</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}
