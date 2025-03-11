import React from "react";
import { reviews } from "../Constants";
import ReviewCard from "../Components/ReviewCard";

const CustomersReview = () => {
  return (
    <section className="max-container">
      <h1 className="text-4xl font-poppins font-bold text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h1>
      <p className="info-text max-w-lg text-center mt-4 m-auto">
        Discover what sneaker lovers are saying! Our customers rave about the
        premium quality, unbeatable prices, and fast delivery. See their honest
        reviews below!
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomersReview;
