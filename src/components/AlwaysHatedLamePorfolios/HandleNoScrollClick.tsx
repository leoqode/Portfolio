import { useState, useEffect, useRef } from "react";

interface HandleNoScrollClickHook {
  isClicked: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const useHandleNoScrollClick = (): HandleNoScrollClickHook => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (event.target === buttonRef.current) {
      setIsClicked((prevIsClicked) => !prevIsClicked);
      
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    button?.addEventListener("click", handleClick);
    console.log(`Button is clicked: ${isClicked}`)

    return () => {
      
      button?.removeEventListener("click", handleClick);
    };
  }, []);

  return { isClicked, buttonRef };
};

export default useHandleNoScrollClick;
