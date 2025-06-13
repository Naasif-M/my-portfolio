import React from "react";
import { GoChevronDown } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";
import About from "./About";
import Resume from "./Resume";
import Port from "./Port";
import Contact from "./Contact";
import Swipe from "./Swipe";

const Home = () => {
  return (
    <>
      <section id="home" className="scroll-smooth relative">
        {/* ✅ Fixed background */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/bg.jpg)",
            filter: "brightness(35%)",
          }}
        />
        <div className="absolute h-screen bg-gray-100">
          <Swipe onClick={() => alert("Back pressed")} />
        </div>

        {/* ✅ Hero section content with full screen height */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
          <p className="lg:text-[1.5rem] font-poppins font-bold text-sm text-custom-pink tracking-widest">
            HELLO, WORLD.
          </p>
          <p className="lg:text-[5.2rem] font-poppins text-5xl font-medium text-white mb-3">
            I'm Naasif.
          </p>
          <div className="lg:flex lg:flex-row lg:gap-4">
            <div className="lg:w-px lg:h-4 lg:bg-gray-500"></div>
            <p
              className="lg:text-[17px]  font-lora text-sm tracking-wider text-white mb-1"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.2)" }}
            >
              FRONT-END DEVELOPER
            </p>
            <div className="lg:w-px lg:h-4 lg:bg-gray-500"></div>
            <p
              className="lg:text-[17px] font-lora text-sm tracking-wider text-white mb-8"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.2)" }}
            >
              REACT.JS DEVELOPER
            </p>
            <div className="lg:w-px lg:h-4 lg:bg-gray-500"></div>
          </div>

          <a
            href="#about"
            className="inline-flex items-center px-7 py-5 border-2 border-white text-sm font-poppins font-medium text-white tracking-widest hover:bg-white/10 transition"
          >
            <div className="text-white tracking-widest">MORE ABOUT ME</div>
            <GoChevronDown className="ml-2 text-white" />
          </a>

          {/* ✅ Social icons at bottom */}
          <div className="lg:gap-8 lg:text-4xl flex gap-3 items-center absolute lg:mb-[75px] mb-[118px] bottom-0 text-white text-3xl">
            <a
              href="https://www.instagram.com/_naasi.h?igsh=cmg1Y3h2bjVvMmcw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="cursor-pointer hover:text-custom-pink" />
            </a>
            <a
              href="https://github.com/Naasif-M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="cursor-pointer hover:text-custom-pink" />
            </a>
          </div>
        </div>

        {/* ✅ Scrollable section */}

        <About />
        <Resume />
        <Port />
        <Contact />
      </section>
    </>
  );
};

export default Home;
