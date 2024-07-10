import React from "react";
import Image from "next/image";

export default function Menu() {
  return (
    <section className="h-screen overflow-hidden bg-my-white p-2">
        <div className=" bg-menu-image bg-cover fixed  w-1/2 h-full bg-no-repeat  bg-center rounded-3xl flex flex-col justify-end">
        <h1 className="pl-5 pb-2 left-3 xl:text-2xl lg:text-2xlm text-2xlmob font-semibold">
          Menu
        </h1>
      </div>
      
      <div className="flex  justify-between">
        <div className=" w-1/2 h-full p-2 "></div>
        <div className="w-[600px]">
          <div className=" bg-my-white-smoke rounded-3xl flex flex-col h-screen text-my-black pt-14">
            <div className=" flex justify-end max-w-[600px] shrink-0 p-3">
              <p className="xl:text-md lg:text-mdm text-mds font-light">
                It’s not your typical. It's unnecessarily good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
