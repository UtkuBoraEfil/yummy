import Image from "next/image";
import logo from "../../public/apple.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" border  border-my-white rounded-3xl  flex justify-between ">
            <Image
                src={logo}
                alt="apple"
                width={30}
                height={30}
                className="fill-my-white "
            />
            <div className=" flex gap-3">
                <Link href='/menu' className=" px-5 rounded-3xl py-2 border-x  border-my-white hover:bg-my-white transition-all duration-75 text-my-white xl:text-sl lg:text-smd hover:text-my-black">
                  Menu
                </Link>
                <button className=" px-5 rounded-3xl py-2 border-l  border-my-white hover:bg-my-white transition-all duration-75 text-my-white xl:text-sl lg:text-smd hover:text-my-black">
                  Location
                </button>
            </div>
    </div>
  );
}