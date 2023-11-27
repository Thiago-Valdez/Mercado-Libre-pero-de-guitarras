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
  const [showAgradecimiento, setShowAgradecimiento] = useState(false);

  const handleSelectCategory = (categoria) => {
    const filtered = products.filter((product) => product.categoria === categoria);
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
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSelectedCategory('');
    setShowProductDetails(false);
  };

  const handleAgradecimientoClick = () => {
    setShowAgradecimiento(true);
  };

  return (
    <div className="App">
      <Encabezado
        onFilterProducts={handleFilterProducts}
        onAgradecimientoClick={handleAgradecimientoClick}
      />
      <BarraLateral onSelectCategory={handleSelectCategory} />
      <main>
        {showProductDetails ? (
          <DetalleProducto product={selectedProduct} onGoBack={handleGoBack} />
        ) : showAgradecimiento ? (
          <div className='gratitude-page'>
            <img
              src="https://i.pinimg.com/564x/ee/12/a9/ee12a906d097550141060360ccc54fd2.jpg"
              alt="Agradecimiento"
              style={{ width: '100%', maxWidth: '500px' }}
            />
            <p>Esta pagina fue pensada, desarrollada y testeada en 2 dias, tratando de utilizar lo mejor posible (y fracasando en la mayoría) lo que tenía a mi alcance, algunas cosas podrían haber estado mejor, ya sea mejor optimizadas o simplemente que estén planteadas de otra manera, pero por cuestiones de tiempo tuvo que quedar así, la página es simplemente un catálogo con unos pocos productos relacionados a la guitarra con una barra lateral que permite filtrar por categoría los diferentes productos, una barra de navegación en el encabezado que permite filtrar los productos por nombre, un botón para regresar al inicio y un botón llamado "sobre nosotros", que es donde estamos ahora. Traté de utilizar las funciones que ofrece react para la mayoría de componentes (principalmente en el componente app), me hubiera gustado implementar la función de react-router para poder conectar todo pero no terminé de entender como funcionaba y cuando la aplicaba siempre me daba un error u otro.
El resto de la documentación se encuentra en papel.

Thiago Valdez 4° 1° © Derechos Reservados.</p>
          </div>
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
