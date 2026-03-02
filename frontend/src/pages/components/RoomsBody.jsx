import data from "/src/data/data.json";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function RoomsBody() {
  const location = useLocation();
  const currentPath = location.pathname;

  const rooms = useMemo(() => {
    return data.data.filter(
      (item) => item.path === "/rooms" && item.name != "Rooms",
    );
  }, [currentPath]);

  return (
    <>
      <div className="flex flex-col justify-center text-[#14274A] items-center p-6 sm:p-8 md:p-10 lg:p-12">
        <p className="text-3xl sm:text-4xl md:text-5xl font-averia pb-4 sm:pb-6 text-center">
          ROOMS AND RATES
        </p>
        <p className="text-center text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-6xl">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn't our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature's palette as visible from our
          rooms' sea-view windows and terraces.
        </p>
      </div>

      {rooms.map((room, index) => (
        <>
          <div
            key={room.id}
            className="flex justify-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16"
          >
            <div className="relative w-full max-w-4xl">
              <div
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center rounded-t-2xl"
                style={{ backgroundImage: `url(${room.image})` }}
              />
              <div className="border-2 border-t-0 border-blue-800 rounded-b-2xl bg-white">
                <p className="font-bold bg-[#14274A] text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center p-3 sm:p-4 rounded-b-2xl">
                  {room.name}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-2 cursor-pointer group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 sm:size-7 md:size-8 text-[#14274A] group-hover:scale-110 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="font-bold text-[#14274A] text-sm sm:text-base md:text-lg">
                      VIEW ROOM DETAILS
                    </span>
                  </div>
                  <button className="bg-[#E0B973] text-white font-bold rounded-xl px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg hover:bg-[#c9a052] transition-colors w-full sm:w-auto">
                    ${room.roomrate} Avg/night
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}


    </>
  );
}
