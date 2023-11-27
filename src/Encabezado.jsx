// Encabezado.jsx

import React, { useState } from 'react';
import './Encabezado.css';

function Encabezado({ onFilterProducts }) {
  const handleInicioClick = () => {
    window.location.reload();
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onFilterProducts(searchTerm);
  };

  return (
    <header>
      <img src="https://i.ibb.co/Ct4GtpW/GUITARRALIBRE-1-removebg-preview-3.png" alt="GUITARRALIBRE" />
      <form action="#" method="get">
        <input type='text' name='search' placeholder='Buscar en la página' onChange={handleSearch}></input>
      </form>

      <nav>
        <ul>
          <li><a href="#" onClick={handleInicioClick}>Inicio</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Encabezado;
