// DetalleProducto.jsx
import React from 'react';
import './DetalleProducto.css'; // Importa el archivo de estilos

const DetalleProducto = ({ product, onGoBack }) => {
  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      window.history.back();
    }
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <button className="back-button" onClick={handleGoBack}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default DetalleProducto;
