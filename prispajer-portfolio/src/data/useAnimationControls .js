import React from "react";
import { useAnimation, useInView } from "framer-motion";

const useAnimationControls = (ref) => {
  const animationProperties = useInView(ref, { once: true, amount: 0.1 });
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (animationProperties) {
      animationControls.start("show");
      animationControls.start("final");
    }
  }, [animationProperties, animationControls]);

  return { animationControls, animationProperties };
};

export default useAnimationControls;
