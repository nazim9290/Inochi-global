"use client"
import Image from "next/image"
import teams1 from "../../../public/imgages/1.jpg"
import teams2  from "../../../public/imgages/2.jpg"
import teams3 from "../../../public/imgages/3.jpg"
import bright from "../../../public/imgages/bright.jpg" ;
import { useState } from "react";
import styles from "./MainCarousel.module.css"; // Create a separate CSS module

const MainCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExample" className={`carousel slide ${styles.carousel}`}>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <Image src={teams1} className="d-block w-100 cur-height" alt="Team 1" />
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          <Image src={teams3} className="d-block w-100 cur-height" alt="Team 3" />
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
          <Image src={teams2} className="d-block w-100 cur-height" alt="Team 2" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainCarousel;
