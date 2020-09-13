import { useEffect, useState } from "react";

const useHover = (target) => {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const onMouseEnter = () => {
      setIsHover(true);
    };

    const onMouseleave = () => {
      setIsHover(false);
    };

    document
      .querySelector("#title")
      .addEventListener("mouseenter", onMouseEnter);
    document
      .querySelector("#title")
      .addEventListener("mouseleave", onMouseleave);

    return () => {
      //component will unmount
      //before component will update
      document
        .querySelector("#title")
        .removeEventListener("mouseenter", onMouseEnter);
      document
        .querySelector("#title")
        .removeEventListener("mouseleave", onMouseleave);
    };
  }, []);

  return isHover;
};

export default useHover;
