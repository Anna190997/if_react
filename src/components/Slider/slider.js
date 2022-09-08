import './slider.css';
import React from 'react';

const Slider = ({ arrowImg, changeSlide, changeClass, sliderMin, sliderMax, arrayLength }) => {
  return (
    <>
      {sliderMin === 0 || sliderMax >= arrayLength ? null : (
        <img src={arrowImg} alt="changeSlide" className={changeClass} onClick={changeSlide} />
      )}
    </>
  );
};

export default Slider;
