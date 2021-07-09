  
import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';
import logo from './pics/logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState ([]);
  const [page, setPage] = useState (PAGE_PRODUCTS);

  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className="App">
      <Router>
        <div class="wrapper">
          <nav class="navbar">
            <div className ="Logo">
              <img src = {logo} alt="error" className ="Logo"></img>
            </div> {/* Logo */}
            <div class="container">
              <ul class="navbar-right">
                <li class="menuItem">
                <Link class="menuItem" to="/" >Home</Link>
                </li>
                <li class="menuItem">
                <Link class="menuItem" to="/shop" >Shop</Link>
                </li>
                <li class="menuItem">
                <Link class="menuItem" to="/checkout">Checkout</Link>
                </li>
                <li class="menuItem">
                <Link class="menuItem" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>{/* Container */}
          </nav> {/* navbar */}
        </div>{/* Wrapper */}
        <div>
        <Switch>
          <Route path="/shop">
            <div className="shopPage">
            <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
              View Products
            </button>
            {page === PAGE_PRODUCTS && (
              <Products cart={cart} setCart={setCart} />
            )}
            {page === PAGE_CART && (
              <Cart cart={cart} setCart={setCart} />
            )}
            </div>
          </Route>
          <Route path="/checkout">
            <button onClick={() => navigateTo(PAGE_CART)}>
            Go to Cart (£{total})
            </button>
          </Route>
          <Route path="/contact">
            <div className = "goAway">
            <h1>Sorry No refunds. <br/> Go away </h1>
            </div>
          </Route>
          <Route path="/">
            <div className = "homePage">
            <h1>Welcome to our Cat shop :)</h1>
            <h1> Our goal is to make it eaiser for you to bring out the crazy cat lady/gentleman/they/them in you! </h1>
            <h1><br/>Every extra cat helps!</h1>
            </div>
          </Route>
        </Switch>
      </div>
      </Router>

    </div>
  );
}


export default App;



