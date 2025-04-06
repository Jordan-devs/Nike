import React from "react";
import { services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";
import { motion } from "framer-motion";

const Services = () => {
  const stagger = {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.section
      variants={{
        initial: {
          transition: { staggerChildren: 0.2 },
        },
      }}
      initial="initial"
      whileInView="animate"
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard variants={stagger} key={service.label} {...service} />
      ))}
    </motion.section>
  );
};

export default Services;
