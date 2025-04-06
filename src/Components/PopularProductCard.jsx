import React from "react";
import { motion, spring, stagger } from "framer-motion";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  const staggerChildren = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col flex-1 w-full max-sm:w-full"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, type: spring, stiffness: 300 }}
        src={imgURL}
        alt={name}
        className="w-[280px] cursor-pointer h-[280px] "
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray leading-normal">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 font-semibold text-2xl leading-normal font-poppins">
        {name}
      </h3>
      <p className="mt-2 mb-8 font-semibold leading-normal text-2xl text-coral-red font-montserrat">
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
