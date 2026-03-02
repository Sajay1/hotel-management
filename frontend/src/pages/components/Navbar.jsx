import "/src/App.css";
import { useState } from "react";
import Links from "../components/Links"
import Hamburger from "./Hamburger";
import NavBrand from "./NavBrand";

export default function Navbar() {

  const linkStyle =
    "font-averia font-extrabold text-white px-5 py-5 rounded-md text-xl font-medium duration-300 ease-in hover:scale-110 hover:underline focus:underline";

  return (
    <nav className="absolute flex justify-between bg-transparent bg-linear-65 min-w-full">
      <div className="absolute inset-y-0 right-0 flex items-center md:hidden">

        {/*Hamburger Section*/}
        <Hamburger />

      
      </div>

        {/*Navbar-Brand Section*/}

        <NavBrand />




      <div className="hidden md:flex md:flex-row justify-end">
        <ul className="flex gap-4 p-3">
          <li>

            {/*Link Section*/}
            <Links />
            
          </li>
        </ul>
      </div>
    </nav>
  );
}
