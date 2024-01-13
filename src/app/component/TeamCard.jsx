// "use client"
import React, { useState } from 'react';
import Image from 'next/image';

const TeamCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
// console.log(data.image.url)
  return (
    <>
      {data.image ? (
        <>
          <div className="my-5">
            <div className="row my-lg-4">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="card shadow rounded position-relative"
                style={{
                  width: '100%', // Set width to 100% for full length
                  height: 'auto', // Set height to auto to maintain aspect ratio
                }}
              >
                <Image src={data.image.url} alt="Bootstrap" width={280} height={400} objectFit="cover" />
                {isHovered && (
                  <div
                    className="text-overlay position-absolute left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)', // Black background on hover
                    }}
                  >
                    <p>{data.name}</p>
                    <p>{data.designation}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TeamCard;
