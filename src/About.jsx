import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="w-full bg-white py-20 px-4 relative z-10">
        <p className="lg:mt-18 lg:text-[1rem] lg:mb-4 mt-12 mb-2 font-poppins text-center font-bold text-sm text-custom-pink brightness-125 tracking-[0.2rem]">
          ABOUT
        </p>
        <p className="lg:text-[2.2rem] lg:mb-[35px] text-center font-poppins font-semibold text-2xl text-black ">
          Let me introduce myself.
        </p>
        <div className="lg:flex lg:flex-row lg:gap-8 lg:items-center lg:justify-center lg:">
          <img
            src="/face.jpeg"
            alt="Profile"
            className="w-32 h-32 filter grayscale-[40%] rounded-full object-cover mx-auto mt-10 mb-6 lg:mx-0  lg:mt-0 lg:mb-0"
          />

          <h2 className="lg:text-start lg:leading-loose lg:max-w-xl lg:text-[1.1rem] lg:mb-0 mb-12 ml-4 font-lora text-start text-md text-[#888888]">
            Graduate with a Bachelor's degree in Computer Science, equipped with
            a solid foundation in programming languages such as Python, and
            JavaScript.
          </h2>
        </div>
        <div className="lg:flex lg:flex-row lg:mx-[20%] lg:my-[5%]">
          <div className="lg:w-[50%]">
            <p className="mb-4 lg:text-start lg:text-lg font-poppins text-center font-bold text-md text-black tracking-widest">
              PROFILE
            </p>
            <h2 className="lg:ml-0 lg:leading-loose mb-6 ml-4 text-start font-lora text-md text-gray-600 ">
              I'm passionate about building beautiful React
              interfaces.Comfortable using React along with core web
              technologies (HTML, CSS, JS) to develop responsive user
              interfaces.
            </h2>
            <div className="lg:ml-0 ml-4">
              <p className="lg:text-md font-poppins font-bold text-sm text-black tracking-[3px]">
                FULLNAME:
              </p>
              <h2 className="lg:text-md lg:mb-5 mb-4 font-poppins text-sm ml-1 text-[#888888]">
                Naasif M.
              </h2>
              <p className="lg:text-md font-poppins font-bold text-sm text-black tracking-[3px]">
                BIRTHDATE:
              </p>
              <h2 className="lg:text-md lg:mb-5 mb-4 font-poppins text-sm ml-1 text-[#888888]">
                13/11/2001.
              </h2>
              <p className="lg:text-md font-poppins font-bold text-sm text-black tracking-[3px]">
                JOB:
              </p>
              <h2 className="lg:text-md lg:mb-5 mb-4 font-poppins text-sm ml-1 text-[#888888]">
                Front-end Developer.
              </h2>
              <p className="lg:text-md font-poppins font-bold text-sm text-black tracking-[3px]">
                PHONE:
              </p>
              <h2 className="lg:text-md lg:mb-5 mb-4 font-poppins text-sm ml-1 text-[#888888]">
                (+91)8489777490
              </h2>
              <p className="lg:text-md font-poppins font-bold text-sm text-black tracking-[3px]">
                EMAIL:
              </p>
              <h2 className="lg:text-md mb-16 font-poppins text-sm ml-1 text-[#888888]">
                naasifahamed008@gmail.com
              </h2>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <p className="mb-6  lg:text-lg lg:text-start lg:ml-4 text-center font-poppins font-bold text-md text-black tracking-[0.2rem]">
              SKILLS
            </p>
            <h2 className="ml-4 lg:leading-relaxed font-lora text-start text-md text-[#6e6e6e]">
              Possess basic to intermediate knowledge of frontend technologies
              including React, HTML, CSS, and JavaScript.
            </h2>
            <ul className="my-24 mx-4 space-y-16">
              <li className="relative w-full [height:0.4rem] bg-gray-400">
                <strong className="absolute left-0 -top-8 font-bold text-black uppercase tracking-widest font-bold text-sm">
                  HTML5
                </strong>
                <div className="bg-gray-800 h-full relative w-[90%]">
                  <span className="absolute -top-10 right-0 text-white text-[0.8rem] bg-gray-800 px-2 py-1 rounded text-center">
                    90%
                  </span>
                </div>
              </li>
              <li className="relative w-full [height:0.4rem] bg-gray-400">
                <strong className="absolute left-0 -top-8 font-bold text-black uppercase tracking-widest text-sm">
                  CSS3
                </strong>
                <div className="bg-gray-800 h-full relative w-[85%]">
                  <span className="absolute -top-10 right-0 text-white text-[0.8rem] bg-gray-800 px-2 py-1 rounded text-center">
                    85%
                  </span>
                </div>
              </li>
              <li className="relative w-full [height:0.4rem] bg-gray-400">
                <strong className="absolute left-0 -top-8 font-bold text-black uppercase tracking-widest text-sm">
                  javascript
                </strong>
                <div className="bg-gray-800 h-full relative w-[70%]">
                  <span className="absolute -top-10 right-0 text-white text-[0.8rem] bg-gray-800 px-2 py-1 rounded text-center">
                    70%
                  </span>
                </div>
              </li>
              <li className="relative w-full [height:0.4rem] bg-gray-400">
                <strong className="absolute left-0 -top-8 font-bold text-black uppercase tracking-widest text-sm">
                  react
                </strong>
                <div className="bg-gray-800 h-full relative w-[75%]">
                  <span className="absolute -top-10 right-0 text-white text-[0.8rem] bg-gray-800 px-2 py-1 rounded text-center">
                    75%
                  </span>
                </div>
              </li>
              <li className="relative w-full [height:0.4rem] bg-gray-400">
                <strong className="absolute left-0 -top-8 text-black uppercase tracking-widest text-sm">
                  python
                </strong>
                <div className="bg-gray-800 h-full relative w-[35%]">
                  <span className="absolute -top-10 right-0 text-white text-[0.8rem] bg-gray-800 px-1 py-1 rounded text-center">
                    30%
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-8 lg:items-center lg:justify-center lg:mx-[50%]  lg:mb-[5%]">
          <div className="lg:mx-0  mx-6 ">
            <a
              href="#about"
              className="  lg:px-[110px] lg:font-bold whitespace-nowrap font-extrabold text-center block px-7 py-4 border-[3px] border-black text-sm font-poppins font-medium text-black tracking-widest hover:text-custom-pink hover:border-custom-pink    tracking-[0.2rem]"
            >
              HIRE ME
            </a>
          </div>
          <div className="lg:mx-0 lg:my-0  mx-6 my-8">
            <a
              href="#about"
              className=" lg:px-[90px] whitespace-nowrap font-extrabold text-center block px-7 py-4 border-[3px] border-black bg-black text-sm font-poppins  text-white tracking-widest hover:text-custom-pink    tracking-[0.2rem]"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
