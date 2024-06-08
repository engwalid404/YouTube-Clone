import { Link } from "react-router-dom";

import { buttonsList } from "../utils/constant";
import Button from "./Button";

const ButtonsList = () => {
  return (
    <div className="flex px-2 overflow-x-scroll">
      {buttonsList.map((listItem, index) => (
        <Link key={index} to={"/search/" + listItem}>
          <Button name={listItem} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonsList;
