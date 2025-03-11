import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHero = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force the page to the top instantly
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // If "instant" isn't working in all cases, force it
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToHero;
