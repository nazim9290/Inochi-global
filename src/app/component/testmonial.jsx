"use client"
import Image from "next/image"
import teams1 from "../../../public/imgages/1.jpg"
import teams2  from "../../../public/imgages/2.jpg"
import teams3 from "../../../public/imgages/3.jpg"
import bright from "../../../public/imgages/bright.jpg" ;
import { useState } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide my-5 componentStyle" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className={activeIndex === 0 ? 'active' : ''}
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          className={activeIndex === 1 ? 'active' : ''}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          className={activeIndex === 2 ? 'active' : ''}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <Image src={teams1} className="d-block w-100 slide_height" alt="Slide 1" />
          <div className="carousel-caption d-md-block">
            <Image src={bright} className="rounded-circle slide_img" alt="Cinque Terre" />
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <Image src={teams2} className="d-block w-100 slide_height" alt="Slide 2" />
          <div className="carousel-caption d-md-block">
            <Image src={bright} className="rounded-circle slide_img" alt="Cinque Terre" />
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <Image src={teams3} className="d-block w-100 slide_height" alt="Slide 3" />
          <div className="carousel-caption d-md-block">
            <Image src={bright} className="rounded-circle slide_img" alt="Cinque Terre" />
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
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

export default Testimonial;
