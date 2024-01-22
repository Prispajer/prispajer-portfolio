const fadeWhileLoading = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 160 : direction === "down" ? -160 : 0,
      opacity: 0,
      x: direction === "left" ? 160 : direction === "right" ? -160 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "ease-in-out",
        duration: 2,
        delay: delay,
      },
    },
  };
};

const scaleOnHover = (initial, final) => {
  return {
    initial: {
      scale: initial,
    },
    final: {
      scale: final,
    },
  };
};

export { fadeWhileLoading, scaleOnHover };
