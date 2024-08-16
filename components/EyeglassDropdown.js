import React from "react";
import "../styles/EyeglassDropdown.css";

const EyeglassDropdown = () => {
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
          <h3>Shape</h3>
          <ul>
            <li>Rectangle</li>
            <li>Round</li>
            <li>Cat Eye</li>
            <li>Pilot</li>
            <li>Wayfarer</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Collection</h3>
          <ul>
            <li>EyeX</li>
            <li>Tees</li>
            <li>Signature</li>
            <li>Meraki</li>
            <li>Memory Flex</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Style</h3>
          <ul>
            <li>Rimmed</li>
            <li>Semi-Rimmed</li>
            <li>Rimless</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Top Brands</h3>
          <ul>
            <li>Zefr</li>
            <li>Titan</li>
            <li>Fastrack</li>
            <li>Dash For Kids</li>
            <li>Vogue Eyewear</li>
            <li>Tommy Hilfiger</li>
            <li>Diesel</li>
            <li>Emporio Armani</li>
          </ul>
        </div>
        <div className="dropdown-column">
          <h3>Featured Brands</h3>
          <ul>
            <li>Rayban</li>
            <li>Carrera</li>
            <li>Silhouette</li>
            <li>Bolon</li>
            <li>Stepper</li>
            <li>Dolce And Gabbana</li>
            <li>Oakley</li>
            <li>Aristo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EyeglassDropdown;
