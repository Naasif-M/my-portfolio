import React, { useState } from "react";
import { BiSolidHomeHeart } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";

const Swipe = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Slide-in Navbar */}
      <div
        className={`fixed top-1/2 border-[1px] border-white right-0 z-40 w-60 bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-300 ${
          open
            ? "-translate-y-1/2 scale-100"
            : "-translate-y-1/2 translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-4 text-lg font-poppins   font-semibold text-gray-800">
          <div className="  flex flex-row gap-3 active:text-custom-pink">
            <BiSolidHomeHeart className="animate-bounce text-2xl" />
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
          </div>
          <div className="flex flex-row gap-3 active:text-custom-pink">
            <RiContactsFill className=" animate-bounce text-2xl" />
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </div>
          <div className="flex flex-row gap-3 active:text-custom-pink">
            <AiFillProfile className="text-2xl animate-bounce" />
            <a href="#resume" onClick={() => setOpen(false)}>
              Resume
            </a>
          </div>
          <div className="flex flex-row gap-3 active:text-custom-pink">
            <FaProjectDiagram className="animate-bounce text-2xl" />
            <a href="#port" onClick={() => setOpen(false)}>
              Portfolio
            </a>
          </div>
          <div className="flex flex-row gap-3 active:text-custom-pink">
            <RiContactsBook3Fill className="animate-bounce text-2xl" />
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </div>
        </nav>
      </div>

      {/* Your Original Button (preserved 100%) */}
      <button
        onClick={() => setOpen(!open)}
        className="z-50 fixed top-1/2 right-[-5px] -translate-y-1/2 bg-no-repeat bg-contain bg-right w-24 h-24 p-0 transition-transform hover:scale-105 active:scale-95"
        style={{
          backgroundImage: "url('/slide.png')",
        }}
      >
        <span
          className={`flex items-center   text-2xl text-white select-none pointer-events-none ${
            open ? "rotate-180 justify-start pl-2" : " pr-2 justify-end"
          }`}
        >
          &lt;
        </span>
      </button>
    </>
  );
};

export default Swipe;
