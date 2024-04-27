"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const BlogCard = ({ data }) => {
  const router = useRouter();
  const [showFullContent, setShowFullContent] = useState(false);

  const handleCardClick = () => {
      router.push(`/post/${data._id}`);
  };

  // Function to trim the content to a certain word count
  const trimContent = (text, wordCount) => {
      const words = text.split(' ');
      if (words.length > wordCount) {
          return words.slice(0, wordCount).join(' ') + '...';
      }
      return text;
  };

  return (
    <>
      {data.image && (
        <div className="my-5 blogC">
          <div className="row my-lg-4">
            <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <Image src={data.image.url} alt="Bootstrap" width={250} height={250} /><br />
                  <p className="text-center mb-2"><b>{data.title}</b></p>
                                        {showFullContent ? (
                                            <p className="text-center mb-2"><b>{data.content}</b></p>
                                        ) : (
                                            <p className="text-center mb-2"><b>{trimContent(data.content, 10)}</b></p>
                                        )}
                                        {!showFullContent && (
                                            <button className="btn btn-link linkbtns" onClick={() => 
                                            handleCardClick}>Read More</button>
                                        )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
