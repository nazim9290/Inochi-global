"use client"
import React from 'react';
import Image from 'next/image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useRouter } from 'next/navigation'

const SeminerCard = ({ data }) => {
    // 
    const router = useRouter();
    const handlejoin = () => {
        router.push("/bookseminer")
    }
    return (
        <>
            <div className="card  shadow rounded">
                <div className="card-body text-center">
                    <Image src={data.image.url} alt="Bootstrap" width="300" height="350"
                    />
                    <br />
                    <h3>{data.title}</h3>

                    <p className="text-center mb-5">
                        {data.subtitle}
                    </p>
                    <div className="row">
                        <div className="col">
                            <AccessTimeIcon /><span>{data.time}</span>
                        </div>
                        <div className="col">
                            <CalendarMonthIcon /> <span>{data.date} </span>
                        </div>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary me-2" onClick={handlejoin}>Book now</button>
                </div>
            </div>
        </>
    );
}

export default SeminerCard;
