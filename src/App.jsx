import React, { useState } from 'react';
import './App.css';
import Encabezado from './Encabezado';
import BarraLateral from './BarraLateral';
import Producto from './Producto';

function App() {
  const { products } = Producto();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSelectCategory = (categoria) => {
    const filtered = products.filter(product => product.categoria === categoria);
    setFilteredProducts(filtered);
    setSelectedCategory(categoria);
  };

  return (
    <div className="App">
      <Encabezado />
      <BarraLateral onSelectCategory={handleSelectCategory} />
      <main>
        <h2>Productos</h2>
        <ul className="product-list">
          {filteredProducts.map((product, index) => (
            <li key={index} className="product-item">
              <a href={`/producto/${product.name}`}>
                <img src={product.image} alt={product.name} className="product-image" />
                <p className="product-name">{product.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;