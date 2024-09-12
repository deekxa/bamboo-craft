// src/hooks/useRevealOnScroll.js
import { useInView } from "react-intersection-observer";

const useRevealOnScroll = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return { ref, inView };
};

export default useRevealOnScroll;
