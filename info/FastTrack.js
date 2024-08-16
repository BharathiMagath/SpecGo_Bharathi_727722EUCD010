import React, { useState } from 'react';
import '../styles/ProductInfo.css';

const FastTrack = () => {
  const [mainImage, setMainImage] = useState("https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/f/t/ft1152ufp3_4_lar.jpg");
  const [isModal1Open, setIsModal1Open] = useState(false);

  const thumbnails = [
    "https://d3995ea24pmi7m.cloudfront.net/ft-media/catalog/product/f/t/ft1152ufp3_4_lar.jpg",
    "https://m.media-amazon.com/images/I/31RpASt6gbL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
    "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/f/t/ft1127mfp1_1_lar.jpg"
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  const handleDoubleClick = () => {
    setIsModal1Open(true);
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
  };

  const handleTryOnClick = () => {
    // Logic to trigger the 3D try-on feature
    console.log("Try on Threed button clicked");
    // You can add navigation or modal logic here if needed
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
            <h1>Fastrack Oval</h1>
            <p>Stylish Oval Rimmed Eyeglasses</p>
            <p>Size: Small</p>
            <p>Color: Black</p>
            <p>Shape: Oval</p>
            <h2>₹1200</h2>
            <p>Inclusive of all taxes</p>
            <div className="promotion">
              <p>Free Lenses with every frame</p>
              <p>Limited Period Offer</p>
              <p>Get Free BLU Screen or Progressive Lenses!</p>
            </div>
            <button className="back-button" ><a href='http://127.0.0.1:5500/tryonface-master/glass1.html' >Try 3D</a></button> 
          </div>
        </div>
      </div>

      {isModal1Open && (
        <div className="modal1">
          <div className="modal1-content">
            <span className="close1" onClick={closeModal1}>&times;</span>
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

export default FastTrack;
