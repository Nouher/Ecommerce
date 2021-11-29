import React from "react";
import Home from "./Pages/Home"
import ProductsList from "./Pages/ProductsList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from './Pages/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {

  const user=true;

  return (
    <Router>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/products/:category">
         <ProductsList/>
       </Route>
       <Route path="/product/:id">
         <Product/>
       </Route>
       <Route path="/cart">
         <Cart/>
       </Route>
       <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
       </Route>
       <Route path="/Register">
          {user ? <Redirect to="/"/> : <Register/>}
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
