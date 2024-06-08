import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { toggleMenu } from "../utils/appSlice";

import {
  MdHomeFilled,
  MdCelebration,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdTrendingUp,
  MdOutlineShoppingBag,
  MdOutlineMusicNote,
  MdOutlineMovieFilter,
  MdOutlineWifiTethering,
  MdOutlineGames,
  MdOutlineNewspaper,
  MdEmojiEvents,
} from "react-icons/md";

const Sidebar = () => {
  const navigationBar = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  if (!navigationBar) return null;
  return (
    <div
      className="fixed bg-white ease-in p-2 shadow-lg w-52 hidden md:block"
      onMouseLeave={() => dispatch(toggleMenu())}
    >
      <ul>
        <NavLink to="/">
          <li className="flex items-center hover:bg-gray-900 hover:rounded-md hover:text-red-500 hover:ease duration-100 font-semibold">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdHomeFilled size="1.5rem" />
            </div>
            Home
          </li>
        </NavLink>
        <NavLink to="/">
          <li className="flex items-center hover:bg-gray-900 hover:rounded-md hover:text-red-500 hover:ease duration-100 font-semibold">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdCelebration size="1.5rem" />
            </div>
            Shorts
          </li>
        </NavLink>
        <NavLink to="/">
          <li className="flex items-center hover:bg-gray-900 hover:rounded-md hover:text-red-500 hover:ease duration-100 font-semibold">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdSubscriptions size="1.5rem" />
            </div>
            Subscription
          </li>
        </NavLink>

        <NavLink to="/">
          <li className="flex items-center hover:bg-gray-900 hover:rounded-md hover:text-red-500 hover:ease duration-100 font-semibold">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdVideoLibrary size="1.5rem" />
            </div>
            Library
          </li>
        </NavLink>

        <NavLink to="/">
          <li className="flex items-center hover:bg-gray-900 hover:rounded-md hover:text-red-500 hover:ease duration-100 font-semibold">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdHistory size="1.5rem" />
            </div>
            History
          </li>
        </NavLink>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <NavLink to={"/search/Trending"}>
          <li className="flex items-center hover:text-red-500 hover:ease duration-100 ">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdTrendingUp size="1.5rem" />
            </div>
            Trending
          </li>
        </NavLink>

        <NavLink to={"/search/Shopping"}>
          <li className="flex items-center hover:text-red-500 hover:ease duration-100">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdOutlineShoppingBag size="1.5rem" />
            </div>
            Shopping
          </li>
        </NavLink>

        <NavLink to={"/search/Sports"}>
          <li className="flex items-center hover:text-red-500 hover:ease duration-100">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdOutlineMusicNote size="1.5rem" />
            </div>
            Sports
          </li>
        </NavLink>

        <NavLink to={"/search/Movies"}>
          <li className="flex items-center hover:text-red-500 hover:ease duration-100">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdOutlineMovieFilter size="1.5rem" />
            </div>
            Movies
          </li>
        </NavLink>

        <NavLink to={"/search/Live"}>
          <li className="flex items-center hover:text-red-500 hover:ease duration-100">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdOutlineWifiTethering size="1.5rem" />
            </div>
            Live
          </li>
        </NavLink>

        <NavLink to={"/search/Games"}>
          <li className="flex items-center hover:text-red-500 hover:ease duration-100">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdOutlineGames size="1.5rem" />
            </div>
            Games
          </li>
        </NavLink>

        <NavLink to={"/search/News"}>
          <li className="flex items-center hover:text-red-500 hover:ease duration-100">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdOutlineNewspaper size="1.5rem" />
            </div>
            News
          </li>
        </NavLink>

        <NavLink to={"/search/Sports"}>
          <li className="flex items-center hover:text-red-500 hover:ease duration-100">
            <div className="h-6 my-2 mx-2 mr-5">
              <MdEmojiEvents size="1.5rem" />
            </div>
            Sports
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
