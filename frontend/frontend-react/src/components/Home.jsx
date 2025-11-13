import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="position-absolute top-0 start-0 w-100 vh-100 bg-primary bg-gradient text-white d-flex flex-column justify-content-center align-items-center">
      {/* Ajuste para que no quede debajo del navbar */}
      <div className="pt-5 text-center">
        <h1 className="mb-3 display-4 fw-bold shadow-sm">Bienvenido al Sistema de Gestión</h1>
        <p className="lead mb-5 shadow-sm">
          Administra tus productos y categorías de manera rápida y sencilla.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          <Link
            to="/productos"
            className="btn btn-light btn-lg p-4 d-flex flex-column align-items-center justify-content-center shadow-lg border-0 rounded-4 hover-scale"
          >
            <i className="bi bi-box-seam display-3 text-primary mb-2"></i>
            <span className="fw-bold text-primary">Gestionar Productos</span>
          </Link>

          <Link
            to="/categorias"
            className="btn btn-light btn-lg p-4 d-flex flex-column align-items-center justify-content-center shadow-lg border-0 rounded-4 hover-scale"
          >
            <i className="bi bi-tags display-3 text-success mb-2"></i>
            <span className="fw-bold text-success">Gestionar Categorías</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
