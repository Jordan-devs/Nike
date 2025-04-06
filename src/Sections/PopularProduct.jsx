import React from "react";
import { products } from "../Constants";
import PopularProductCard from "../Components/PopularProductCard";
import { motion } from "framer-motion";

const PopularProduct = () => {
  const parentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
  };
  return (
    <section id="products" className="max-container max-sm:mt-12 scroll">
      <div className="flex flex-col justify-start gap-5">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-poppins font-bold"
        >
          Our <span className="text-coral-red">Popular</span> Products
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="lg:max-w-lg font-montserrat text-slate-gray mt-2"
        >
          Stylish and comfortable, these shoes offer a perfect blend of
          durability, support, and modern design for everyday wear.
        </motion.p>
      </div>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false }}
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
      >
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProduct;
