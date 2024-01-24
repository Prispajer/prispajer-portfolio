import React from "react";
import { useAnimation, useInView } from "framer-motion";

const useAnimationControls = (ref) => {
  const animationProperties = useInView(ref);
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (animationProperties) {
      animationControls.start("show");
      animationControls.start("final");
    }
  }, [animationProperties]);

  return { animationControls, animationProperties };
};

export default useAnimationControls;
