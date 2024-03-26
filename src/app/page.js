import Navbar from "@/component/modules/Navbar/Navbar";
import SliderHeader from "@/component/templates/Index/Slider/SliderHeader";

export default function Home() {
  return (
    <>
    <div className=" border-solid border-b-4 border-secondary1 z-10 ">
      <Navbar />
    </div>
      <SliderHeader />
    </>
  );
}
