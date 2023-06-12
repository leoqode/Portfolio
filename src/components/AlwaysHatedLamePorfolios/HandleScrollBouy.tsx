import { useEffect, useState } from "react";
import useHandleNoScrollClick from "./HandleNoScrollClick";

const HandleScrollBouy = () => {
  const [showButton, setShowButton] = useState(false);
  const { buttonRef } = useHandleNoScrollClick();

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 30) {
        window.scrollTo(0, 0);
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return showButton ? (
    <button ref={buttonRef} className='init-button'>
      Scroll not working?
    </button>
  ) : null;
};

export default HandleScrollBouy;
