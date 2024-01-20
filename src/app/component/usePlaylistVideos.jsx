// "use client"
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const usePlaylistVideos = (playlistId, apiKey) => {
//   const [videos, setVideos] = useState([]);
//   const [error, setError] = useState(null);
// console.log("hook")
//   useEffect(() => {
//     const fetchPlaylistVideos = async () => {
//       try {
//         const response = await axios.get(
//           `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`
//         );
//         const fetchedVideos = response.data.items.map((item) => ({
//           title: item.snippet.title,
//           videoId: item.snippet.resourceId.videoId,
//           thumbnail: item.snippet.thumbnails.medium.url,
//         }));

//         setVideos(fetchedVideos);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchPlaylistVideos();
//   }, [playlistId, apiKey]);

//   return { videos, error };
// };

// export default usePlaylistVideos;
"use client";
import { useState, useEffect } from 'react';

const usePlaylistVideos = (playlistId, apiKey) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  console.log("hook");

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const fetchedVideos = data.items.map((item) => ({
          title: item.snippet.title,
          videoId: item.snippet.resourceId.videoId,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));

        setVideos(fetchedVideos);
      } catch (error) {
        setError(error);
      }
    };

    fetchPlaylistVideos();
  }, [playlistId, apiKey]);

  return { videos, error };
};

export default usePlaylistVideos;
