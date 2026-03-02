import { useLocation } from "react-router-dom";
import HomeBody from "./HomeBody";
import RoomsBody from "./RoomsBody";
import AboutBody from "./AboutBody";

export default function Body() {
  const location = useLocation();
  const currentPage = location.pathname;

  const Bodysection = () => {
    switch (currentPage) {
      case "/about":
        return <AboutBody />;
      case "/rooms":
        return <RoomsBody />;
      default:
        return <HomeBody />;
    }
  };

  return <>{Bodysection()}</>;
}
