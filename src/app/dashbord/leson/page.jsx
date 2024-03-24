"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import ChartComponent from "@/app/component/ChartComponent";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from "react";

const Page = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedItem, setSelectedItem] = useState(null);

    const fetchPost = useCallback(async () => {
        try {
            const { data } = await axios.get(`https://inochiglobal.onrender.com/kanji`);
            setPost(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchPost();
    }, []);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const router = useRouter();
    let _id = 1
    const handleCardClick = () => {
        router.push(`/dashbord/leson/${_id}`);
        // console.log(data._id)
    };
    return (
        <>
            <div className="">
                <SideNavbar />
                <div className="" style={{ marginLeft: 'auto' }}>
                    <h1 className="text-center" style={{ color: "black" }}>N5 Leasson </h1>
                   <div>
                   <p onClick={handleCardClick} style={{ border: "1px solid black",width:"80px"}}>LESSON 1</p>
                    <p style={{ border: "1px solid black",width:"80px"}}>LESSON 1</p>
                   </div>

                </div>
            </div>
            <Foter />
        </>
    );
};

export default Page;
