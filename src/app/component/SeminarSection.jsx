"use client"
import logo from "../../../public/imgages/LOGO.png"
import Image from 'next/image';
import { useEffect, useState } from "react";
import axios from "axios";
import SeminerCard from "./SeminerCard"
const SeminarSection = () => {
  const [loading, setLoading] = useState(true);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("api/seminar");
      setLoading(false);
      setBlogs(data.seminer);
    } catch (err) {
      console.log(err);
      setLoading(false);

    }
  };
  return (
    <>
      <div className="wrapper">
        <h3 className=" my-5 seminer_header"><>JOIN FREE SEMINAR</></h3>
        <br/>
        <br/>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="row">
            {
              blogs.map(item => (
                <div key={item._id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 team-s"
                >
                  <SeminerCard data={item} />
                </div>
              ))
            }
          </div>
        )}

      </div>

    </>
  );
}

export default SeminarSection;
