import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import data from "/src/data/data.json";

export default function HomeBody() {
  const location = useLocation();
  const currentPath = location.pathname;

  const home = useMemo(() => {
    return data.data.filter((item) => item.path === "/" && item.name != "Home");
  }, [currentPath]);

  return (
    <>
      <div className="flex flex-col justify-center text-blue-600 items-center p-4 sm:p-6 md:p-8 lg:p-10 text-base sm:text-lg md:text-xl">
        <p className="text-center">
          All our room types are including complementary breakfast
        </p>
      </div>

      {home.map((home, index) => (
        <>
          <div
            key={home.id}
            className="m-4 sm:m-8 md:m-12 lg:m-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12"
          >
            <div className="border-l-4 border-orange-300 p-4 sm:p-6 order-2 md:order-1">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-5 font-averia">
                {home.name}
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                {home.content}
              </p>
              <button
                type="button"
                className="font-bold bg-orange-300 hover:bg-orange-400 transition-colors text-white p-3 sm:p-4 mt-4 sm:mt-5 rounded-lg px-6 sm:px-8 text-sm sm:text-base"
              >
                Explore
              </button>
            </div>
            <div
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-center bg-cover rounded-lg order-1 md:order-2"
              style={{ backgroundImage: `url(${home.image})` }}
            ></div>
          </div>
        </>
      ))}
    </>
  );
}
