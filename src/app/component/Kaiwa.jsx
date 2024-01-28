
"use client"
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import NCard from "./NCard";

const Kaiwa = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10; 

    const fetchPosts = useCallback(async () => {
        try {
            const { data } = await axios.get(`https://inochiglobal.onrender.com/lesson?page=${currentPage}&limit=${postsPerPage}`);
            setPosts(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    }, [currentPage, postsPerPage]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts, currentPage, postsPerPage]);

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map(post => (
                        <NCard key={post._id} data={post}/>
                    ))}
                    <div className="d-flex  justify-content-between">
                    <button className="btn btn-primary" onClick={prevPage}
                     disabled={currentPage === 1}>Previous Lesson</button>
                    <button  className="btn btn-primary"  onClick={nextPage}>Next Lesson</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Kaiwa;
