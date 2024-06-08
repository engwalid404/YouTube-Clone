import ButtonsList from "./ButtonsList";
import { Outlet } from "react-router";

const MainContainer = () => {
  return (
    <div className="w-full">
      <ButtonsList />
      <Outlet />
    </div>
  );
};

export default MainContainer;
