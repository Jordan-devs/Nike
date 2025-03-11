import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text max-w-sm mt-6 text-center">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5 mt-3">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="text-xl font-montserrat font-bold">({rating})</p>
      </div>
      <h3 className="mt-1.5 text-3xl font-poppins font-bold text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
