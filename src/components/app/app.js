import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage, ProductPage } from '../pages';
import './app.css'

const App = () => {
  return (
    <div>
      <ShopHeader/>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/cart">
          <CartPage/>
        </Route>
        <Route path="/product/:id?">
          <ProductPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
