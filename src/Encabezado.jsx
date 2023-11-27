// encabezado.jsx

import React, { useState } from 'react';
import './Encabezado.css';

function Encabezado() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInicioClick = () => {
    window.location.reload();
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    // Puedes agregar aquí la lógica para filtrar los productos por nombre
    // y actualizar el estado de la lista de productos en el componente App.
  };

  return (
    <header>
      <img src="https://i.ibb.co/Ct4GtpW/GUITARRALIBRE-1-removebg-preview-3.png" alt="GUITARRALIBRE" />
      <form action="#" method="get">
        <input
          type='text'
          name='search'
          placeholder='Buscar en la página'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type='submit' name='Buscar'> </button>
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
