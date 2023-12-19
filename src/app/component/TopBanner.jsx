"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ImageConverter from './ImageConverter';

const TopBanner = ({ title, id }) => {
  // State to store base64 data and blogs
  const [storedBase64Data, setStoredBase64Data] = useState('');
  const [blogs, setBlog] = useState({});
  // Function to handle base64 data
  const handleBase64Data = (data) => {
    setStoredBase64Data(data);
  };

  // Render the component
  return (
    <>
      {/* ImageConverter component to handle base64 data */}
      <ImageConverter id={id} onBase64Data={handleBase64Data} />

      {/* Display the image and overlay when base64 data is available */}
      {storedBase64Data ? (
        <>
          <div className="image-container mb-3">
            {/* Display the image */}
            <img src={storedBase64Data} alt="klff" className="w-100 banner_height" />

            {/* Overlay with the title */}
            <div className="text-overlay">
              <h1 className='Top-banner-Header'><b>{title}</b></h1>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TopBanner;
