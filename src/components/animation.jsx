const slideIn = (direction = "top") => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
      y: direction === "top" ? -40 : direction === "bottom" ? 40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };
};

export const fadeIn = () => {
  return {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
  };
};

export default slideIn;


    // <motion.h1
    //     variants={slideIn("top")}
    //     initial="hidden"
    //     whileInView="show"
    //     className="text-5xl md:text-6xl text-center lg:text-7xl font-bold font-[playfair] leading-none tracking-normal mb-2"
    //   >
    //     Welcome to <span className="text-amber-500">Recipe Finder</span>
    //   </motion.h1>
    //   <motion.p className="text-lg md:text-2xl text-center max-w-2xl text-amber-100" variants={fadeIn()} initial="hidden" whileInView="show">
    //     Bringing you recipes that excite your taste buds and inspire your
    //     kitchen adventures.
    //   </motion.p>