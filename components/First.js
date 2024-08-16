import React from 'react';
import '../styles/First.css';
import shopBannerImage from '../images/ad1.jpg'; // Adjust the path as per your project structure

const First = () => {
    const handleButtonClick = (message) => {
        alert(`Redirecting to ${message}...`);
        // Implement redirection logic here
    };

    return (
        <div className="container">
            <header className="header">
                <button onClick={() => handleButtonClick('shop')} id="shop-button">
                    Shop Here
                </button>
                <button onClick={() => handleButtonClick('login')} id="login-button">
                    Login
                </button>
                <button onClick={() => handleButtonClick('sign up')} id="signup-button">
                    Sign Up
                </button>
            </header>
            <section className="banner">
                <img src={shopBannerImage} alt="Shop Banner" className="banner-image" />
                <div className="banner-text">
                   
                </div>
            </section>
            <section className="about">
                <h2>About Our App</h2>
                <p>This is where you can describe the app and its benefits to users.</p>
            </section>
        </div>
    );
};

export default First;
