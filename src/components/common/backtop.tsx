'use client'
import { HiChevronDoubleUp } from "react-icons/hi";
import { useState, useEffect, use } from "react";
export default function BackT() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => { isVisible && window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="fixed bottom-4 right-16 z-100" onClick={scrollToTop}>
      <HiChevronDoubleUp style={{height: '48px', width: '48px', color: 'blue'}} />
    </button>
  );
}