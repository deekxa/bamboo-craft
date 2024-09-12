// src/hooks/useScrollAnimation.js
import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Implement your scroll logic here
      // Example: Add or remove classes based on scroll position
      const navbar = document.querySelector(".navbar");
      if (scrollPosition > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useScrollAnimation;
