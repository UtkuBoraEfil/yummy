"use client";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/arrow.svg";
import { animate, motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const MotionImage = motion(Image);

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * (index + 1),
      ease: "easeOut",
    },
  }),
};

const IMAGE_DATA = [
  {
    src: "/mourinho.jpg",
    alt: "Jose Mourinho",
  },
  {
    src: "/mou.jpeg",
    alt: "Jose Mourinho",
  },
  {
    src: "/haci.jpg",
    alt: "product img",
  },
];

export default function FirstCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 250,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className=" w-full flex flex-col lg:flex-row   justify-between absolute bottom-5"
    >
      <div className="flex gap-1">
        <div className="flex flex-col gap-3 w-64 border py-6 px-3 rounded-3xl glassmorphism">
          <h2 className="xl:text-md lg:text-mdm text-mds text-my-white font-semibold">
            99+Slaves
          </h2>
          <p className="xl:text-sm lg:text-smmd text-smmob font-light">
            “Too far” is exactly where we want to be. All in the name of coffee.
          </p>
        </div>

        {/* Image */}
        <motion.div className="border px-2.5 py-3 rounded-3xl backdrop-blur-md flex flex-col relative glassmorphism">
          {IMAGE_DATA.map((item, index) => (
            <MotionImage
              key={`${item.src}-${index}`}
              src={item.src}
              alt={item.alt}
              className="w-14  h-14 rounded-full border border-white/50 object-center z-[2] last:-mt-4 even:-mt-3 first:z-[2] even:z-[1] last:z-[0]"
              width={60}
              height={60}
              variants={variants}
              initial="initial"
              animate="animate"
              custom={index}
            />
          ))}
        </motion.div>
      </div>
      <Image
        src={arrow}
        alt={arrow}
        className="w-14 h-14 border border-my-white rounded-full p-2 mt-4"
      />
    </motion.div>
  );
}
