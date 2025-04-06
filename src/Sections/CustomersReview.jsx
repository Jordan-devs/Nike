import React from "react";
import { reviews } from "../Constants";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { star } from "../assets/icons";

const CustomersReview = () => {
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change 768 to any desired breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = (dir) => {
    setDirection(dir);
    setCurrentIndices((prev) => {
      if (dir > 0) {
        // Moving forward - remove first, add new at end
        return [...prev.slice(1), (prev[prev.length - 1] + 1) % reviews.length];
      } else {
        // Moving backward - remove last, add new at beginning
        return [
          (prev[0] - 1 + reviews.length) % reviews.length,
          ...prev.slice(0, -1),
        ];
      }
    });
  };

  return (
    <section className="max-container">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-poppins font-bold text-center"
      >
        What Our <span className="text-coral-red">Customers</span> Say?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="info-text max-w-lg text-center mt-4 m-auto"
      >
        Discover what sneaker lovers are saying! Our customers rave about the
        premium quality, unbeatable prices, and fast delivery. See their honest
        reviews below!
      </motion.p>
      <div className="relative mt-23">
        <div
          className={`flex justify-center gap-8 ${isMobile ? "w-full" : ""}`}
        >
          {isMobile ? (
            <motion.div
              key={reviews[currentIndices[0]].id}
              className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
              initial={{
                x: direction > 0 ? 300 : 0,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: direction > 0 ? -300 : 0,
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center items-center flex-col">
                <img
                  src={reviews[currentIndices[0]].imgURL}
                  alt="customer"
                  className="rounded-full object-cover w-[120px] h-[120px]"
                />
                <p className="info-text max-w-sm mt-6 text-center">
                  {reviews[currentIndices[0]].feedback}
                </p>
                <div className="flex justify-center items-center gap-2.5 mt-3">
                  <img
                    src={star}
                    alt="rating"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <p className="text-xl font-montserrat font-bold">
                    ({reviews[currentIndices[0]].rating})
                  </p>
                </div>
                <h3 className="mt-1.5 text-3xl font-poppins font-bold text-center">
                  {reviews[currentIndices[0]].customerName}
                </h3>
              </div>
            </motion.div>
          ) : (
            currentIndices.map((index, position) => (
              <motion.div
                key={`${reviews[index].id}-${position}`}
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
                initial={{
                  x: position === (direction > 0 ? 0 : 2) ? direction * 300 : 0,
                  opacity: position === (direction > 0 ? 0 : 2) ? 0 : 1,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x:
                    position === (direction > 0 ? 2 : 0) ? -direction * 300 : 0,
                  opacity: position === (direction > 0 ? 2 : 0) ? 0 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center items-center flex-col">
                  <img
                    src={reviews[index].imgURL}
                    alt="customer"
                    className="rounded-full object-cover w-[120px] h-[120px]"
                  />
                  <p className="info-text max-w-sm mt-6 text-center">
                    {reviews[index].feedback}
                  </p>
                  <div className="flex justify-center items-center gap-2.5 mt-3">
                    <img
                      src={star}
                      alt="rating"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <p className="text-xl font-montserrat font-bold">
                      ({reviews[index].rating})
                    </p>
                  </div>
                  <h3 className="mt-1.5 text-3xl font-poppins font-bold text-center">
                    {reviews[index].customerName}
                  </h3>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition cursor-pointer"
          aria-label="Previous reviews"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={() => navigate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition cursor-pointer"
          aria-label="Next reviews"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
};

export default CustomersReview;

// Icons for navigation buttons
// You can replace these with your own SVG icons or use a library like Font Awesome or Material Icons

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);
