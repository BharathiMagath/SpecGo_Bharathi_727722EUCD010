import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/BuyNow.css';

const BuyNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, quantities } = location.state || { cart: [], quantities: [] };

  const [cartItems, setCartItems] = useState(cart);
  const [quantitiesState, setQuantitiesState] = useState(quantities);
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    area: '',
    city: '',
    country: '',
    pincode: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [flashMessage, setFlashMessage] = useState('');

  const totalPrice = cartItems.reduce(
    (sum, product, index) => sum + product.price * quantitiesState[index],
    0
  );

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const removeProduct = (index) => {
    const product = cartItems[index];
    axios.delete(`http://localhost:8080/deletebuynow/${product.id}`)
      .then(response => {
        if (response.status === 204) {
          const updatedCartItems = cartItems.filter((_, i) => i !== index);
          const updatedQuantities = quantitiesState.filter((_, i) => i !== index);
          setCartItems(updatedCartItems);
          setQuantitiesState(updatedQuantities);

          axios.delete(`http://localhost:8080/deletecart/${product.id}`)
            .then(response => {
              if (response.status !== 204) {
                console.error('Error removing item from Cart');
              }
            })
            .catch(error => {
              console.error('Error removing item from Cart:', error);
            });
        } else {
          console.error('Error removing item from BuyNow');
        }
      })
      .catch(error => {
        console.error('Error removing item from BuyNow:', error);
      });
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleSaveDetails = () => {
    const allFieldsFilled = Object.values(address).every(value => value.trim() !== '');
    if (allFieldsFilled) {
      axios.post('http://localhost:8080/adddeliverydetails', address)
        .then(response => {
          if (response.status === 201) {
            setFlashMessage('Delivery details have been successfully saved.');
            setShowPopup(false);
            setTimeout(() => setFlashMessage(''), 3000);
          } else {
            setFlashMessage('Error saving delivery details.');
            setTimeout(() => setFlashMessage(''), 3000);
          }
        })
        .catch(error => {
          console.error('Error saving delivery details:', error);
          setFlashMessage('Error saving delivery details.');
          setTimeout(() => setFlashMessage(''), 3000);
        });
    } else {
      setFlashMessage('Please fill in all fields before saving.');
      setTimeout(() => setFlashMessage(''), 3000);
    }
  };

  const handleProceedToPayment = () => {
    navigate('/placeorder', { state: { cartItems, totalPrice } });
  };

  return (
    <div className="buy-now-page">
      <nav className="nav-bar">
        <div className="nav-title">SpecGo</div>
        <div className="nav-buttons">
          <button className="home-button" onClick={() => navigate('/')}>
            Home
          </button>
          <button className="delivery-details-button" onClick={handlePopupToggle}>
            Delivery Details
          </button>
        </div>
      </nav>
      <h2>Buy Now</h2>
      {cartItems.length > 0 ? (
        <div className="order-summary">
          <div className="product-summary">
            {cartItems.map((product, index) => (
              <div className="product-card" key={product.id}>
                <img src={product.imageurl} alt={product.name} />
                <div className="product-details45">
                  <h3>{product.name}</h3>
                  <p>Price: ₹{product.price}</p>
                  <p>Quantity: {quantitiesState[index]}</p>
                  <p>Total: ₹{product.price * quantitiesState[index]}</p>
                </div>
                <button className="remove-button" onClick={() => removeProduct(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="total-price">
            <h3>Total Price: ₹{totalPrice}</h3>
          </div>
          <button
            className="proceed-button"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Delivery Address</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={address.name}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="area"
              placeholder="Area"
              value={address.area}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={address.country}
              onChange={handleAddressChange}
              className="address-input"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={address.pincode}
              onChange={handleAddressChange}
              className="address-input"
            />
            <div className="button-group">
              <button className="save-button" onClick={handleSaveDetails}>
                Save Details
              </button>
              <button className="close-button" onClick={handlePopupToggle}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {flashMessage && (
        <div className="flash-message">
          {flashMessage}
        </div>
      )}
    </div>
  );
};

export default BuyNow;
