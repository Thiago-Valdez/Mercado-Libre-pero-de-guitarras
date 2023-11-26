import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';

const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/producto/:nombre" component={DetalleProducto} />
      </Switch>
    </Router>
  );
};

export default Rutas;