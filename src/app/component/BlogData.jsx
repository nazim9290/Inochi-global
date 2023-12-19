"use client";
import React, { useEffect, useState } from 'react';
import ImageConverter from './ImageConverter';
import axios from 'axios';
import TopBanner from './TopBanner';
const BlogData = () => {
  const [blogs, setBlog] = useState({});
  const id = `71whWv2e1`;
  
  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("/published-blogs");
      console.log("user posts => ", data.publishedBlogs); // Log the array of published blogs
      setBlog(data.publishedBlogs);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
       {/* Only render TopBanner if storedBase64Data is available */}
       <TopBanner id={id} title="Blog" />

    
    </div>
  );
};

export default BlogData;
