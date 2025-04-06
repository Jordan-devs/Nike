import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Function to format numbers like 1.2k+, 1M+, etc.
const formatNumber = (value) => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M+`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}k+`;
  return `${Math.floor(value)}`;
};

const AnimatedCounter = ({ from = 0, to = 1000, duration = 2 }) => {
  const ref = useRef();
  const motionValue = useMotionValue(from);
  const formatted = useTransform(motionValue, (latest) => formatNumber(latest));
  const [current, setCurrent] = useState(formatNumber(from)); // <-- State to show value

  useEffect(() => {
    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [to, duration, motionValue]);

  // Subscribe to formatted and update state
  useEffect(() => {
    const unsubscribe = formatted.on("change", (v) => {
      setCurrent(v);
    });

    return () => unsubscribe();
  }, [formatted]);

  return <motion.span ref={ref}>{current}</motion.span>;
};

export default AnimatedCounter;
