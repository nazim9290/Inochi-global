"use client"
import React, { useEffect, useState } from 'react';
import CreateCaruselTop from '../component/CreateCaruselTop';
import CaruselPending from '../component/pendingCarusel.jsx';
import axios from 'axios';

const CreateCarusel = () => {
  const [caruselData, setCaruselData] = useState([]);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const response = await axios.get("/publishedCarusels");
      setCaruselData(response.data.publishedCarusels);
    } catch (err) {
      console.log(err);
    }
  };
 
 

  return (
    <div>
      <h1 className="text-center">Carusel Data</h1>
      <hr />
      <div className="row">
      {
        caruselData ? (
            caruselData.map((item, index) => (
                <div key={index} className='col-md-4'>
                <CaruselPending
                data={item}
               
              />
                </div>
            ))
        ):
            <>
            </>
        
      }
      </div>
    </div>
  );
};

export default CreateCarusel;
