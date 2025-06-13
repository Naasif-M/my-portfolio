import React, { useState } from "react";
import { BiSolidHomeHeart } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { RiContactsBook3Fill, RiContactsFill } from "react-icons/ri";

const Swipe = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      icon: <BiSolidHomeHeart className="text-2xl animate-bounce" />,
      name: "Home",
      href: "#home",
    },
    {
      icon: <RiContactsFill className="text-2xl animate-bounce" />,
      name: "About",
      href: "#about",
    },
    {
      icon: <AiFillProfile className="text-2xl animate-bounce" />,
      name: "Resume",
      href: "#resume",
    },
    {
      icon: <FaProjectDiagram className="text-2xl animate-bounce" />,
      name: "Portfolio",
      href: "#port",
    },
    {
      icon: <RiContactsBook3Fill className="text-2xl animate-bounce" />,
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      {/* 🌐 Large Screen Navbar */}
      <nav className="hidden lg:flex  justify-center gap-10 py-4 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.5)] rounded-full fixed w-1/3 right-[10%] top-5 z-50">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="flex items-center gap-2 text-gray-800 font-poppins font-semibold hover:text-custom-pink hover:scale-110 transition"
          >
            {item.name}
          </a>
        ))}
      </nav>
      <span className=" hidden lg:block fixed top-7 brightness-[120%] left-[10%] z-50 font-barcode font-semibold text-3xl text-custom-pink  tracking-wide">
        portfolio
      </span>

      {/* 📱 Mobile Slide-in Navbar */}
      <div
        className={`fixed top-1/2 border border-white right-0 z-40 w-60 bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 lg:hidden ${
          open
            ? "-translate-y-1/2 scale-100"
            : "-translate-y-1/2 translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4 text-lg font-poppins font-semibold text-gray-800">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-3 active:text-custom-pink"
            >
              {item.icon}
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* 📱 Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden z-50 fixed top-1/2 right-[-5px] -translate-y-1/2 bg-no-repeat bg-contain bg-right w-24 h-24 p-0 transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundImage: "url('/slide.png')" }}
      >
        <span
          className={`flex items-center text-2xl text-white select-none pointer-events-none ${
            open ? "rotate-180 justify-start pl-2" : "pr-2 justify-end"
          }`}
        >
          &lt;
        </span>
      </button>
    </>
  );
};

export default Swipe;
