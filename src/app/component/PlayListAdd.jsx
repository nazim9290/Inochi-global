"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayList from "./Playlist.jsx"
import { useVideoContext } from '../../context/VideoContext.jsx';
import YouTubeSingleVideo from './YouTubeSingleVideo.jsx';
const PlayListAdd = () => {
  console.log("test")
    const [posts, setPosts] = useState([]);
    const { selectedVideoId } = useVideoContext();
    useEffect(() => {
        fetchUserPosts();
    }, []);
    const fetchUserPosts = async () => {
        try {
            const response = await axios.get(
              "https://api.inochieducation.com/api/video-playlist"
            );
            setPosts(response.data.video);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <br/>
            <div className="" style={{marginTop:"auto"}}>
      <div className="row">
        <div className="col-md-3">
          {selectedVideoId && <YouTubeSingleVideo videoId={selectedVideoId} />}
        </div>
        <div className="col-md-7 playerlist">
          {/* Right Column: Playlist */}
          {posts.map((item, index) => (
            <div key={index} className="">
              <PlayList data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default PlayListAdd;