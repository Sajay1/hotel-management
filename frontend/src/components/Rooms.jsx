import img from "../assets/images/apartment-bed-bedroom-chair-271618 1.png";
import img1 from "../assets/images/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash 1.png";
import img2 from "../assets/images/double-room 1.png";
import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";

export default function Rooms() {
  return (
    <>
      <div
        className="flex flex-col justify-center text-white items-center bg-cover bg-center bg-local bg-indigo-400 bg-blend-multiply"
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
      <div className="flex flex-col justify-center text-[#14274A]  items-center p-10 m-10 text-[20px] ">
        <p className="text-5xl font-averia pb-6">ROOMS AND RATES</p>
        <p className="px-40 text-center">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms’ sea-view windows and terraces.
        </p>
      </div>

      <div
        className="flex flex-col py-20 px-2 text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className=" relative m-60 top-100 border-2 border-t-0 rounded-b-2xl border-blue-800">
          <p className="font-bold bg-[#14274A] text-4xl w-245 text-center p-4">
            SINGLE ROOM
          </p>
          <p className="font-bold text-[#14274A] top-100 pt-10 pb-10 p-40 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 absolute right-206 bottom-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            VIEW ROOM DETAILS
            <button className="bg-[#E0B973] rounded-xl px-5 py-2 left-190 absolute text-white">
              $147 Avg/night
            </button>
          </p>
        </div>
      </div>

      <div
        className="flex flex-col p-50 pb-1 text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className=" relative m-60 top-60 border-2 border-t-0 rounded-b-2xl border-blue-800">
          <p className="font-bold bg-[#14274A] text-4xl w-245 text-center p-4">
            DOUBLE ROOM
          </p>
          <p className="font-bold text-[#14274A] top-100 pt-10 pb-10 p-40 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 absolute right-206 bottom-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            VIEW ROOM DETAILS
            <button className="bg-[#E0B973] rounded-xl px-5 py-2 left-190 absolute text-white">
              $155 Avg/night
            </button>
          </p>
        </div>
      </div>

      <div
        className="flex flex-col p-50 pb-1 mb-20  text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className=" relative m-60 top-70 border-2 border-t-0 rounded-b-2xl border-blue-800">
          <p className="font-bold bg-[#14274A] text-4xl w-245 text-center p-4">
            TWIN ROOM
          </p>
          <p className="font-bold text-[#14274A] top-100 pt-10 pb-10 p-40 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 absolute right-206 bottom-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            VIEW ROOM DETAILS
            <button className="bg-[#E0B973] rounded-xl px-5 py-2 left-190 absolute text-white">
              $155 Avg/night
            </button>
          </p>
        </div>
      </div>

      <div className="flex flex-col mb-18 justify-center items-center p-2">
        <h1 className="font-bold text-[50px]">Testimonials</h1>
        <p className="text-[20px] font-semibold mt-7">
          "Calm, Serene, Retro – What a way to relax and enjoy"
        </p>
        <p>Mr. and Mrs. Baxter, UK</p>
        <span>
          <LeftSquareOutlined className="bg-yellow-500 text-white" />
          <RightSquareOutlined className="bg-yellow-500" />
        </span>
      </div>
    </>
  );
}
