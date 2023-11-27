// App.jsx

import React, { useState } from 'react';
import './App.css';
import Encabezado from './Encabezado';
import BarraLateral from './BarraLateral';
import Producto from './Producto';
import DetalleProducto from './DetalleProducto';

function App() {
  const { products } = Producto();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectCategory = (categoria) => {
    const filtered = products.filter(product => product.categoria === categoria);
    setFilteredProducts(filtered);
    setSelectedCategory(categoria);
    setShowProductDetails(false);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  const handleGoBack = () => {
    setShowProductDetails(false);
  };

  const handleFilterProducts = (searchTerm) => {
    // Filtrar productos por nombre
    const filtered = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <Encabezado onFilterProducts={handleFilterProducts} />
      <BarraLateral onSelectCategory={handleSelectCategory} />
      <main>
        {showProductDetails ? (
          <DetalleProducto product={selectedProduct} onGoBack={handleGoBack} />
        ) : (
          <>
            <h2>Productos</h2>
            <ul className="product-list">
              {filteredProducts.map((product, index) => (
                <li key={index} className="product-item">
                  <div onClick={() => handleSelectProduct(product)}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <p className="product-name">{product.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
