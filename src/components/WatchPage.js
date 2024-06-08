import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { fetchFromAPI } from "../utils/constant";

import VideoDetails from "./VideoDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      const data = await fetchFromAPI(
        `videos?part=snippet,statistics&id=${id}`
      );
      setVideoDetail(data.items[0]);
    };
    getVideoDetails();
  }, [id]);

  return !videoDetail ? (
    "Loading..."
  ) : (
    <div className="p-4 px-5 md:w-[50rem] md:h-[28rem] ">
      <ReactPlayer
        className=""
        url={"https://www.youtube.com/embed/" + searchParams.get("v")}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
      />
      {videoDetail && <VideoDetails videoDetail={videoDetail} />}
    </div>
  );
};

export default WatchPage;
