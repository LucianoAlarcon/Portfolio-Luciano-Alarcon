import { RefObject, useEffect } from "react";

const useClickOutside = <T extends HTMLElement | null>(
  ref: RefObject<T>,
  callback: () => void,
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if ref exists and if target is an Element (to avoid target.matches errors)
      if (ref?.current && event.target instanceof Element && !ref?.current.contains(event.target)) {
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
