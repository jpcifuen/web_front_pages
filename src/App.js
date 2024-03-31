import React from 'react';
import FiscaliasList from './components/FiscaliasList';
import AddFiscaliaForm from './components/AddFiscaliaForm';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <h1> Agregar Fiscalías </h1>
      <FiscaliasList />
      <AddFiscaliaForm />
    </div>
  );
}

export default App;
