import img1 from "/src/assets/images/andrew-ruiz-fmz-B9At9iQ-unsplash.png";
import img2 from "/src/assets/images/steven-ungermann-aRT5UCf2MYY-unsplash.png";

export default function HomeBody() {
  return (
    <>
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
    </>
  );
}
