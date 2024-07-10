import Link from "next/link";
import DynamicCard from "./dynamicCard";
import React from "react";

export default function DynamicCards() {
  return (
    <div className="max-w-6xl px-5 xl:flex justify-between lg:grid lg:grid-cols-2 lg:grid-rows-2 py-5 mx-auto gap-6">
      <DynamicCard
        img="image1"
        title="Prague"
        text="Botanical Coffee Shop in Prague offers a serene oasis with its lush decor and artisanal coffees."
        origin="left"
        sira="1"
      />
      <DynamicCard
        img="image2"
        title="Berlin"
        text="Berlin's dynamic coffee culture features innovative shops where baristas experiment with new brewing techniques."
        origin="right"
        sira="2"
      />
      <DynamicCard
        img="image3"
        title="Vienna"
        text="Vienna's coffee scene blends historic cafes and modern spots, all dedicated to perfecting the art of coffee making."
        origin="right"
        sira="3"
      />
    </div>
  );
}

{
  /* <div className="px-6 py-8 text-my-white col-span-2 w-full bg-dynamic-image1 bg-cover bg-no-repeat bg-center rounded-3xl">
<h2 className=" font-medium xl:text-lg lg:text-lglg text-lgmob">Prague </h2>
<p className="xl:text-sm lg:text-smmd text-smmob">Botanical Coffee Shop in Prague offers a serene oasis with its lush decor and artisanal coffees.</p>
</div> */
}
