import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_POPULAR_VIDEOS_API } from "../utils/constant";

import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const videosList = await data.json();

    setVideos(videosList.items);
  };

  return !videos ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center justify-center sm:flex-wrap sm:flex-row sm:items-start">
      {videos.map((video) => (
        <Link key={video.id} to={"watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;
