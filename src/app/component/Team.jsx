"use client"

import Image from "next/image"
import teams from "../../../public/imgages/teams.png"
import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard.jsx"
const Team = () => {
  // /team-member
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchUserPosts();

  }, []);

  const fetchUserPosts = async () => {
    try {
      const { data } = await axios.get("api/team-member");
      setLoading(false); // Set loading to false when data is fetched
       const sortdat = data.team.sort((a, b) => a.position - b.position);

      setBlogs(sortdat);
      // console.log(data.team)
    } catch (err) {
      console.log(err);
      setLoading(false); // Set loading to false when data is fetched

    }
  };
  return (
    <div className="mb-5 componentStyle " style={{ marginTop: '7%' }}>
      <h3 className="text-danger text-center my-5 container"><b className="my-5">OUR TEAM</b></h3>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="container ">
          <div className="row">
            {
              blogs.map(item => (
                <div key={item._id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
                >
                  <TeamCard data={item} />
                </div>
              ))
            }
          </div>
        </div>
      )}

    </div>

  )
}
export default Team