import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EcommercePage from './components/EcommercePage';
import SuccessPage from './components/SuccessPage';
import OurMission from './components/OurMission';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Switch>
        <Route exact path="/" component={EcommercePage} />
        <Route path="/our-mission" component={OurMission} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </CartProvider>
  );
};

export default App;
