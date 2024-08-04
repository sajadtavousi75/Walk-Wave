import Footer from "@/component/modules/Footer/Footer";
import Navbar from "@/component/modules/Navbar/Navbar";
import Banner from "@/component/templates/Index/Banner/Banner";
import ChildrensCollection from "@/component/templates/Index/ChildrensCollection/ChildrensCollection";
import Introduction from "@/component/templates/Index/Introduction/Introduction";
import NewProducts from "@/component/templates/Index/NewProducts/NewProducts";
import Offer from "@/component/templates/Index/Offer/Offer";
import Production from "@/component/templates/Index/Production/Production";
import SliderHeader from "@/component/templates/Index/Slider/SliderHeader";


export const metadata={
  title:'WALK WAVE - HOME',
  icons:{
    icon:'/images/svgs/Frame 2.svg'

  }
}

export default function Home() {
  return (
    <>
      <div className="main">
      <SliderHeader />
      <NewProducts title={'New Arrivals'}/>
      <ChildrensCollection />
      <Banner />
      <Offer />
      <Production />
      <Introduction />
      </div>
    </>
  );
}
