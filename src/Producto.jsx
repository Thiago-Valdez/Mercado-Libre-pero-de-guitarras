const productos = [
    { name: 'Producto 1', description: 'Descripción del Producto 1', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Ibanez_Jem_7VWH.jpg', categoria: 'electrica' },
    { name: 'Producto 2', description: 'Descripción del Producto 2', image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/cort-earth-50-op-thump1-a6219f3ddd11ade69216274848902255-480-0.jpg', categoria: 'acustica' },
  ];
  
  const Producto = () => {
    return { products: productos };
  };
  
  export default Producto;
  