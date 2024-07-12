"use client";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/arrow.svg";
import { motion, stagger } from "framer-motion";

const MotionImage = motion(Image);

const defaultVariant = {
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Image variant
const imageVariant = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};


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
        <div className=" w-56 border py-6 px-3 rounded-3xl backdrop-blur-md ">
          <h2 className="xl:text-md lg:text-mdm text-mds text-my-white">
            99+Slaves
          </h2>
          <p className="xl:text-sm lg:text-smmd text-smmob">
            “Too far” is exactly where we want to be. All in the name of coffee.
          </p>
        </div>
        <motion.div
          variants={containerVariant}
          initial="initial"
          animate="animate"
          className="border px-2.5 py-3 rounded-3xl backdrop-blur-md flex flex-col relative"
        >
          <MotionImage
            variants={imageVariant}
            src={"/mourinho.jpg"}
            alt="Jose Mourinho"
            className="w-14  h-14 rounded-full border border-white/50 object-center z-[2]"
            width={60}
            height={60}
          />
          <MotionImage
            variants={imageVariant}
            src={"/mou.jpeg"}
            alt="Jose Mourinho"
            className="w-14 h-14  rounded-full border border-white/50 object-center -mt-3 z-[1]"
            width={60}
            height={60}
          />
          <MotionImage
            variants={imageVariant}
            src={"/haci.jpg"}
            alt="product img"
            className="w-14 h-14 rounded-full border border-white/50 object-center -mt-4"
            width={60}
            height={60}
          />
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
