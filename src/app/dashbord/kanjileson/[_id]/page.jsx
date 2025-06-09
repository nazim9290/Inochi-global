"use client"
import React, { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";

const Page = () => {
  const [post, setPost] = useState({});
  const pathname = usePathname();
  const segments = pathname.split("/");
  const id = segments[segments.length - 1];

  //   const fetchPost = useCallback(async () => {
  //     try {
  //       const { data } = await axios.get(`https://api.inochieducation.com/api/singleblogs/${id}`);
  //       setPost(data.blog);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, [id]);

  //   useEffect(() => {
  //     if (id) fetchPost();
  //   }, [fetchPost, id]);

  return (
    <div>
      <div className="d-flex">
        <SideNavbar />
        <div className="w-75" style={{ marginLeft: "auto" }}>
          <h1 className="text-center" style={{ color: "black" }}>
            Kanji{" "}
          </h1>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <b>Kanji</b>
              </span>
              <span>
                <b>Reading</b>
              </span>
              <span>
                <b>Meaning</b>
              </span>
              <span>
                <b>Details</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
};

export default Page;
