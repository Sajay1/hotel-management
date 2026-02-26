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
        className="flex flex-col py-50 px-2 text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat border border-blue-800 border-t-0 "
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className=" relative m-60 top-100 border-2 border-blue-800">
          <p className="font-bold bg-[#14274A] text-4xl w-245 text-center p-4">
            SINGLE ROOM
          </p>
          <p className="text-[#14274A] top-100 pt-10 pb-10 p-40">
            VIEW ROOM DETAILS
          </p>
        </div>
      </div>

      <div
        className="flex flex-col p-50 text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat border border-blue-800 border-t-0 "
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className=" relative m-60 top-80 border-2 border-blue-800">
          <p className="font-bold bg-[#14274A] text-4xl w-245 text-center p-4">
            DOUBLE ROOM
          </p>
          <p className="text-[#14274A] top-100 pt-10 pb-10 p-40">
            VIEW ROOM DETAILS
          </p>
        </div>
      </div>
      <div
        className="flex flex-col p-50 text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat border border-blue-800 border-t-0  "
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className=" relative m-60 top-100 border-2 border-blue-800">
          <p className="font-bold bg-[#14274A] text-4xl w-245 text-center p-4">
            TWIN ROOM
          </p>
          <p className="text-[#14274A] top-100 pt-10 pb-10 p-40">
            VIEW ROOM DETAILS
          </p>
        </div>
      </div>
    </>
  );
}
