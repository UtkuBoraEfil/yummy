'use client';
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Comp1() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "30% center"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]); 
  return (
    <div className="flex  xl:flex-row flex-col max-w-6xl justify-between mx-auto py-16 px-5">
      <div className="max-w-lg">
        <h2 className=" xl:text-lg  lg:text-lglg text-lgmob font-semibold">
          From Greenies to Delight.
        </h2>
        <p className=" xl:text-sm lg:text-smmd text-smmob ">
          All in the name of coffee.
        </p>
      </div>
      <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
     
      className="max-w-lg">
        <h2 className=" xl:text-mdm lg:text-mds text-lgmob leading-tight">
          It doesn’t have to taste that way. But it does. It’s not your typical.
          It's unnecessarily good.
        </h2>
      </motion.div>
    </div>
  );
}
