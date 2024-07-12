import React from "react";
import Image from "next/image";
import { coffeeDrinks, bakery } from "@/lib/placeholder-data";
import CoffeeDrinks from "@/components/coffeeDrinks";
import Bottom from "@/components/bottom";

export default function Menu() {
  return (
    <section className="min-h-screen bg-my-white p-2 grid lg:grid-cols-2 gap-4">
      <div className="w-full min-h-[200vh] border border-blue-300">
        <div className="bg-menu-image bg-cover top-2  min-h-[calc(100svh-15px)] w-full  bg-no-repeat  bg-center rounded-3xl flex flex-col justify-end self-start border border-red-500 sticky">
          <h1 className="pl-5 pb-2 left-3 xl:text-2xl lg:text-2xlm text-2xlmob font-semibold">
            Menu
          </h1>
        </div>
      </div>

      <div className="flex gap-10  justify-between border border-green-500">
        {/* <div className=" w-1/2 h-full p-2 "></div> */}
        <div className="w-full">
          <div className=" bg-my-white-smoke rounded-3xl flex flex-col text-my-black pt-14">
            <div className=" flex flex-col justify-end max-w-[600px] mx-auto shrink-0 p-3 gap-20 three-items">
              <div className="flexbox-item">
                <p className="xl:text-md lg:text-mdm text-mds font-light leading-none pb-8">
                  It’s not your typical. It's unnecessarily good.
                </p>
                <p className="xl:text-md lg:text-mdm text-mds font-light leading-none flexbox-item">
                  Maybe that's because we're unnecessarily driven.
                </p>
              </div>
              <div className="py-20 flexbox-item">
                <h1 className="xl:text-xl lg:text-xlmd text-xlmob font-semibold pb-10 ">
                  Coffee Drinks
                </h1>
                <ul className="flex flex-col gap-2 px-5">
                  {coffeeDrinks.map((coffeeDrinks, index) => (
                    <CoffeeDrinks coffee={coffeeDrinks} key={`top-${index}`} />
                  ))}
                </ul>
              </div>
              <div className=" py-20 flexbox-item">
                <h1 className="xl:text-xl lg:text-xlmd text-xlmob font-semibold pb-10">
                  Bakery
                </h1>
                <ul className="flex flex-col gap-2 px-5">
                  {bakery.map((bakery, index) => (
                    <CoffeeDrinks coffee={bakery} key={index} />
                  ))}
                </ul>
              </div>
            </div>
            <Bottom />
          </div>
        </div>
      </div>
    </section>
  );
}
