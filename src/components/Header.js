import { useEffect, useState } from "react";
import admin from '../../src/myPic.png'
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import useClickOutside from "../utils/useClickOutside";
import { toggleMenu } from "../utils/appSlice";
import { YT_AUTOCOMPLETE } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

import SearchBar from "./SearchBar";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  //API call for search input
  useEffect(() => {
    const searchInputResult = async () => {
      const response = await fetch(YT_AUTOCOMPLETE + searchInput);
      const result = await response.json();
      setSuggestions(result[1]);

      //update cache
      dispatch(
        cacheResults({
          [searchInput]: result[1],
        })
      );
    };

    const timer = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSuggestions(searchCache[searchInput]);
      } else {
        searchInputResult();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput, dispatch, searchCache]);

  //handing navigation display
  const handleNavigationMenu = () => {
    dispatch(toggleMenu());
  };

  //handling outsideClick from suggestion box
  let DOMNode = useClickOutside(() => {
    setShowSuggestion(false);
  });

  return (
    <div className="fixed flex flex-row items-center justify-between p-2 top-0 w-full bg-white  px-4 shadow-sm z-50">
      {/* Navigation Icon */}
      <div className="flex items-center">
        <img
          onClick={() => handleNavigationMenu()}
          className="h-6 cursor-pointer hidden md:block"
          src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png"
          alt="nav-icon"
        />

        {/* YT Logo */}
        <Link to="/">
          <img
            className="h-14 mx-2"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="px-10 h-10 w-3/4 " ref={DOMNode}>
        <div>
          <input
            className="hidden sm:block px-5 w-3/4 border border-gray-400 p-2 rounded-full focus:outline-none focus:scale-105 ease-in-out"
            type="text"
            placeholder="Search videos.."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
          />
        </div>

        {/* Showing suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="sticky bg-white py-4 px-2 w-3/4 shadow-lg rounded border border-gray-100 z-10">
            <ul>
              {suggestions.map((suggestion) => (
                <Link key={suggestion} to={"search/" + suggestion}>
                  <SearchBar suggestion={suggestion} />
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* User Icon */}
      <div className="">
        <img
          className="h-14 w-14 bg-cyan-200 rounded-full"
          src={admin}
          alt="admin-icon"
        />
      </div>
    </div>
  );
};
export default Header;

/**
 * Debouncing
 *
 * Inside UseEffect
 *    make an api call after every key press
 *    butt if the difference between 2 API calls is < 200ms
 *    decline the API call
 *    less api call made as compared to normal request and hence increased performance
 *
 * Working behing the scenes
 *
 * Inside the useEffect - we are making the api call after every 200ms
 * but if the difference between 2 keypress is less than 200 ms, we are clearing the setTimeOut as
 * return is called only when the component is unmounted and it clears the setTimeout hence no api calls * made
 *
 *
 */
