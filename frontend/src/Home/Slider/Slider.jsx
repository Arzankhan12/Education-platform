import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
  const slides = [
    { id: 1, imageUrl: 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg' },
    { id: 2, imageUrl: 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg' },
    { id: 3, imageUrl: 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg' },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-images">
          <img
            src={slides[currentIndex].imageUrl}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>
        <button className="prev btn1" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next btn1" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
