import React from "react";
import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { motion } from "framer-motion";

const SpecialOffer = () => {
  const rightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container w-full">
      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex-1"
      >
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </motion.div>

      <motion.div
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-1 flex-col max-lg:w-full"
      >
        <h2 className="font-poppins text-4xl font-bold capitalize lg:max-w-lg leading-[58px]">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Limited-Time Offer! Get up to 30% off on our latest shoe collection.
          Plus, enjoy free shipping on orders over $50. Shop now and step up
          your style before the deal ends!
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Don't wait! Stock is selling fast—grab your perfect pair today and
          upgrade your look with unbeatable comfort and style. Once they’re
          gone, they’re gone!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
