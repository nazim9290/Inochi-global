// MainCarousel.jsx
"use client"
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import ImageConverter from "./ImageConverter"; // Update the path accordingly
import styles from "./MainCarousel.module.css";

const MainCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [caruselData, setCaruselData] = useState([]);
  const [storedBase64Data, setStoredBase64Data] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? caruselData.length - 1 : prevIndex - 1));
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === caruselData.length - 1 ? 0 : prevIndex + 1));
  }, [caruselData]);

  const fetchUserPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/published-carusels");
      console.log("response", response.data);
      setCaruselData(response.data.publishedCarusels);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserPosts();

    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [handleNext]);

  const handleBase64Data = (base64Data) => {
    setStoredBase64Data(base64Data);
  };

  return (
    <div id="carouselExample" className={`carousel slide ${styles.carousel}`}>
      {loading && <p>Loading...</p>}
      <div className="carousel-inner">
        {caruselData.map((item, index) => (
          <div key={item._id} className={`carousel-item ${activeIndex === index ? "active" : ""}`}>
            <ImageConverter id={item.image.public_id} onBase64Data={handleBase64Data} />
            {storedBase64Data && (
              <Image src={storedBase64Data} alt={`Team ${index + 1}`} width={150} height={150} />
            )}
          </div>
        ))}
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
