import Image from "next/image";
import Link from "next/link";
import arrow from "@/public/arrow.svg";
import img1 from "@/public/Jose Mourinho.jpg";
import img2 from "@/public/Jose Mourinho 2.jpeg";
import img3 from "@/public/haci.jpg";


export default function FirstCard() {
  return (
    <div className="w-full flex flex-col lg:flex-row   justify-between absolute bottom-5">
      <div className="flex gap-1">
        <div className=" w-56 border py-6 px-3 rounded-3xl backdrop-blur-md ">
          <h2 className="xl:text-md lg:text-mdm text-mds text-my-white">
            99+Slaves
          </h2>
          <p className="xl:text-sm lg:text-smmd text-smmob">
            “Too far” is exactly where we want to be. All in the name of coffee.
          </p>
        </div>
        <div className="w-20 border py-6 px-3 rounded-3xl backdrop-blur-md flex flex-col relative">
            <Image
                src={img1}
                alt="Jose Mourinho"
                className="w-14  h-14 rounded-full absolute top-3 z-20"
            />
            <Image
                src={img2}
                alt="Jose Mourinho"
                className="w-14 h-14  rounded-full absolute top-14 z-10"
            />
            <Image
                src={img3}
                alt="product img"
                className="w-14 h-14  rounded-full absolute bottom-3"
            />
        </div>
      </div>
        <Image
            src={arrow}
            alt={arrow}
            className="w-14 h-14 border border-my-white rounded-full p-2 mt-4"
            
        />
    </div>
  );
}
