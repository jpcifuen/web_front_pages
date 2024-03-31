import React, { useState, useEffect } from 'react';
import { fetchFiscalias, deleteFiscalia } from '../services/api'; 
import '../styles/App.css';

function FiscaliasList() {
  const [fiscalias, setFiscalias] = useState([]);
  const [reloadData, setReloadData] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFiscalias();
        console.log('Datos recibidos del API:', data);
        setFiscalias(data);
      } catch (error) {
        console.error('Error al obtener los datos del API:', error);
      }
    };
    fetchData();
  }, [reloadData]); 

  const handleDelete = async (id) => {
    try {
      await deleteFiscalia(id);
      setReloadData(!reloadData); 
    } catch (error) {
      console.error('Error al eliminar la fiscalía:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container">
      <h2>Listado de Fiscalías</h2>
      <table className="fiscalias-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {fiscalias.map(f => (
            <tr key={f.Id}>
              <td>{f.Id}</td>
              <td>{f.Nombre}</td>
              <td>{f.Ubicacion}</td>
              <td>{formatDate(f.FechaCreacion)}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(f.Id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FiscaliasList;
