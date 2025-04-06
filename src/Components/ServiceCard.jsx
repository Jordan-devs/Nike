import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ imgURL, label, subtext, variants }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
    >
      <div className="flex justify-center items-center h-11 w-11 bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="text-3xl font-bold mt-5 font-poppins leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words text-slate-gray font-montserrat text-xl leading-normal">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
