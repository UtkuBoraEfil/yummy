'use client';
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-5 w-full z-10 px-8">
      <div className=" border  border-my-white rounded-3xl  flex justify-between pl-3">
        <motion.div
        initial={{
          opacity: 0,
          x: -250,
        }}
        animate={{
          opacity: 1,
          x: 0,

        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        >
          <Link href={"/"} className="grid place-items-center w-12 h-12">
            <Image
              src={"/apple.svg"}
              alt="apple"
              width={30}
              height={30}
              className="fill-my-white"
            />
          </Link>
        </motion.div>
        <motion.div
              initial={{
                opacity: 0,
                x: 250,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
        className=" flex gap-3 items-center">
          <Link
            href="/menu"
            className=" px-5 rounded-3xl py-2 border-x  border-my-white hover:bg-my-white transition-all duration-75 text-my-white xl:text-sl lg:text-smd hover:text-my-black"
          >
            Menu
          </Link>
          <button className=" px-5 rounded-3xl py-2 border-l  border-my-white hover:bg-my-white transition-all duration-75 text-my-white xl:text-sl lg:text-smd hover:text-my-black">
            Location
          </button>
        </motion.div>
      </div>
    </div>
  );
}
