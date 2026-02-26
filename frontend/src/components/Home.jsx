import img from "../assets/images/gabriel ghnassia A9h6OsAxTyQ unsplash.png";
import img1 from "../assets/images/andrew-ruiz-fmz-B9At9iQ-unsplash.png";
import img2 from "../assets/images/steven-ungermann-aRT5UCf2MYY-unsplash.png";
import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col justify-center text-white items-center bg-cover bg-center bg-local bg-[#14274A] bg-blend-lighten"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="mr-120 mt-20 mb-80 pt-30">
          <p className="text-4xl w-100 font-montserrat">
            WELCOME TO <span className="text-9xl font-averia">LUXURY</span>{" "}
            <span className="text-5xl tracking-widest">HOTELS</span>
          </p>
          <p className="text-4xl mt-10 w-200 font-new-rocker">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-blue-600 items-center p-10 m-10 text-[20px] ">
        <p>All our room types are including complementary breakfast</p>
      </div>
      <div className="m-20 grid grid-cols-2 gap-2">
        <div className="border-l p-4 mt-4">
          <p className=" font-bold text-[30px] mb-5 font-averia ">
            Luxury Redefined
          </p>
          <p>
            Our rooms are designed to transport you into an environment made for
            leisure. Take your mind off the day-to-day of home life and find a
            private paradise for yourself.
          </p>
          <button
            type="button"
            className="font-bold bg-orange-300 text-white p-3 m-5 rounded-lg px-5"
          >
            Explore
          </button>
        </div>
        <div
          className="w-100 h-60 ml-50 bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
      </div>
      <div className="m-20 grid grid-cols-2 gap-2">
        <div className="border-l p-4 mt-4">
          <p className="font-bold text-[30px] mb-5 font-averia">
            Leave your worries in the sand
          </p>
          <p>
            {" "}
            We love life at the beach. Being close to the ocean with access to
            endless sandy beach ensures a relaxed state of mind. It seems like
            time stands still watching the ocean.
          </p>
          <button
            type="button"
            className="font-bold bg-orange-300 text-white p-3 m-5 rounded-lg px-5"
          >
            Explore
          </button>
        </div>
        <div
          className="h-60 w-100 ml-50 bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
      </div>
      <div className="flex flex-col mb-18 justify-center items-center p-2">
        <h1 className="font-bold text-[50px]">Testimonials</h1>
        <p className="text-[20px] font-semibold mt-7">
          "Calm, Serene, Retro – What a way to relax and enjoy"
        </p>
        <p>Mr. and Mrs. Baxter, UK</p>
        <span>
          <LeftSquareOutlined className="bg-yellow-500" />
          <RightSquareOutlined className="bg-yellow-500" />
        </span>
      </div>
    </>
  );
}
