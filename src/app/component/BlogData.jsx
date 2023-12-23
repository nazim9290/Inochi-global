"use client";
import React, { useEffect, useState } from 'react';
import ImageConverter from './ImageConverter';
import axios from 'axios';
import BlogCard from './BlogCard';

const BlogData = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("/published-blogs");
      // console.log("user posts => ", data.publishedBlogs);
      setBlogs(data.publishedBlogs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
            <div className="row">
                {blogs.map((blog, index) => (
                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <BlogCard data={blog} />
                    </div>
                ))}
            </div>
        </div>
  );
};

export default BlogData;
