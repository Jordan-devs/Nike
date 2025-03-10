import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />
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
    </div>
  );
};

export default PopularProductCard;
