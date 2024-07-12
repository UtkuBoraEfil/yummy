"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Comp1() {
  return (
    <div className="flex xl:flex-row flex-col max-w-6xl justify-between mx-auto py-16 px-5 gap-8">
      <div className="max-w-lg">
        <h2 className=" xl:text-lg lg:text-lglg text-lgmob font-semibold">
          From Greenies to Delight.
        </h2>
        <p className=" xl:text-sm lg:text-smmd text-smmob ">
          All in the name of coffee.
        </p>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: "all" }}
        className="max-w-lg"
      >
        <h2 className=" xl:text-mdm lg:text-mds text-lgmob leading-tight">
          It doesn&apos;t have to taste that way. But it does. It&apos;s not
          your typical. It's unnecessarily good.
        </h2>
      </motion.div>
    </div>
  );
}
