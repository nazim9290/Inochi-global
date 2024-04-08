"use client"
import React, { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import { Pagination, Spin } from 'antd';
import KanjiModel from "@/app/component/KanjiModel"
const Page = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const pathname = usePathname();
    const segments = pathname.split('/');
    const id = segments[segments.length - 1];
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

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    // const singleDetails = (item) => {
    //     console.log("Single item details:", item);
    //     // Add your logic for displaying details of the selected item here
    // };
    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div>
            <div className="d-flex">
                <SideNavbar />
                <div className="w-75" style={{ marginLeft: 'auto' }}>
                    <h1 className="text-center" style={{ color: "black" }}>Kanji </h1>
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <span><b>Kanji</b></span>
                            <span><b>Reading</b></span>
                            <span><b>Meaning</b></span>
                            <span><b>Details</b></span>
                        </div>
                        {loading ? (
                            <div className="d-flex " style={{ height: '200px' }}>
                                <Spin size="large" />
                            </div>
                        ) : (
                            <>
                                {post.slice((currentPage - 1) * 2, currentPage * 2).map(item => (
                                    <div className='d-flex justify-content-between '
                                        key={item._id}>
                                        <p onClick={() => handleItemClick(item)}>
                                            {item.character}</p>
                                        <p></p>
                                        <p>{item.meaning}</p>
                                        <p></p>
                                    </div>
                                ))}
                                {/*  */}
                                {selectedItem !== null && (
                                    <KanjiModel
                                        isOpen={true}
                                        toggle={closeModal}
                                        selectedItem={selectedItem}
                                    />
                                )}
                                {/*  */}
                                <div className='d-flex justify-content-center mt-3'>
                                    <Pagination
                                        current={currentPage}
                                        total={post.length}
                                        pageSize={2}
                                        onChange={onPageChange}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Foter />
        </div>
    );
};

export default Page;
