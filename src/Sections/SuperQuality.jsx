import React from "react";
import Button from "../Components/Button";
import { motion } from "framer-motion";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <section
      id="about-us"
      className="scroll flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-1 flex-col max-lg:w-full"
      >
        <h2 className="font-poppins text-4xl font-bold capitalize lg:max-w-lg leading-[58px]">
          We Provide You
          <span className="text-coral-red"> Super</span>{" "}
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Comfortable and stylish shoes designed for all-day wear, offering
          durability, support, and a sleek look. Crafted with high-quality
          materials, they provide a perfect balance of breathability,
          cushioning, and grip for any occasion. Whether for casual outings or
          active days, these shoes ensure both comfort and performance
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Dedicated to providing top-quality, stylish, and affordable shoes for
          every occasion, ensuring comfort, durability, and the latest trends.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </motion.div>

      <motion.div
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={shoe8}
          alt="shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
