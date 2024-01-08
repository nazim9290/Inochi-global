// "use client"
// import Image from "next/image"
// import teams1 from "../../../public/imgages/1.jpg"
// import teams2  from "../../../public/imgages/2.jpg"
// import teams3 from "../../../public/imgages/3.jpg"
// import bright from "../../../public/imgages/bright.jpg" ;
// import { useState ,useEffect} from "react";
// import styles from "./MainCarousel.module.css"; // Create a separate CSS module
// import axios from "axios"

// const MainCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [caruselData, setCaruselData] = useState([]);

//   useEffect(() => {
//     fetchUserPosts();
//   }, []);

//   const fetchUserPosts = async () => {
//     try {
//       const response = await axios.get("/publishedCarusels");
//       setCaruselData(response.data.publishedCarusels);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div id="carouselExample" className={`carousel slide ${styles.carousel}`}>
//       <div className="carousel-inner">
//         <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
//           <Image src={teams1} className="d-block w-100 cur-height" alt="Team 1" />
//         </div>
//         <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
//           <Image src={teams3} className="d-block w-100 cur-height" alt="Team 3" />
//         </div>
//         <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
//           <Image src={teams2} className="d-block w-100 cur-height" alt="Team 2" />
//         </div>
//       </div>

//       <button className="carousel-control-prev" type="button" onClick={handlePrev}>
//         <span className="carousel-control-prev-icon" aria-hidden="true" />
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" onClick={handleNext}>
//         <span className="carousel-control-next-icon" aria-hidden="true" />
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default MainCarousel;
// MainCarousel.jsx
"use client"
// MainCarousel.jsx

// MainCarousel.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import ImageConverter from './ImageConverter';
import styles from './MainCarousel.module.css';

const MainCarousel = ({ caruselData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [base64Data, setBase64Data] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === caruselData.length - 1 ? 0 : prevIndex + 1));
      setBase64Data(null); // Reset base64Data when switching to a new item
    }, 5000);

    // Clear the interval when the component is unmounted or when the data changes
    return () => clearInterval(intervalId);
  }, [caruselData, base64Data]);

  useEffect(() => {
    // Fetch base64Data when the active index changes
    if (caruselData.length > 0) {
      const currentItem = caruselData[activeIndex];
      if (currentItem) {
        const fetchData = async () => {
          try {
            const response = await axios.get(`api/images/${currentItem.image.public_id}`);
            setBase64Data(response.data.url);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
      }
    }
  }, [caruselData, activeIndex]);

  return (
    <div id="carouselExample" className={`carousel slide ${styles.carousel}`}>
      <div className="carousel-inner">
        {caruselData.map((item, index) => (
          <div key={item._id} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
            <ImageConverter id={item.image.public_id} onBase64Data={(data) => setBase64Data(data)} />
            {base64Data && <Image src={base64Data} alt={`Team ${index + 1}`} width={150} height={150} />}
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" onClick={() => setActiveIndex((prevIndex) => (prevIndex === 0 ? caruselData.length - 1 : prevIndex - 1))}>
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={() => setActiveIndex((prevIndex) => (prevIndex === caruselData.length - 1 ? 0 : prevIndex + 1))}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainCarousel;
