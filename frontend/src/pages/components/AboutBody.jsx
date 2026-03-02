import data from "/src/data/data.json";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function AboutBody() {
  const location = useLocation();
  const currentPath = location.pathname;

  const facilities = useMemo(() => {
    return data.data.filter(
      (item) => item.path === "/about" && item.name != "About",
    );
  }, [currentPath]);

  return (
    <>
      <div className="flex flex-col justify-center text-indigo-600 items-center p-6 sm:p-8 md:p-10 m-4 sm:m-6 md:m-10">
        <p className="text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-9 font-cascadia-mono">
          FACILITIES
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-cascadia-mono text-center max-w-4xl">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite unique. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </p>
      </div>

      {facilities.map((facility, index) => (
        <div
          key={facility.id}
          className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative mb-20 max-md:mb-20 px-20 max-md:px-10"
          style={{ backgroundImage: `url(${facility.image})` }}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center ${
              index % 2 === 0
                ? "md:justify-start md:right-[10%]"
                : "md:justify-end md:left-[10%] lg:left-[30%] md:left-[30%]"
            } max-sm:left-[10%] lg:bottom-[80%] md:bottom-[80%] max-md:bottom-[80%]`}
          >
            <p
              className={`font-bold text-black bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border-4 border-double outline-black-600 ${
                index % 2 === 0
                  ? "-rotate-12 md:-rotate-35"
                  : "rotate-12 md:rotate-35"
              } rounded-3xl shadow-xl/50 shadow-black-500 transform hover:scale-105 transition-transform duration-300`}
            >
              {facility.name}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
