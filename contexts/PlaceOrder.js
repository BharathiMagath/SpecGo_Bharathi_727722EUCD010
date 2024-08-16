import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import gpayQrCode from '../images/image.png'; // Ensure QR code image exists
import '../styles/PlaceOrder.css';

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePaymentMethodClick = (method) => {
    setPaymentMethod(method);
    setShowPaymentModal(true);
  };

  const sendEmail = () => {
    const emailParams = {
      to_name: 'User', 
      message: `Your payment of ₹${totalPrice} via ${paymentMethod} has been confirmed.`,
      to_email: 'user@example.com', 
    };

    emailjs.send('service_xp9wxnc', 'template_rarh446', emailParams, 'icFRrqNvr_58r0CQl')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Payment confirmed and email sent!');
        navigate('/confirmation', { state: { cartItems, totalPrice, paymentMethod } });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Payment confirmed but failed to send email.');
      });
  };

  const handlePaymentConfirmation = () => {
    setShowPaymentModal(false);
    sendEmail();
  };

  return (
    <div className="order-place-order-page">
      <nav className="order-nav-bar">
        
        <button className="order-home-button" onClick={() => navigate('/')}>
          Home
        </button>
      </nav>
      <div className="order-content-wrapper">
        <div className="order-product-summary">
          {cartItems.map((product) => (
            <div className="order-product-card" key={product.id}>
              <img src={product.imageurl} alt={product.name} />
              <div className="order-product-details">
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="order-payment-section">
          <h2>Select Payment Method</h2>
          <div className="order-payment-options">
            {['cash', 'gpay', 'phonepe', 'upi', 'netbanking'].map((method) => (
              <div key={method} className="order-payment-option">
                <div
                  className={`order-round ${paymentMethod === method ? 'order-selected' : ''}`}
                  onClick={() => handlePaymentMethodClick(method)}
                />
                <span className="order-payment-method-label">
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showPaymentModal && (
        <div className="order-modal-overlay">
          <div className="order-modal-content">
            <button className="order-close-button" onClick={() => setShowPaymentModal(false)}>
              X
            </button>
            {paymentMethod === 'cash' && (
              <>
                <h3>Cash on Delivery</h3>
                <p>Total amount to be paid on delivery: ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
            {paymentMethod === 'gpay' && (
              <>
                <h3>GPay Payment</h3>
                <img src={gpayQrCode} alt="GPay QR Code" className="order-qr-code" />
                <p>Pay ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
            {paymentMethod === 'phonepe' && (
              <>
                <h3>PhonePe Payment</h3>
                <img src={gpayQrCode} alt="PhonePe QR Code" className="order-qr-code" />
                <p>Pay ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
            {paymentMethod === 'upi' && (
              <>
                <h3>UPI Payment</h3>
                <input type="text" placeholder="Enter UPI ID" />
                <p>Pay ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
            {paymentMethod === 'netbanking' && (
              <>
                <h3>Net Banking</h3>
                <input type="text" placeholder="Enter Account Number" />
                <p>Pay ₹{totalPrice}</p>
                <button className="confirm-payment-button" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
