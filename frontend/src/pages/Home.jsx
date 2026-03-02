import Testimonials from "./components/Testimonials";
import Header from "./components/Header";
import Body from "./components/Body";



export default function Home() {
  return (
    <>
    {/*Header Section*/}
          <Header />
          
          {/*Body Section*/}
          <Body />
         
         {/*Testimonials Section*/}
          <Testimonials />
    </>
  );
}
