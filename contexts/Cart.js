import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [powerLevels, setPowerLevels] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user ? user.id : null;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from backend
    axios.get(`http://localhost:8080/getbyidcart/${user_id}`)
      .then(response => {
        const cartItems = response.data;
        setCart(cartItems);
        setPowerLevels(cartItems.map(() => ({ left: 0, right: 0 }))); // Initialize powerLevels based on cart items
        setQuantities(cartItems.map(() => 1)); // Initialize quantities with 1 for each item
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const handlePowerChange = (index, eye, increment) => {
    setPowerLevels((prevLevels) => {
      if (prevLevels[index]) {
        const newLevels = [...prevLevels];
        newLevels[index] = {
          ...newLevels[index],
          [eye]: Math.max(newLevels[index][eye] + increment, 0),
        };
        return newLevels;
      }
      return prevLevels;
    });
  };

  const handleQuantityChange = (index, value) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = value;
      return newQuantities;
    });
  };

  const handleRemoveFromCart = (id) => {
    axios.delete(`http://localhost:8080/deletecart/${id}`)
      .then(response => {
        if (response.status === 204) {
          // Remove item from cart
          setCart((prevCart) => prevCart.filter(item => item.id !== id));
          setPowerLevels((prevLevels) => prevLevels.filter((_, i) => i !== cart.findIndex(item => item.id === id)));
          setQuantities((prevQuantities) => prevQuantities.filter((_, i) => i !== cart.findIndex(item => item.id === id)));
        } else {
          console.error('Error removing item from cart');
        }
      })
      .catch(error => {
        console.error('Error removing item from cart:', error);
      });
  };

  const handleAddToBuyNow = (product, quantity) => {
    return axios.post('http://localhost:8080/addbuynow', {
      productId: product.id,
      name: product.name,
      description: product.description,
      size: product.size,
      color: product.color,
      shape: product.shape,
      imageurl: product.imageurl,
      price: product.price
    });
  };

  const handleBuyNow = () => {
    // Add all cart items to the BuyNow table
    Promise.all(cart.map((product, index) => handleAddToBuyNow(product, quantities[index])))
      .then(() => {
        // After adding all items to BuyNow, remove all items from the cart
        Promise.all(cart.map((product) => axios.delete(`http://localhost:8080/deletecart/${product.id}`)))
          .then(() => {
            // Clear cart state
            setCart([]);
            setQuantities([]);
            setPowerLevels([]);
            navigate('/buynow', { state: { cart, quantities } });
          })
          .catch(error => {
            console.error('Error removing items from cart:', error);
          });
      })
      .catch(error => {
        console.error('Error adding items to BuyNow:', error);
      });
  };

  const totalPrice = cart.reduce((sum, product, index) => sum + product.price * quantities[index], 0);

  return (
    <div className="cart-page-unique123">
      <nav className="nav-bar-unique123">
        <button className="home-button-unique123" onClick={() => navigate('/')}>
          Home
        </button>
      </nav>
      <h2 className="cart-title-unique123">My Cart</h2>
      <div className="cart-grid-unique123">
        {cart.map((product, index) => (
          <div className="product-card-unique123" key={product.id}>
            <img src={product.imageurl} alt={product.name} className="product-img-unique123" />
            <div className="product-details-unique123">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <div className="power-controls-container-unique123">
                <div className="power-control-unique123">
                  <button
                    className="decrement-unique123"
                    onClick={() => handlePowerChange(index, 'left', -1)}
                    disabled={powerLevels[index]?.left <= 0}
                  >
                    -
                  </button>
                  <span>Left {powerLevels[index]?.left}</span>
                  <button
                    className="increment-unique123"
                    onClick={() => handlePowerChange(index, 'left', 1)}
                  >
                    +
                  </button>
                </div>
                <div className="power-control-unique123">
                  <button
                    className="decrement-unique123"
                    onClick={() => handlePowerChange(index, 'right', -1)}
                    disabled={powerLevels[index]?.right <= 0}
                  >
                    -
                  </button>
                  <span>Right {powerLevels[index]?.right}</span>
                  <button
                    className="increment-unique123"
                    onClick={() => handlePowerChange(index, 'right', 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="quantity-select-unique123">
                <label htmlFor={`quantity-${index}`}><b>Quantity:</b></label>
                <select
                  id={`quantity-${index}`}
                  value={quantities[index]}
                  onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="product-buttons-unique123">
                <button className="remove-button-unique123" onClick={() => handleRemoveFromCart(product.id)}>
                  Remove
                </button>
                <button
                  className="buy-now-button-unique123"
                  onClick={() => handleAddToBuyNow(product, quantities[index])}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price-unique123">
        <h3>Total Amount: ₹{totalPrice}</h3>
        <button className="buy-now-button-unique123" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
