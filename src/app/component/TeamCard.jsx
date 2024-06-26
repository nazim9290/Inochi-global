// "use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FacebookOutlined, GoogleOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

const TeamCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  // console.log(data.image.url)


  return (
    <div className='team-t row'>
      {data.image ? (
        <>
          <div className="my-5 ">
            <div className="row my-lg-4 team-er">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="card  rounded position-relative"
                style={{
                  width: 'auto', // Set width to 100% for full length
                  height: 'auto', // Set height to auto to maintain aspect ratio
                }}
              >
                <Image src={data.image.url} alt="Bootstrap" width={250} height={250} objectFit="cover" />
                {isHovered && (
                  <div
                    className="text-overlay position-absolute left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)', // Black background on hover
                    }}
                  >
                    <p>{data.name}</p>
                    <p>{data.designation}</p>

                    <div className="social-links">
                    <a href={data.twiter}><TwitterOutlined /></a>
                    <a href={data.facebook}><FacebookOutlined /></a>
                    <a href={data.email}><GoogleOutlined /></a>
                    <a href={data.linkdin}><LinkedinOutlined /></a>
                    <a href={data.youtube}><YoutubeOutlined /></a>
                  </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TeamCard;
