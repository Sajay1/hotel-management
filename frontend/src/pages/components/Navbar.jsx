import "/src/App.css";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import Links from "../components/Links"
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkStyle =
    "font-averia font-extrabold text-white px-5 py-5 rounded-md text-xl font-medium duration-300 ease-in hover:scale-110 hover:underline focus:underline";

  return (
    <nav className="absolute flex justify-between bg-transparent bg-linear-65 min-w-full">
      <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 mr-10"
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            data-slot="icon"
            aria-hidden="true"
            className={`size-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            data-slot="icon"
            aria-hidden="true"
            className={`size-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
          >
            <path
              d="M6 18 18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-black/50 md:hidden"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="/"
              aria-current="page"
              className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
            >
              Home
            </a>
            <a
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              About
            </a>
            <a
              href="/rooms"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Rooms
            </a>
            <a
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}

      <div className="bg-[#E0B973] size-20 rounded-b-4xl text-wrap p-2 font-doto mx-19 max-sm:mx-9 mb-3 max-md:mb-1 px-5 w-40 max-md:w-25 h-25 max-md:h-15">
        <ReactTyped
          strings={["LUXURY"]}
          typeSpeed={60}
          backSpeed={100}
          loop
          showCursor={false}
          className="flex justify-center text-[30px] font-bold text-indigo-950 hover:scale-125 duration-300 ease-in max-md:text-[20px]"
        />
        <p className="text-sm flex justify-center text-[20px] text-indigo-950 mb-9 md:mb-3 max-md:text-[15px]">
          HOTELS
        </p>
      </div>

      <div className="hidden md:flex md:flex-row justify-end">
        <ul className="flex gap-4 p-3">
          <li>
            <Links />
          </li>
        </ul>
      </div>
    </nav>
  );
}
