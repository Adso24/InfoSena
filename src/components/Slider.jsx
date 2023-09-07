import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "/src/Css/Slider-bienestar.css";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAutoPlay(false);
  };

  const images = [
    "/src/images/slider-bienestar-1.jpeg",
    "/src/images/slider-bienestar-2.jpeg",
    "/src/images/slider-bienestar-3.jpeg",
  ];

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
      
      
    }
  }, [autoPlay, images.length]);
  
  return (
    <>
      <div className="slider-container">
        <div className="header-slider-bienestar">
          <div className="titulo-slider">
            <p>DESCUBRE TAMBIÉN:</p>
          </div>
          <div className="slider-arrows">
            <button onClick={handlePrev}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button onClick={handleNext}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <Carousel className="carrusel"
          selectedItem={currentIndex}
          onChange={() => setAutoPlay(true)}
          infiniteLoop
          autoPlay={autoPlay}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          stopOnHover={false}
          swipeable={false}
        >
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image} alt={`Image ${index + 1}`} />
              <h1>Hola</h1>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
