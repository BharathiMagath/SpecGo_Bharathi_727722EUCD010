import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ShopByCategory.css";

const MenCategory = () => {
  const navigate = useNavigate();

  // Function to handle navigation based on category
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="category-content">
      <div
        className="category-item"
        onClick={() => handleNavigation("/eyeglass-product")}
        style={{ cursor: "pointer" }}
      >
        <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_computer_glasses.png" alt="Eyeglasses" />
        <span>Eyeglasses</span>
      </div>
      <div
        className="category-item"
        onClick={() => handleNavigation("/sunglass-product")}
        style={{ cursor: "pointer" }}
      >
        <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_sunglasses.png" alt="Sunglasses" />
        <span>Sunglasses</span>
      </div>
      <div
        className="category-item"
        onClick={() => handleNavigation("/computer-glasses-product")}
        style={{ cursor: "pointer" }}
      >
        <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_eyeglasses.png" alt="Computer Glasses" />
        <span>Computer Glasses</span>
      </div>
      <div
        className="category-item"
        onClick={() => handleNavigation("/reading-glasses-product")}
        style={{ cursor: "pointer" }}
      >
        <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_reading_glasses.png" alt="Reading Glasses" />
        <span>Reading Glasses</span>
      </div>
      <div
        className="category-item"
        onClick={() => handleNavigation("/contact-lenses-product")}
        style={{ cursor: "pointer" }}
      >
        <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_contact_lenses.png" alt="Contact Lenses" />
        <span>Contact Lenses</span>
      </div>
      <div
        className="category-item"
        onClick={() => handleNavigation("/accessories-product")}
        style={{ cursor: "pointer" }}
      >
        <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/media/wysiwyg/titan_cms/shop_by_category/men_accessories.png" alt="Accessories" />
        <span>Accessories</span>
      </div>
     
    </div>
  );
};

export default MenCategory;
