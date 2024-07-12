import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Heart } from "lucide-react";

interface Props {
  card2data: {
    url: string;
    title: string;
    description: string;
    price: string;
  };
}

export default function Cards2({ card2data }: Props) {
  return (
    <div
      className={clsx(
        "relative card-container bg-my-white rounded-2xl p-3 xl:w-full mb-5",
        {
          "lg:hidden xl:block": card2data.title === "V60 Dripper",
        }
      )}
    >
      <div className=" h-[250px] w-full overflow-hidden rounded-2xl">
        <Image
          src={card2data.url}
          alt="card2"
          width={300}
          height={250}
          className="w-full card-image rounded-2xl origin-center"
        />
        <div className="absolute top-6 ml-4  h-10 w-10 border border-my-white bg-my-white bg-opacity-10 backdrop-blur-md rounded-full grid place-content-center">
          <Heart size={16} className="text-my-white  heart" />
        </div>
      </div>
      <h1 className="xl:text-md  lg:text-mdm text-mds font-semibold pt-6 pb-3">
        {card2data.title}
      </h1>
      <p className="text-my-light-gray  xl:text-sm lg:text-smmd text-smmob">
        {card2data.description}
      </p>
      <div className="pb-4">
        <p className=" pt-5 xl:text-sl lg:text-smd text-sm">
          {card2data.price}
        </p>
      </div>
    </div>
  );
}
