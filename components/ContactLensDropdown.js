import React from "react";
import "../styles/EyeglassDropdown.css"; // Ensure correct path

const ContactLens = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-grid">
        <div className="dropdown-column">
          <h3>Brands</h3>
          <ul>
            <li>Alcon</li>
            <li>Bausch & Lomb</li>
            <li>Johnson & Johnson</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Type</h3>
          <ul>
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
            <li>Yearly</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Color</h3>
          <ul>
            <li>Blue</li>
            <li>Green</li>
            <li>Gray</li>
            <li>Brown</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Special Features</h3>
          <ul>
            <li>UV Protection</li>
            <li>Hydragel</li>
            <li>Multifocal</li>
            <li>Colored</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactLens;