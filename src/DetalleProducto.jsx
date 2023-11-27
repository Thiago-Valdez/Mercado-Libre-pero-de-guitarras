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
    <div className="product-details1">
      <img src={product.image} alt={product.name} className="product-image1" />
      <div className="product-info1">
        <h2 className="product-name1">{product.name}</h2>
        <p className="product-description1">{product.description}</p>
        <button className="back-button1" onClick={handleGoBack}>
          Volver
        </button>
      </div>
    </div>
  );
};

export default DetalleProducto;
