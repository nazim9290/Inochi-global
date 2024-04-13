"use client";
import React, { useEffect, useState } from 'react';
import ImageConverter from './ImageConverter';
import axios from 'axios';
import BlogCard from './BlogCard';

const BlogData = ({page}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("api/published-blogs");
      // console.log("user posts => ", data.publishedBlogs);
      setBlogs(data.publishedBlogs);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container main-blogs componentStyle ">
    <h1 className="text-center">
      Our Blogs
    </h1>
           {page ==="main" ?(
            <div className="row">
        {blogs.slice(0, 3).map((blog, index) => (
          <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
            <BlogCard data={blog} />
          </div>
        ))}
      </div>
          
           ):(
            <div className="row">
                {blogs.map((blog, index) => (
                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <BlogCard data={blog} />
                    </div>
                ))}
            </div>
           )
           }
        </div>
  );
};

export default BlogData;
