"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";

const Examlist = () => {
    const [categorys, setCategory] = useState([]);
    useEffect(() => {
        fetchExamCategory();
    }, []);
    const fetchExamCategory = async () => {
        try {
          const { data } = await axios.get(
            "https://api.inochieducation.com/api/get-all-posts"
          );
          // console.log("user posts => ", data);
          setCategory(data);
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div>
            <h1 className='text-center'>Here Exam List</h1>
            {/* {
              categorys.map((item)=>(
                <div key={item._id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                <p>Test</p>
                    </div>
              ))
            } */}
     <div className="card" style={{width: '18rem'}}>
    
  <ul className="list-group list-group-flush">
  <Link href="/dashbord/quiz">
  <li className="list-group-item">Cras justo odio</li>

  </Link>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
</div>

        </div>
    );
}

export default Examlist;
