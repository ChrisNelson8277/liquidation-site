import React from "react";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "./AdminComponents/admincard.css";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyle = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    // backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const leftArrowStyles = {
    fontSize: "2.5rem",
    color: "white",
    zIndex: "1",
    cursor: "pointer",
  };

  const rightArrowStyles = {
    fontSize: "2.5rem",
    color: "white",
    zIndex: "1",
    cursor: "pointer",
  };

  function prevImage() {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function nextImage() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="slider-container" style={sliderStyle}>
      <div className="left-arrow" style={leftArrowStyles} onClick={prevImage}>
        <AiFillCaretLeft />
      </div>
      <div className="slider-image">
        <img src={slides[currentIndex].url} />
      </div>
      <div className="right-arrow" style={rightArrowStyles} onClick={nextImage}>
        <AiFillCaretRight />
      </div>
    </div>
  );
}

export default ImageSlider;
