import Body from "./components/Body";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";


export default function Rooms() {
  return (
    <div className="w-full overflow-x-hidden">

      {/*Header Section*/}
      <Header />
      
      {/*Body Section*/}
      <Body />
     
     {/*Testimonials Section*/}
      <Testimonials />
    </div>
  );
}
