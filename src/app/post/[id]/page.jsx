
"use client"
import React, { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import Navbar from "../../component/navbar"
import Image from 'next/image';
const Page = () => {
  const [post, setPost] = useState({});
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  // console.log(id);

  const fetchPost = useCallback(async () => {
    try {
      const { data } = await axios.get(`http://45.77.247.238:5000/api/singleblogs/${id}`);
      setPost(data.blog);
      console.log(data.blog)
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    if (id) fetchPost();
  }, [fetchPost, id]);

  return (
    <div>
    <Navbar />
    {post.image && (

    <div className='container'>
      <h1>{post.title}</h1>
        <>
        <Image src={post.image.url} alt='test' width={400} height={400}/>

        </>
      
      <p>{post.content}</p>
    </div>
    )}
    </div>
   
  );
};

export default Page;
