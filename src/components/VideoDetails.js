import { useState } from "react";
import {
  MdThumbUpOffAlt,
  MdThumbDownOffAlt,
  MdThumbUp,
  MdThumbDown,
} from "react-icons/md";

const VideoDetails = ({ videoDetail }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  return (
    <div>
      <p className="text-xl font-semibold py-2">{videoDetail.snippet.title}</p>
      <div className="flex flex-col md:flex-row gap-1 justify-start md:items-center md:justify-between py-2">
        <p className="font-bold">{videoDetail.snippet.channelTitle}</p>
        <div className="flex items-center justify-between gap-1 py-2">
          <div className="flex items-center mr-4">
            <button
              onClick={() => {
                setIsLiked(!isLiked);
                setIsDisliked(false);
              }}
              className="bg-red-600 text-white rounded-l-full py-2 px-5 "
            >
              {isLiked ? (
                <MdThumbUp size="1.5rem" />
              ) : (
                <MdThumbUpOffAlt size="1.5rem" />
              )}
            </button>

            <button
              onClick={() => {
                setIsDisliked(!isDisliked);
                setIsLiked(false);
              }}
              className="bg-red-600 text-white rounded-r-full py-2 px-5"
            >
              {isDisliked ? (
                <MdThumbDown size="1.5rem" />
              ) : (
                <MdThumbDownOffAlt size="1.5rem" />
              )}
            </button>
          </div>

          <button
            onClick={() => setSubscribed(!subscribed)}
            className="bg-slate-700 text-white rounded-full py-2 px-5 cursor-pointer"
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
