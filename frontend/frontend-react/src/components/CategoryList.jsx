import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    cargarcategorias();
  }, []);

  const cargarcategorias = async () => {
    const res = await axios.get('/categorias');
    setCategories(res.data);
  };

  const eliminarCategoria = async (id) => {
    if (window.confirm('¿Deseas eliminar esta categoría?')) {
      await axios.delete(`/categorias/${id}`);
      cargarcategorias();
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Lista de Categorias</h1>
        <Link to="/categorias/nueva" className="btn btn-sm btn-primary">Nueva Categoria</Link>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.nombre}</td>
              <td>{cat.descripcion}</td>
              <td className="d-flex gap-2">
                <Link
                  to={`/categorias/edit/${cat.id}`}
                  className="btn btn-sm btn-warning"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => eliminarCategoria(cat.id)}
                >
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