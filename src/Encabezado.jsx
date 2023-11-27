// encabezado.jsx

import React from 'react';
import './Encabezado.css';

function Encabezado() {
  const handleInicioClick = () => {
    window.location.reload();
  };

  return (
    <header>
      <img src="https://i.ibb.co/Ct4GtpW/GUITARRALIBRE-1-removebg-preview-3.png" alt="GUITARRALIBRE" />
      <form action="#" method="get">
        <input type='text' name='search' placeholder='Buscar en la página'></input>
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
