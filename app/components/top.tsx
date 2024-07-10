import Image from "next/image";
import leafimg from "@/public/leafs.jpg";
import Navbar from "./navbar";
import FirstCard from "./firstCard";
import React from "react";

export default function Top() {
  return (
    <>
      <div className="h-[98vh]  ">
        <div className="relative  bg-leaf-image bg-cover  max-h-[98vh] h-screen bg-no-repeat  bg-center rounded-3xl pt-5 px-3 ">
          <Navbar />
          <div className="relative text-my-white  h-[90vh] grid place-items-center">
            <div className="w-full flex flex-col pb-14">
                <div className=" mx-auto">
                    <p className=" xl:text-lg lg:text-lg text-lgmob leading-none font-semibold">
                        Enjoy the taste of
                    </p>
                    <h1 className=" xl:text-3xl lg:text-3xlg text-3xlmob leading-none font-bold ">
                        botanical
                    </h1>
                </div>
                <p className="max-w-xl text-center mx-auto xl:text-sm lg:text-smmd text-smmob" >Our coffee doesn’t have to taste that way. But it does.It’s not your typical. It's unnecessarily good. Maybe that's because we're unnecessarily driven. </p>
            </div>
            <FirstCard/>
          </div>
            <div className="lg:w-72 w-60 bg-my-white-smoke  absolute -bottom-2 right-0 rounded-l-2xl grid">
              <div className="w-8 h-8 bg-my-white  opacity-10 rounded-br-full  absolute -left-8 bottom-2">

              </div>
              <button className="xl:text-mdm lg:text-mds text-lgmob place-items-center border border-m lg:mx-4 mx-2 my-3 py-2 rounded-3xl">Explore Goodies</button>
            </div>
        </div>
      </div>
    </>
  );
}
