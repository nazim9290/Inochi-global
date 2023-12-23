"use client"
import React, { useState, useEffect } from 'react';

const ChartComponent = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch('../data.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>JSON Data:</h1>
      {jsonData ? (
        <div>
          {jsonData.data.map((item, index) => (
            <div key={index}>
              <p> {item.HIRAGANA}
               {item.Bangla} {item.ROMAJI} </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ChartComponent;
