import { useEffect } from "react";

const HandleScrollBouy = () => {
  const maxHeight = 812.578;
  const animationDuration = 100; // Duration in milliseconds

  useEffect(() => {
    let animationStart;

    const handleOnScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > maxHeight) {
        if (!animationStart) {
          animationStart = Date.now();
        }
        const elapsed = Date.now() - animationStart;
        const progress = Math.min(elapsed / animationDuration, 1);

        const scrollTop = progress * currentScroll;
        window.scrollTo({ top: scrollTop, behavior: "auto" });

        if (progress < 1) {
          window.requestAnimationFrame(handleOnScroll);
        } else {
          animationStart = null;
        }
      }
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return null;
};

export default HandleScrollBouy;
