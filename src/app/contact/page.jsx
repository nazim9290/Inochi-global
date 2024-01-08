"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../component/navbar';
import Subsscribe from '../component/subscribe';
import Fotter from '../component/Foter';
import TopBanner from '../component/TopBanner';
import ContactForm from '../component/ContactForm';

const Contact = () => {
  const [id, setId] = useState(null); // Declare id state

  const [contacpages, setContacPages] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/conctact-page');
        const firstContacPage = response.data.contacpages[0];
        if (firstContacPage) {
          let fetchedId = firstContacPage.image.public_id;
          console.log(fetchedId);
          setId(fetchedId); // Set the id state
          setContacPages(response.data.contacpages);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      {id == null ? (
        <>
          Loading ...
        </>
      ) : (
        <>
          <TopBanner id={id} title="Contact" />
        </>
      )}

      <ContactForm />

      <Subsscribe />
      <Fotter />
    </div>
  );
};

export default Contact;
