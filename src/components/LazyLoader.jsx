import { useState } from "react";
import { useEffect } from "react";
import Loader from "./Loader";

export const LazyLoader = (props) => {
  const { show = false, delay = 0 } = props || {};
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;

    if (!show) {
      setShowLoader(false);
      return;
    }

    if (delay === 0) {
      setShowLoader(true);
    } else {
      timeout = setInterval(() => {
        setShowLoader(true);
      }, delay);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);

  return <>{showLoader ? <Loader /> : null}</>;
};
