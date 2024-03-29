import Navbar from "@/component/modules/Navbar/Navbar";
import Banner from "@/component/templates/Index/Banner/Banner";
import ChildrensCollection from "@/component/templates/Index/ChildrensCollection/ChildrensCollection";
import NewProducts from "@/component/templates/Index/NewProducts/NewProducts";
import Offer from "@/component/templates/Index/Offer/Offer";
import Production from "@/component/templates/Index/Production/Production";
import SliderHeader from "@/component/templates/Index/Slider/SliderHeader";

export default function Home() {
  return (
    <>
    <div className=" border-solid border-b-4 border-secondary1 z-10 ">
      <Navbar />
    </div>
      <SliderHeader />
      <NewProducts />
      <ChildrensCollection />
      <Banner />
      <Offer />
      <Production />
    </>
  );
}
