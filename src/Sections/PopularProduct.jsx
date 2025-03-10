import React from "react";
import { products } from "../Constants";
import PopularProductCard from "../Components/PopularProductCard";

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 scroll">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-poppins font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray mt-2">
          Stylish and comfortable, these shoes offer a perfect blend of
          durability, support, and modern design for everyday wear.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
