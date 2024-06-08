import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { YT_SEARCH } from "../utils/constant";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const SearchByName = () => {
  const key = "AIzaSyDnwk6tTYmcwodEuzOLoRuAISaTxOXgbS0";
  const { name } = useParams();
  const [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    const getSearchVideos = async () => {
      const response = await fetch(
        YT_SEARCH + name + "&key=" + key
      );
      const json = await response.json();

      setSearchVideos(json.items);
    };

    getSearchVideos();
  }, [name]);

  return (
    <div className="flex flex-col sm:flex-wrap sm:flex-row">
      {searchVideos.map((searchVideo) =>
        searchVideo.id.kind === "youtube#channel" ? (
          <ChannelCard
            key={"channel" + searchVideo.id.videoId}
            info={searchVideo}
          />
        ) : (
          <Link
            key={searchVideo.id.videoId}
            to={"/watch?v=" + searchVideo.id.videoId}
          >
            <VideoCard info={searchVideo} />
          </Link>
        )
      )}
    </div>
  );
};

export default SearchByName;
