export const YOUTUBE_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_KEY;

export const YT_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=";

export const YT_AUTOCOMPLETE =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const buttonsList = [
  "All",
  "Music",
  "News",
  "Egypt",
  "IPL",
  "React",
  "Sports",
  "Courses",
  "Films",
  "Quran",
  "Football",
  "Events",
  "Qatar",
  "Cars",
  "Aircraft",
];

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "cf7de8259dmsh8b8e7fb89555e18p1d5d2fjsn464929df030d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`, options);

  const data = await response.json();

  return data;
};
