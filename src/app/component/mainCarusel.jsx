
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import Image from 'next/image';

const MainCarusel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api//published-carusels");
        const fetchedImages = response.data.publishedCarusels; // Adjust based on your actual data structure
      //  console.log(fetchedImages)
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount
  const renderCarousel = () => {
    return images.map(item => (
      <Carousel.Item key={item.id}>
        <Image
          className="d-block w-100"
          src={item.image.url}
          height={1000}
          width={800}
          alt={item}
        />
      </Carousel.Item>
    ));
  };

  return (
    <div>
      <Carousel>
        {renderCarousel()}
      </Carousel>
    </div>
  );
};

export default MainCarusel;
