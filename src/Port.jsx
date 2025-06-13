import React from "react";
import { useState } from "react";

const Port = () => {
  const [isScaled, setIsScaled] = useState(false);

  return (
    <section id="port" className="w-full bg-white py-20 px-4 relative z-10">
      <p className="lg:mt-18 lg:text-[1rem] lg:mb-4 font-poppins text-center font-bold text-sm text-custom-pink brightness-125 tracking-[0.2rem]">
        PORTFOLIO
      </p>
      <p className="lg:text-[2.2rem] lg:mb-[35px]  text-center font-poppins font-semibold text-[1.7rem] text-black tracking-tight ">
        Check Out Some of My Works.
      </p>
      <h2 className=" lg:leading-loose  lg:text-[1.3rem] mb-12 mt-4 lg:mx-[18rem] font-lora text-center text-[1rem] text-[#888888]">
        Developed responsive web interfaces using React and Tailwind CSS,
        ensuring seamless user experiences across devices. Focused on clean,
        component-based architecture with optimized styling and layout.
      </h2>

      <div
        className={`relative lg:h-[100%] lg:w-[50%] lg:mx-auto mx-6 h-80 w-80 border-2 border-black overflow-hidden group lg:cursor-pointer`}
        onClick={() => setIsScaled(!isScaled)}
      >
        {/* Image */}
        <img
          src="/tony_guy.jpg"
          alt="project"
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isScaled ? "scale-110" : "scale-100"
          } lg:scale-100 lg:group-hover:scale-110`}
        />

        {/* Overlay text */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/60 text-white text-sm transition-opacity duration-300 ${
            isScaled ? "opacity-100" : "opacity-0"
          } lg:opacity-0 lg:group-hover:opacity-100`}
        >
          <p className="lg:text-[2rem] lg:text-white font-poppins font-semibold text-2xl text-white/80">
            Eutophia Architects
          </p>
          <p className="lg:uppercase">Web Development</p>
          <a
            href="https://eutophia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-lora text-xl tracking-wider font-semibold text-gray/50 hover:text-custom-pink"
          >
            VISIT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Port;
