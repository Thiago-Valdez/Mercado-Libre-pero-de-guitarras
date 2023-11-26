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
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              <a href={`/producto/${product.name}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <p>{product.name} - {product.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
