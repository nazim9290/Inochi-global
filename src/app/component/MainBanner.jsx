"use client"
import Image from 'next/image';
import bannerimage from "../../../public/imgages/banneimage.png"
const MainBanner = ({ title }) => {
    return (
        <>
            <div className="image-container mb-3">
                <Image src={bannerimage} alt="Banner" className="w-100 banner_height" />
                <div className="text-overlay">
                    <h1 className='Top-banner-Header'><b>{title}</b></h1>
                </div>
            </div>

        </>
    );
};

export default MainBanner;
