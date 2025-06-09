
// "use client"
// import React, { useEffect, useState, useCallback } from 'react';
// import { usePathname } from 'next/navigation';
// import axios from 'axios';
// import Navbar from "../../component/navbar"
// import Image from 'next/image';
// const Page = () => {
//   const [post, setPost] = useState({});
//   const pathname = usePathname();
//   const segments = pathname.split('/');
//   const id = segments[segments.length - 1];

//   const fetchPost = useCallback(async () => {
//     try {
//       const { data } = await axios.get(`https://api.inochieducation.com/api/singleblogs/${id}`);
//       setPost(data.blog);
//       console.log(data.blog)
//     } catch (err) {
//       console.log(err);
//     }
//   }, [id]);

//   useEffect(() => {
//     if (id) fetchPost();
//   }, [fetchPost, id]);

//   return (
//     <div>
//     <Navbar />
//     {post.image && (

//     <div className='container'>
//       <h1>{post.title}</h1>
//         <div style={{
//           height:"auto",
//           width:"auto"
//         }}>
//         <Image src={post.image.url} alt='test' width={600} height={600}/>

//         </div>
//       <p>{post.content}</p>
//     </div>
//     )}
//     </div>
   
//   );
// };

// export default Page;
"use client"
import React, { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import Navbar from '../../component/navbar';
import Image from 'next/image';
import {ShareSocial} from 'react-share-social' 

const Page = () => {
  const [post, setPost] = useState({});
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  // const sitelink = `https://inochieducation.com${pathname}`;
  const sitelink = `https://inochieducation.com${pathname.split('/').slice(0, -1).join('/')}`;

// console.log(sitelink)
  const fetchPost = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/singleblogs/${id}`);
      setPost(data.blog);
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
          <div className=''>
          <Image
  src={post.image.url}
  width={100}
  height={100}
  alt=""
  style={{ width: "100%", height: "100%" }} 
/>
          </div>
          <p>{post.content}</p>
<br/>
<br/>
          <ShareSocial 
  title={'sharing happiness'} 
  url={sitelink}  // Pass sitelink variable here

  socialTypes= {['facebook']}
/>
        </div>
      
      )}

    </div>
  );
};

export default Page;
