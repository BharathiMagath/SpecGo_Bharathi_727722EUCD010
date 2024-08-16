import React, { useState, useEffect } from "react";
import "../styles/Offer.css";

const Offers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const offers = [
    {
      src: "https://d3995ea24pmi7m.cloudfront.net/fit-in/640x285/media/wysiwyg/titan_cms/cards-section/tep_app_offer_640X290.jpg",
      alt: "Offer 1"
    },
    {
      src: "https://d3995ea24pmi7m.cloudfront.net/fit-in/640x285/media/wysiwyg/Aristo_Offer-page_640X290_1_.png",
      alt: "Offer 2"
    },
    {
      src: "https://d3995ea24pmi7m.cloudfront.net/fit-in/640x285/media/wysiwyg/Refer-and-Earn_640X290.png",
      alt: "Offer 3"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [offers.length]);

  return (
    <div className="offers">
      {offers.map((offer, index) => (
        <img
          key={index}
          src={offer.src}
          alt={offer.alt}
          className={`offer-image ${index === currentSlide ? "active" : ""}`}
          style={{ display: index === currentSlide ? "block" : "none" }}
        />
      ))}
      <div className="dots">
        {offers.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;