"use client"
import React, { useEffect, useState } from 'react';
import usePlaylistVideos from './usePlaylistVideos';
 import { useVideoContext } from '../../context/VideoContext';
import Image from 'next/image';

const PlaylistVideos = ({ Id }) => {
  const apiKey = 'AIzaSyBhX7lUFUKEFEdZOhrKvwPw2XSZTkZm4rs';
  const { videos, error } = usePlaylistVideos(Id, apiKey);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const { setVideoId } = useVideoContext();

  const handleThumbnailClick = (videoId) => {
    setVideoId(videoId);
  };
  useEffect(() => {
  }, [selectedVideoId]);
  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {videos.map((video, index) => (
          <li key={index}>
            <br />
              <Image
                src={video.thumbnail}
                alt="Video Thumbnail"
                onClick={() => handleThumbnailClick(video.videoId)}
                width={150}
                height={84}
                style={{ cursor: 'pointer', width: '150px', height: '84px' }}
              />
              
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistVideos;
