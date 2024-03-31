import React, { useState } from 'react';
import { addFiscalia } from '../services/api';
import '../styles/App.css';

function AddFiscaliaForm() {
  const [Nombre, setNombre] = useState('');
  const [Ubicacion, setUbicacion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFiscalia(Nombre, Ubicacion);
    setNombre('');
    setUbicacion('');
    window.location.reload(); 
  };

  return (
    <div className="add-fiscalia-form"> 
      <h2>Agregar Nueva Fiscalía</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
        <input className="input" type="text" placeholder="Ubicación" value={Ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
        <button className="button" type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AddFiscaliaForm;
