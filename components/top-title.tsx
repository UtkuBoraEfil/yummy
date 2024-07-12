"use client";
import { motion } from "framer-motion";

export function TopTitle() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 250,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className=" mx-auto"
    >
      <p className=" xl:text-lg lg:text-lg text-lgmob leading-none font-semibold">
        Enjoy the taste of
      </p>
      <h1 className=" xl:text-3xl lg:text-3xlg text-3xlmob leading-none font-bold ">
        botanical
      </h1>

      <p className="max-w-xl text-center mx-auto xl:text-sm lg:text-smmd text-smmob">
        Our coffee doesn&apos;t have to taste that way. But it does.It&apos;s not your
        typical. It's unnecessarily good. Maybe that's because we're
        unnecessarily driven.{" "}
      </p>
    </motion.div>
  );
}
