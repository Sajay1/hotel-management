import img1 from "/src/assets/images/humphrey-muleba-LOA2mTj1vhc-unsplash 1.png";
import img2 from "/src/assets/images/big-tiny-belly-XtnNrQYC7ts-unsplash 1.png";
import img3 from "/src/assets/images/adetayo-adefala-1K2iQQM31D0-unsplash 1.png";
import img4 from "/src/assets/images/bianca-jordan-o7SvheEZoks-unsplash 1.png";
import img5 from "/src/assets/images/jason-leung-poI7DelFiVA-unsplash 1.png";

export default function AboutBody(){
    return(<>
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

      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative mb-20 max-md:mb-20 px-20 max-md:px-10"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center md:justify-start md:right-[10%] max-sm:right-[10%] lg:right-[10%] lg:bottom-[80%] md:bottom-[80%] max-md:bottom-[80%] max-sm:bottom-[80%]">
          <p className="font-bold text-black bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border-4 border-double outline-black-600 -rotate-12 md:-rotate-35 rounded-3xl shadow-xl/50 shadow-black-500 transform hover:scale-105 transition-transform duration-300">
            THE GYM
          </p>
        </div>
      </div>

      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full relative mb-20 max-md:mb-20 px-20 max-md:px-10"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center md:justify-end md:left-[20%] lg:left-[30%] md:left-[30%] max-sm:left-[10%] lg:left-[10%] lg:bottom-[80%] md:bottom-[80%] max-md:bottom-[80%] max-sm:bottom-[80%]">
          <p className="font-bold text-black bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border-4 border-double outline-black-600 rotate-12 md:rotate-35 rounded-3xl shadow-xl/50 shadow-black-500 transform hover:scale-105 transition-transform duration-300">
            SWIMMING POOL
          </p>
        </div>
      </div>

      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full relative mb-20 max-md:mb-20 px-20 max-md:px-10"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center md:justify-start md:right-[10%] max-sm:right-[10%] lg:right-[10%] lg:bottom-[80%] md:bottom-[80%] max-md:bottom-[80%] max-sm:bottom-[80%]">
          <p className="font-bold text-black bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border-4 border-double outline-black-600 -rotate-12 md:-rotate-35 rounded-3xl shadow-xl/50 shadow-black-500 transform hover:scale-105 transition-transform duration-300">
            THE SPA
          </p>
        </div>
      </div>

      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full relative mb-20 max-md:mb-20 px-20 max-md:px-10"
        style={{ backgroundImage: `url(${img4})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center md:justify-end md:left-[10%] lg:left-[20%] md:left-[10%] max-sm:left-[10%] lg:left-[10%] lg:bottom-[80%] md:bottom-[80%] max-md:bottom-[80%] max-sm:bottom-[80%]">
          <p className="font-bold text-black bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border-4 border-double outline-black-600 rotate-12 md:rotate-35 rounded-3xl shadow-xl/50 shadow-black-500 transform hover:scale-105 transition-transform duration-300">
            LAUNDRY
          </p>
        </div>
      </div>

      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full relative mb-20 max-md:mb-20 px-20 max-md:px-10"
        style={{ backgroundImage: `url(${img5})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center md:justify-start md:right-[10%] max-sm:right-[10%] lg:right-[10%] lg:bottom-[80%] md:bottom-[80%] max-md:bottom-[80%] max-sm:bottom-[80%]">
          <p className="font-bold text-black bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 border-4 border-double outline-black-600 -rotate-12 md:-rotate-35 rounded-3xl shadow-xl/50 shadow-black-500 transform hover:scale-105 transition-transform duration-300">
            RESTAURANT
          </p>
        </div>
      </div>
    </>)
}