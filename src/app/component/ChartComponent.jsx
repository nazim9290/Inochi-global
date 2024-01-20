"use client"
import ChartTable from "./ChartTable"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ChartComponent = ({page}) => {
    const [jsonData, setJsonData] = useState(null);
    useEffect(() => {
      fetch('../data.json')
        .then((response) => response.json())
        .then((data) => {
          setJsonData(data.data);
          // console.log(data.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return (
      <div>
    
     
        {jsonData ? (
          <ChartTable jsonData={jsonData} page={page} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default ChartComponent;