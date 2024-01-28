
"use client"
import React, { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import Vocevolary from '@/app/component/Vocevolary';
import Grammer from "@/app/component/Grammer";
import Kaiwa from '@/app/component/Kaiwa';
import Mondai from "@/app/component/Mondai";

const Page = () => {
  const [post, setPost] = useState({});
  const [activeComponent, setActiveComponent] = useState('component1'); // Set Component1 as default
  const [loading, setLoading] = useState(true); // Loading state
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  const fetchPost = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://inochiglobal.onrender.com/lesson`);
      setPost(data);
      setLoading(false); // Set loading to false after fetching data
    } catch (err) {
      console.log(err);
      setLoading(false); // Handle error and set loading to false
    }
  }, []);

  useEffect(() => {
     fetchPost();
  }, [fetchPost]);

  // Function to handle button click and set active component
  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  // Render different components based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case 'component1':
        return <Vocevolary data={post} />;
      case 'component2':
        return <Grammer />;
      case 'component3':
        return <Kaiwa />;
      case 'component4':
        return <Mondai />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="d-flex">
        <SideNavbar />
        <div className="w-75" style={{ marginLeft: 'auto' }}>
          <h1 className="text-center" style={{ color: "black" }}>Lesson {id} </h1>
          <div className="container">
            {/* Conditional rendering for loading indicator */}
            {loading ? (
              <div className="d-flex" style={{ height: '200px', justifyContent: 'center', alignItems: 'center' }}>
                <p>Loading...</p>
              </div>
            ) : (
              // Buttons to change active component
              <>
                <div className="d-flex">
                  <p onClick={() => handleComponentChange('component1')}>Vocevolary</p>
                  <p onClick={() => handleComponentChange('component2')}>Grammer</p>
                  <p onClick={() => handleComponentChange('component3')}>Kaiwa</p>
                  <p onClick={() => handleComponentChange('component4')}>Mondai</p>
                </div>
                {renderComponent()}
              </>
            )}
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
};

export default Page;
