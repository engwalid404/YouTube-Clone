import MainContainer from "./MainContainer";

import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex mt-[4.5rem]">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
