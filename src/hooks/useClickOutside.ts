import { RefObject, useEffect } from "react";

const useClickOutside = <T extends HTMLElement | null>(
  ref: RefObject<T>,
  callback: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref?.current && !ref?.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callback, ref]);
};

export default useClickOutside;
