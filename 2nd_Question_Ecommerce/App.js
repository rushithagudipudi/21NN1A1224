import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Success from './component/Success';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={Product}/>

      </Switch>
    </>
  );
}

export default App;
