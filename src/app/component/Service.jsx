
"use client"
import Image from "next/image"
import ServiceCard from "./ServiceCard"
import { useState, useEffect } from "react";
import axios from "axios";
const Service = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("/blogs-service");
      console.log("user posts => ", data.publishedstudy);
      setBlogs(data.publishedstudy);
      setLoading(false); // Set loading to false when data is fetched
    } catch (err) {
      console.log(err);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  return (
    <div>
      {/* OUR SERVICE */}
      <h3 className="text-danger text-center my-5" style={{ marginTop: "7%" }}>
        <b className="my-5">OUR SERVICE</b>
      </h3>
      <p className="text-center mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s
      </p>
      <div className="container">
        {loading ? (
          // Render a loading indicator while data is being fetched
          <div className="text-center">Loading...</div>
        ) : (
          // Render the blogs when data is available
          <div className="row">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
              >
                <ServiceCard data={blog} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;