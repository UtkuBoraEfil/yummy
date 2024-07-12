import React from "react";

export default function Aos2() {
  return (
    <div className=" max-w-6xl mx-auto py-28 px-5">
      <div className="lg:flex lg:flex-row-reverse flex-col lg:justify-between justify-center">
        <h1 className="xl:text-2xl lg:text-2xlm text-2xlmob font-semibold leading-none lg:text-right text-center">
          Another Menu
        </h1>
        <p className="xl:text-sm lg:text-smmd text-smmob  lg:max-w-[388px] leading-none pt-4 text-my-light-gray lg:text-left text-center">
          We go places that others wouldn’t. For us, “too far” is exactly where
          we want to be. All in the name of coffee.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-10 pt-10">
        <div className="lg:basis-3/5  h-[300px] overflow-hidden origin-center rounded-3xl bg-dynamic-image3 bg-cover bg-no-repeat bg-center flex flex-col justify-end aos2-container">
          <div className=" text-my-white-smoke m-3 p-3 rounded-2xl">
            <h1 className="xl:text-xl lg:text-xlmd text-xlmob font-semibold">
              Locations
            </h1>
            <p className="xl:text-sl lg:text-sm text-smmd leading-none hidden ">
              All critical efforts along the journey result in coffees that are
              a sum of choices made with the single goal in mind: how does the
              final product taste in your cup.
            </p>
          </div>
        </div>
        <div className="lg:basis-2/5 h-[300px] overflow-hidden origin-center rounded-3xl bg-dynamic-image2 bg-cover bg-no-repeat bg-center flex flex-col justify-end aos2-container">
          <div className=" text-my-white-smoke  m-3 p-3   rounded-2xl">
            <h1 className="xl:text-xl lg:text-xlmd text-xlmob font-semibold">
              Menu
            </h1>
            <p className="xl:text-sl lg:text-sm text-smmd leading-none hidden">
              It doesn’t have to taste that way. But it does. It’s not your
              typical. It's unnecessarily good.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-10 pt-10">
        <div className="lg:basis-2/5  h-[300px] overflow-hidden origin-center rounded-3xl bg-dynamic-image2 bg-cover bg-no-repeat bg-center flex flex-col justify-end aos2-container">
          <div className=" text-my-white-smoke  m-3 p-3   rounded-2xl">
            <h1 className="xl:text-xl lg:text-xlmd text-xlmob font-semibold">
              Shop
            </h1>
            <p className="xl:text-sl lg:text-sm text-smmd leading-none hidden">
              Unnecessarily Good Good(s).
            </p>
          </div>
        </div>
        <div className="lg:basis-3/5 h-[300px] overflow-hidden origin-center rounded-3xl bg-dynamic-image3 bg-cover bg-no-repeat bg-center flex flex-col justify-end aos2-container">
          <div className=" text-my-white-smoke  m-3 p-3   rounded-2xl">
            <h1 className="xl:text-xl lg:text-xlmd text-xlmob font-semibold">
              Work with us
            </h1>
            <p className="xl:text-sl lg:text-sm text-smmd leading-none hidden">
            Explore exciting opportunities in our Jobs section and brew success with us in a vibrant, welcoming environment where your love for coffee thrives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
