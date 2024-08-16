import React, { useState } from 'react';
import '../styles/ProductInfo.css';

const Vogue = () => {
  const [mainImage, setMainImage] = useState("https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523308952_1_lar.jpg");
  const [selectedColor, setSelectedColor] = useState("Red");

  const images = {
    Black: [
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523W4452_1_lar.jpg",
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523W4452_3_lar.jpg",
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523W4452_4_lar.jpg"
    ],
    Red: [
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523308952_1_lar.jpg",
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523308952_3_lar.jpg",
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523308952_4_lar.jpg"
    ],
    Blue: [
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523308752_1_lar.jpg",
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523308752_3_lar.jpg",
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5523308752_6_lar.jpg"
    ],
    Pink: [
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5276303453_1_lar.jpg",
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5276303453_3_lar.jpg",
      "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/F/V/FVO5276303453_4_lar.jpg"
    ]
  };
  const colors = [
    { name: "Black", color: "#000000" }, // Black
    { name: "Red", color: "#452c0a" }, // Red
    { name: "Blue", color: "#0000FF" }, // Blue
    { name: "Pink", color: "#FFC0CB" } // Pink
  ];
  

  const handleColorClick = (colorName) => {
    setSelectedColor(colorName);
    setMainImage(images[colorName][0]);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div>
      <nav className="navbarinfo">
        <button className="back-button" onClick={handleBackClick}>Back</button>
      </nav>
      <div className="product-info-container">
        <div className="product-details">
          <div className="product-images">
            <img src={mainImage} alt="Main Glasses" className="main-image" />
            <div className="thumbnail-images">
              {images[selectedColor].map((thumb, index) => (
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
            <h1>Vogue Cat Eye</h1>
            <p>Classic Round Glasses</p>
            <p>Size: Medium</p>
            <p>Color: {selectedColor}</p>
            <p>Shape: Round</p>
            <h2>₹1800</h2>
            <p>Inclusive of all taxes</p>
            <div className="color-options">
              {colors.map((color, index) => (
                <div 
                  key={index} 
                  className={`color-circle ${selectedColor === color.name ? 'selected' : ''}`} 
                  style={{ backgroundColor: color.color }} 
                  title={color.name}
                  onClick={() => handleColorClick(color.name)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vogue;