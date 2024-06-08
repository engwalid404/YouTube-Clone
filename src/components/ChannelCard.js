const ChannelCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="flex flex-col items-center p-2 m-2 w-72 rounded">
      <img
        className="mt-5 rounded-full hover:scale-110 hover:ease-in-out duration-300"
        alt="thumnails"
        src={thumbnails.default.url}
      />
      <div className="flex flex-col items-center">
        <p className="font-bold line-clamp-2 my-2">{title}</p>
        <p className="font-medium text-sm">{channelTitle}</p>
      </div>
    </div>
  );
};

export default ChannelCard;
