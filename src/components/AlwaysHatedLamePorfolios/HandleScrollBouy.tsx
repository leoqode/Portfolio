import { useEffect, useState } from "react";

const HandleScrollBouy = () => {
  const [showButton, setShowButton] = useState(false);

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
    <button  className='init-button'>
      Scroll not working?
    </button>
  ) : null;
};

export default HandleScrollBouy;
