"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Aos1() {
 

  return (
    <motion.div
    initial={{ scale: 0.8, opacity: 0, y: 50 }}
    whileInView={{ scale: 1, opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: "all" }}
    >
      <section className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-5 ">
        <h1 className=" basis-1/2 xl:text-2xl lg:text-2xlm text-2xlmob font-bold pt-16 lg:pb-10 leading-none text-center xl:text-left">
          Unnecessarily Good Good(s)
        </h1>
        <div className="basis-1/2 lg:relative pb-10 flex justify-center lg:flex-none lg:justify-normal">
          <button className=" bg-my-black border hover:bg-my-white-smoke hover:text-my-black transition-all duration-300 ease-out
           text-my-white xl:text-sl lg:text-smd text-sm rounded-3xl py-2 px-8 lg:absolute lg:bottom-14 w-36">
            Shop all
          </button>
        </div>
      </section>
    </motion.div>
  );
}
