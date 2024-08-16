import React from "react";
import "../styles/EyeglassDropdown.css";

const KidglassesDropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-grid">
        <div className="dropdown-column">
          <h3>Gender</h3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Style</h3>
          <ul>
            <li>Mirrored</li>
            <li>Tinted</li>
            <li>UV Protection</li>
            <li>Polarized</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Usage</h3>
          <ul>
            <li>Regular</li>
            <li>Power</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Collection</h3>
          <ul>
            <li>Vibes</li>
            <li>Seaside</li>
            <li>Vivid Geometry</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Shape</h3>
          <ul>
            <li>Pilot</li>
            <li>Wayfarer</li>
            <li>Wraparound</li>
            <li>Rectangle</li>
            <li>Round</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Brands</h3>
          <ul>
            <li>Titan</li>
            <li>Fastrack</li>
            <li>Dash For Kids</li>
            <li>Vogue Eyewear</li>
            <li>Rayban</li>
            <li>Ted Baker</li>
            <li>Burberry</li>
            <li>Skyfly</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KidglassesDropdown;