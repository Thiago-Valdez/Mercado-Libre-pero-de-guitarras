//barralateral.jsx

import React from 'react';
import './BarraLateral.css';

function BarraLateral({ onSelectCategory }) {
  return (
    <div className="barra">
      <ul>
        <li>
          <button onClick={() => onSelectCategory('electrica')}>
            Guitarras Eléctricas
          </button>
        </li>
        <li>
          <button onClick={() => onSelectCategory('acustica')}>
            Guitarras Acústicas
          </button>
        </li>
        <li>
          <button onClick={() => onSelectCategory('pedal')}>
            Pedales
          </button>
        </li>
        <li>
          <button onClick={() => onSelectCategory('amplificador')}>
            Amplificadores
          </button>
        </li>
        <li>
          <button onClick={() => onSelectCategory('accesorio')}>
            Accesorios
          </button>
        </li>
      </ul>
    </div>
  );
}

export default BarraLateral;
