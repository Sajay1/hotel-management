import { useState } from "react";

export default function Hamburger(){

      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    

    return(
        <>
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
        </>
    )
}