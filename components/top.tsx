import Image from "next/image";
import leafimg from "@/public/leafs.jpg";
import Navbar from "./navbar";
import FirstCard from "./firstCard";
import { TopTitle } from "./top-title";

import { MaskSvg } from "./icons/left-svg";

export default function Top() {
  return (
    <>
      <div className="h-[98vh]">
        <div className="relative bg-mobile-image lg:bg-desktop-image bg-cover  max-h-[98vh] h-screen bg-no-repeat  bg-center rounded-3xl pt-5 px-3 image-container">
          <div className="relative text-my-white  h-[90vh] grid place-items-center z-[3]">
            <div className="w-full flex flex-colr pb-14">
              <TopTitle />
            </div>
            <FirstCard />
          </div>

          <div className="lg:w-80 w-60 bg-my-white-smoke  absolute -bottom-2 right-0 rounded-tl-2xl grid">
            {/* <div className="w-8 h-8 bg-red-500  opacity-100 rounded-br-full  absolute -left-4 bottom-2"></div> */}
            {/* Top Right */}
            <div className="w-10 h-10 absolute text-my-white-smoke -top-[37.5px] -right-[1.5px]">
              <MaskSvg />
            </div>
            {/* Bottom Left */}
            <div className="w-10 h-10 absolute right-0 text-my-white-smoke bottom-[6px] -left-[38.5px]">
              <MaskSvg />
            </div>
            <button className="xl:text-mdm lg:text-mds text-lgmob place-items-center border border-black lg:mx-4 mx-2 my-3 py-2 rounded-full">
              Explore Yummies
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
