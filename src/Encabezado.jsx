import React, { useState } from 'react';
import './Encabezado.css';

const Encabezado = ({ onAgradecimientoClick, onFilterProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInicioClick = () => {
    window.location.reload();
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onFilterProducts(searchTerm);
  };

  const handleAgradecimientoClick = () => {
    onAgradecimientoClick();
  };

  return (
    <header>
      <img src="https://i.ibb.co/Ct4GtpW/GUITARRALIBRE-1-removebg-preview-3.png" alt="GUITARRALIBRE" />
      <form onSubmit={handleSearchSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Buscar en la página'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type='submit' name='Buscar'>Buscar</button>
      </form>

      <nav>
        <ul>
          <li><a href="#" onClick={handleInicioClick}>Inicio</a></li>
          <li><a href="#" onClick={handleAgradecimientoClick}>Sobre Nosotros</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Encabezado;
