import React from "react";

interface Props {
    coffee: {
        coffee: string;
        price: string;
    };
}

export default function CoffeeDrinks({ coffee }: Props) {
  return (
    <li className="flex justify-between ">
      <p className=" xl:text-sm lg:text-smmd text-smmob ">{coffee.coffee}</p>
      <p className=" font-semibold">{coffee.price}</p>
    </li>
  );
}
