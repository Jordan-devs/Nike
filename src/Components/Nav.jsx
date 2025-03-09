import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../Constants/index";
import { closeHamburger } from "../assets/icons";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const navFunc = () => {
    setOpen(!open);
  };

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className=" flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:bg-red-400 py-2 px-4  rounded-lg text-slate-gray hover:text-white"
            >
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden cursor-pointer" onClick={navFunc}>
          <img
            src={open ? closeHamburger : hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>

      <div
        className={`bg-pale-blue  rounded-lg transition-all duration-300 overflow-hidden ease-in-out lg:hidden z-10 ${
          open ? "h-80 p-8" : "h-0"
        }`}
      >
        <ul className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:bg-red-400 py-2 px-4 hover:font-bold rounded-lg text-slate-gray hover:text-white"
            >
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
