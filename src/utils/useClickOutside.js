import { useEffect, useRef } from "react";

let useClickOutside = (handler) => {
  let DOMNode = useRef();

  useEffect(() => {
    let mayBeHandler = (event) => {
      if (!DOMNode.current?.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", mayBeHandler);

    return () => {
      document.removeEventListener("mousedown", mayBeHandler);
    };
  });

  return DOMNode;
};

export default useClickOutside;
