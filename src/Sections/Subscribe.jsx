import React from "react";
import Button from "../Components/Button";
import { motion } from "framer-motion";

const Subscribe = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <motion.h3
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-4xl font-poppins font-bold leading-[68px] lg:max-w-lg"
      >
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </motion.h3>
      <motion.div
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full "
      >
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </motion.div>
    </div>
  );
};

export default Subscribe;
