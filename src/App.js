import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Collection from './components/collections';
import ProductContext from './components/ProductContext';
import Store from "./components/Cart";
import Checkout from "./components/checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ProductContext>
      <Switch>
        <Route path="/checkout">
          <Checkout/>
        </Route>
      <Route path="/cart">
        <Store/>
      </Route>
      <Route path="/collection">
      <Collection/> 
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        </Switch>
        </ProductContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
