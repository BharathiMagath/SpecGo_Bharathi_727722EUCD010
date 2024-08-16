import React, { useState } from 'react';
import '../styles/ProductInfo.css';

const Prada = () => {
  const [mainImage, setMainImage] = useState("https://m.media-amazon.com/images/I/517Eb3KX8dL._SX679_.jpg");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const thumbnails = [
    "https://m.media-amazon.com/images/I/51KfDcoPYUL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/517Eb3KX8dL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/51KfDcoPYUL._SX679_.jpg"
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  const handleDoubleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTryOnClick = () => {
    console.log("Try on Prada button clicked");
    // Add logic for 3D try-on feature here
  };

  return (
    <div>
      <nav className="navbarinfo">
        <button className="back-button" onClick={handleBackClick}>Back</button>
      </nav>
      <div className="product-info-container">
        <div className="product-details">
          <div className="product-images">
            <img
              src={mainImage}
              alt="Main Glasses"
              className="main-image"
              onDoubleClick={handleDoubleClick}
            />
            <div className="thumbnail-images">
              {thumbnails.map((thumb, index) => (
                <img 
                  key={index} 
                  src={thumb} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="thumbnail-image" 
                  onClick={() => setMainImage(thumb)} 
                />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h1>Prada Rectangular</h1>
            <p>Luxury Rectangular Rimmed Eyeglasses</p>
            <p>Size: Medium</p>
            <p>Color: Tortoise</p>
            <p>Shape: Rectangular</p>
            <h2>₹15000</h2>
            <p>Inclusive of all taxes</p>
            <div className="promotion">
              <p>Free Lenses with every frame</p>
              <p>Exclusive Offer</p>
              <p>Get Free Polarized Lenses with this frame!</p>
            </div>
            <button className="back-button"><a href='http://127.0.0.1:5500/tryonface-master/prada.html'>Try 3D</a></button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={mainImage} alt="Zoomed Glasses" className="zoomed-image" />
            <div className="thumbnail-images">
              {thumbnails.map((thumb, index) => (
                <img 
                  key={index} 
                  src={thumb} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="thumbnail-image" 
                  onClick={() => setMainImage(thumb)} 
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prada;
