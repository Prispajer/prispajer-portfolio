import React from "react";
import { useAnimation, useInView } from "framer-motion";

const animationControls = (ref) => {
  const animationProperties = useInView(ref, { once: true });
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (animationProperties) {
      animationControls.start("show");
      animationControls.start("final");
    }
  }, [animationProperties]);

  return { animationControls, animationProperties };
};

export default animationControls;
