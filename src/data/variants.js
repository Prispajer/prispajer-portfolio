const fadeWhileLoading = (vertical, horizontal, delay) => {
  return {
    hidden: {
      y: vertical,
      x: horizontal,
      scale: 0.6,
      opacity: 0.3,
    },
    show: {
      y: 0,
      x: 0,
      scale: 1,
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
