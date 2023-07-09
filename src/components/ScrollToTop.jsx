"use client";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      document.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    showScroll && (
      <img
        onClick={scrollToTop}
        alt="scroll icon"
        src="imgs/ScrollUpButton.svg"
        className="fixed bottom-10 right-10 z-50 cursor-pointer"
      />
    )
  );
};

export default ScrollToTop;
