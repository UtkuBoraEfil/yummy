import Top from "@/components/top";
import Navbar from "@/components/navbar";
import DynamicCards from "@/components/dynamicCards";
import Comp1 from "@/components/comp1";
import Aos1 from "@/components/aos1";
import Cards2 from "@/components/cards2";
import Aos2 from "@/components/aos2";
import Comp2 from "@/components/comp2";
import Comp3 from "@/components/comp3";
import Bottom from "@/components/bottom";

export default function Home() {
  return (
    <main className="bg-my-white">
      <div className=" min-h-screen bg-my-white-smoke text-my-black lg:mx-3 mx-1 py-1">
        <Top />
        <Comp1 />
        <DynamicCards />
        <Aos1 />
        <Cards2 />
        <Aos2 />
        <Comp2 />
        <Comp3 />
        <Bottom />
      </div>
    </main>
  );
}
