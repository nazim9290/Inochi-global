"use client"
import React, { useState } from 'react';
import ImageConverter from './ImageConverter';
import Image from 'next/image';

const BlogCard = ({ data }) => {
    const [storedBase64Data, setStoredBase64Data] = useState('');
    const handleBase64Data = (data) => {
        setStoredBase64Data(data);
    };
    console.log(data.image.public_id)
    return (
        <>
            <ImageConverter id={data.image.public_id} onBase64Data={handleBase64Data} />
            {
                storedBase64Data ? (<>

                    <div className="my-5">

                        <div className="row my-lg-4">
                            <div>
                                <div className="card shadow rounded">
                                    <div className="card-body text-center">
                                        <Image src={storedBase64Data} alt="Bootstrap" width={150} height={150} /><br />
                                        <p className="text-center mb-5"><b>{data.title}</b></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </>) : (<></>)
            }
        </>
    );
}

export default BlogCard;