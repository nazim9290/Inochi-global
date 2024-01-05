// Make sure the path to the CSS file is correct
"use client"
import NavBar from './component/navbar';
import MainCarusel from './component/mainCarusel';
import Subsscribe from './component/subscribe';
import Service from './component/Service';
import Rapper from './component/Rapper';
import Tutorila from './component/Tutorrial';
import Team from './component/Team';
import WellStarter from './component/WellStarter'
import Testmonial from './component/testmonial'
import Fotter from './component/Foter';
import './globals.css'
import axios from "axios"
import React, { useState, useEffect } from 'react';

const HOME = () => {
  const [caruselData, setCaruselData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/published-carusels');
        setCaruselData(response.data.publishedCarusels);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <div >
        <NavBar />
        <MainCarusel  caruselData={caruselData}/>
        <Rapper />
        <Service />
        <WellStarter/>
        <Subsscribe />
        <Tutorila />
        <Team />
        <Testmonial/>
        <Fotter />
      </div>
    </div>
  );
};

export default HOME;
