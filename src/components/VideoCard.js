import React from "react";
import moment from "moment";

import noToString from "../utils/noToString";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="md:p-2 m-2 w-80 md:w-72 rounded">
      <img
        className="rounded-lg shadow-lg hover:scale-110 hover:ease-in-out duration-300"
        alt="thumnails"
        src={thumbnails.medium.url}
      />
      <div>
        <p className="font-bold line-clamp-2 my-2">{title}</p>
        <p className="font-medium text-sm">{channelTitle}</p>
      </div>
      <div className="flex items-center gap-1 py-1">
        {info.statistics && (
          <>
            <p className="text-sm text-gray-600 font-medium">
              {noToString(info.statistics.viewCount)} views{" "}
            </p>
            <p className="text-gray-600">•</p>
          </>
        )}

        <p className="text-sm text-gray-600 font-medium ">
          {moment(publishedAt).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
