import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    cargaproductos();
  }, []);

  const cargaproductos = async () => {
    const res = await axios.get('/productos');
    setProducts(res.data);
  };

  const eliminarProducto = async (id) => {
    if (window.confirm('¿Deseas eliminar este producto?')) {
      await axios.delete(`/productos/${id}`);
      cargaproductos();
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Lista de Productos</h4>
        <Link to="/productos/nuevo" className="btn btn-primary">Nuevo Producto</Link>
      </div>

      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoria</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.nombre}</td>
              <td>{prod.precio}</td>
              <td>{prod.stock}</td>
              <td>{prod.categoria?.nombre}</td>
              <td>
                <Link to={`/productos/editar/${prod.id}`} className="btn btn-sm btn-primary me-2">
                  Editar
                </Link>
                <button className="btn btn-sm btn-danger" onClick={() => eliminarProducto(prod.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}