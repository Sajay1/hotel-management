import img from "../assets/images/gabriel ghnassia A9h6OsAxTyQ unsplash.png";
import img1 from "../assets/images/andrew-ruiz-fmz-B9At9iQ-unsplash.png";
import img2 from "../assets/images/steven-ungermann-aRT5UCf2MYY-unsplash.png";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <>
      <div
        className="flex flex-col justify-center text-white items-center bg-cover bg-center bg-local bg-[#14274A] bg-blend-lighten min-h-[600px] md:min-h-[900px] px-4 md:px-9 lg:px-16"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-full max-w-7xl mx-auto text-center md:text-left">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat max-w-full md:max-w-xl lg:max-w-2xl">
            WELCOME TO{" "}
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl block md:inline font-averia">
              LUXURY
            </span>{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl tracking-widest block md:inline">
              HOTELS
            </span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-full md:max-w-2xl lg:max-w-3xl font-new-rocker">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center text-blue-600 items-center p-4 sm:p-6 md:p-8 lg:p-10 text-base sm:text-lg md:text-xl">
        <p className="text-center">
          All our room types are including complementary breakfast
        </p>
      </div>

      <div className="m-4 sm:m-8 md:m-12 lg:m-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <div className="border-l-4 border-orange-300 p-4 sm:p-6 order-2 md:order-1">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-5 font-averia">
            Luxury Redefined
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Our rooms are designed to transport you into an environment made for
            leisure. Take your mind off the day-to-day of home life and find a
            private paradise for yourself.
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
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
      </div>

      <div className="m-4 sm:m-8 md:m-12 lg:m-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <div className="border-l-4 border-orange-300 p-4 sm:p-6 order-2">
          <p className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-5 font-averia">
            Leave your worries in the sand
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            We love life at the beach. Being close to the ocean with access to
            endless sandy beach ensures a relaxed state of mind. It seems like
            time stands still watching the ocean.
          </p>
          <button
            type="button"
            className="font-bold bg-orange-300 hover:bg-orange-400 transition-colors text-white p-3 sm:p-4 mt-4 sm:mt-5 rounded-lg px-6 sm:px-8 text-sm sm:text-base"
          >
            Explore
          </button>
        </div>
        <div
          className="w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-center bg-cover rounded-lg order-1"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
      </div>

<Testimonials />
      
    </>
  );
}
