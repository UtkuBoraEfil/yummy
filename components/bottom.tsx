import Mail from "./mail";
import Contact from "./contact";

export default function Bottom() {
  return (
    <div className="relative  bg-desktop-image bg-cover bg-no-repeat  bg-center rounded-3xl mb-2 py-8 px-6 ">
      <h1 className="xl:text-2xl lg:text-2xlm text-2xlmob text-center pt-14 leading-none font-semibold text-my-white-smoke">
        Join the community!
      </h1>
      <Mail />
      <p className=" text-center text-my-white opacity-70 mt-5 xl:text-sm lg:text-smd text-smmob mb-20">
        No spam. Just weekly news from the Botanic world.
      </p>
      <Contact />
    </div>
  );
}
