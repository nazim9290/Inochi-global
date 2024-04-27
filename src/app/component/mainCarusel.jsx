
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import Image from 'next/image';

const MainCarusel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/published-carusels");
        const fetchedImages = response.data.publishedCarusels; // Adjust based on your actual data structure
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
          className="d-block w-100 mainImaget"
          src={item.image.url}
          height={300}
          width={1360}
          alt={item}
        /> 
        {/* mainImage  mainImaget*/}
         <Image
          className="d-block w-100 mainImagerep"
          src={item.image.url}
          height={170}
          width={600}
          alt={item}
        /> 
      </Carousel.Item>
    ));
  };
  return (
    <div className='main-prestener componentStyle'>
      <Carousel>
        {renderCarousel()}
      </Carousel>
    </div>
  );
};

export default MainCarusel;
