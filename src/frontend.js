// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://your-backend-api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price;
    });
    setTotal(totalPrice);
  };

  return (
    <div className="App">
      <header>
        <p id="logo">LOGO</p>
        <div id="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p id="count">{cart.length}</p>
        </div>
      </header>
      <div id="container">
        <div id="root">
          {products.map((product, index) => (
            <Product key={index} product={product} addToCart={() => addToCart(product)} />
          ))}
        </div>
        <Cart cart={cart} total={total} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

const Product = ({ product, addToCart }) => {
  const { image, title, price } = product;
  return (
    <div className="box">
      <div className="img-box">
        <img className="images" src={image} alt={title} />
      </div>
      <div className="bottom">
        <p>{title}</p>
        <h2>${price}.00</h2>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

const Cart = ({ cart, total, removeFromCart }) => {
  return (
    <div id="sidebar">
      <div id="head">
        <p>My Cart</p>
      </div>
      <div id="cartitem">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <CartItem key={index} item={item} index={index} removeFromCart={removeFromCart} />
          ))
        )}
      </div>
      <div id="foot">
        <h3>Total</h3>
        <h2>${total}.00</h2>
      </div>
    </div>
  );
};

const CartItem = ({ item, index, removeFromCart }) => {
  const { image, title, price } = item;
  return (
    <div className="cart-item">
      <div className="row-img">
        <img className="rowing" src={image} alt={title} />
      </div>
      <p style={{ fontSize: '12px' }}>{title}</p>
      <h2 style={{ fontSize: '15px' }}>${price}.00</h2>
      <i className="fa-solid fa-trash" onClick={() => removeFromCart(index)}></i>
    </div>
  );
};

export default App;
