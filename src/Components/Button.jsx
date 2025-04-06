import React from "react";
import { motion, spring } from "framer-motion";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 0.9 }}
      transition={{ duration: 0.3, type: spring, stiffness: 300 }}
      className={`flex justify-center items-center gap-2 px-7 py-3 font-montserrat text-lg border-1
      ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red border-coral-red text-white"
      } ${fullWidth && "w-full"} rounded-full cursor-pointer`}
    >
      {label}

      {iconURL && (
        <img src={iconURL} alt={label} className="ml-2 rounded-full w-5 h-5" />
      )}
    </motion.button>
  );
};

export default Button;
