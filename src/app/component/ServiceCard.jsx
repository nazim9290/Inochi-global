"use client"
import React, { useState } from 'react';
import ImageConverter from './ImageConverter';
import Image from 'next/image';

const ServiceCard = ({ data }) => {
  
    // console.log(data.image)
    return (
        <>
            {
                data.image ? (<>
                    <div className="my-5">

<div className="row my-lg-4">
    <div>
        <div className="card shadow rounded">
            <div className="card-body text-center">
                <Image src={data.image.url} alt="Bootstrap" width={150} height={150} /><br />
                <p className="text-center mb-5"><b>{data.title}</b></p>
                <p className="text-center mb-5"><b>{data.content}</b></p>

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

export default ServiceCard;
