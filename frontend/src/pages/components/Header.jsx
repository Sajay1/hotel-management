import data from "/src/data/data.json";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const currentPageData = useMemo(() => {
    const found = data.data.find((item) => item.path === currentPath);
    return found || data.data[0];
  }, [currentPath]);

  const headerStyle = useMemo(() => {
    const baseStyle =
      "flex flex-col justify-center text-white items-center bg-cover bg-center bg-local min-h-[600px] md:min-h-[900px] px-4 md:px-9 lg:px-16";

    switch (currentPath) {
      case "/about":
        return baseStyle + " bg-[#14274A] bg-blend-lighten";
      case "/rooms":
        return (
          baseStyle +
          " bg-indigo-400 bg-blend-multiply min-h-[400px] sm:min--[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] px-4 sm:px-6 md:px-9 lg:px-16"
        );
      default:
        return baseStyle + " bg-[#14274A] bg-blend-lighten";
    }
  }, [currentPath]);

  return (
    <div
      className={headerStyle}
      style={{ backgroundImage: `url(${currentPageData.image})` }}
    >
      <div className="w-full max-w-7xl mx-auto text-center md:text-left">
        <p className="text-xl gap-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-montserrat max-w-full md:max-w-xl lg:max-w-2xl">
          WELCOME TO
          <span className="text-3xl gap-4 sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl block md:block font-averia">
            LUXURY
          </span>{" "}
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-widest block md:inline">
            HOTELS
          </span>
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-full md:max-w-2xl lg:max-w-3xl font-new-rocker">
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
      </div>
    </div>
  );
}
