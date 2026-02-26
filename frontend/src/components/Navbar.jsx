import "../App.css";
import { ReactTyped } from "react-typed";

export default function Navbar() {
  const linkStyle =
    "font-averia font-extrabold text-white px-5 py-5 rounded-md text-xl font-medium duration-300 ease-in hover:p-1 hover:underline focus:underline";

  return (
    <>
      <nav className="lg:absolute flex justify-between bg-transparent bg-linear-65 min-w-full sm:w-100">
        <div className="lg:bg-[#E0B973] size-20 rounded-b-4xl text-wrap p-2 font-doto mx-19 mb-3 px-5 w-40 h-25 sm:bg-[#E0B973] sm:size-20 sm:p-2 font-doto sm:mx-19 mb-3 sm:px-5 sm:w-35 sm:h-25">
          <ReactTyped
            strings={["LUXURY"]}
            typeSpeed={60}
            backSpeed={100}
            loop
            showCursor={false}
            className="flex justify-center text-[30px] font-bold text-indigo-950 hover:scale-125 duration-300 ease-in"
          />
          <p className="text-sm flex justify-center text-[20px] text-indigo-950 mb-9 sm:mb-5">
            HOTELS
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <ul className="flex gap-4 p-3">
            <li className={linkStyle}>
              <a href="/">Home</a>
            </li>
            <li className={linkStyle}>
              <a href="/about">About</a>
            </li>
            <li className={linkStyle}>
              <a href="/rooms">Rooms</a>
            </li>
            <li className={linkStyle}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
