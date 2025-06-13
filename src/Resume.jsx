import React from "react";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="w-full bg-[#ebebeb] py-20 px-4 relative z-10"
    >
      <p className=" lg:mt-18 lg:text-[1rem] lg:mb-4 font-poppins text-center font-bold text-sm text-custom-pink brightness-125 tracking-[0.2rem]">
        RESUME
      </p>
      <p className="lg:text-[2.2rem] lg:mb-[35px] text-center font-poppins font-semibold text-2xl text-black ">
        More of my credentials.
      </p>
      <h2 className="lg:text-center lg:mx-auto lg:leading-loose lg:max-w-xl lg:text-[1.1rem] mb-12 mt-4 mx-4 font-lora  text-[1rem] text-[#888888]">
        I'm passionate about building beautiful React interfaces.
      </h2>
      <p className=" lg:text-[1.5rem] lg:mb-20  mb-10 font-poppins text-center font-semibold leading-loose text-xl text-custom-pink brightness-125 tracking-[1px]">
        Work Experience
      </p>

      <div className=" mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute lg:left-[360px] left-[38px] top-0 h-full w-[2px] bg-black/20"></div>

        {/* Timeline Item */}
        <div className=" flex flex-col  mb-16">
          {/* Icon */}
          <div className="absolute lg:left-[338px] left-4  bg-black text-white w-12 h-12 rounded-full flex items-center justify-center z-10">
            <MdWork className="text-xl" />
          </div>

          {/* Header */}
          <div className=" mt-2 lg:pl-[450px] pl-[85px] ">
            <h3 className="text-xl font-semibold">Process Executive</h3>
            <p className="text-md mb-4 text-gray-500">Jun 2023 - Apr 2024</p>
          </div>

          {/* Content */}
          <div className="lg:pl-[450px] pl-[85px] pr-[5px]">
            <p className="text-lg font-semibold relative mb-4 after:content-[''] after:block after:h-[3px] after:w-[50px] after:bg-black/20 after:absolute after:bottom-0 after:left-0"></p>
            <p className="text-md text-[#313131] font-semibold font-poppins">
              Isolve Technology
            </p>
            <div className="text-[1rem] text-[#6e6e6e]">
              <ul>
                <li>
                  Processed invoices in accordance to established procedures.
                </li>
                <br></br>
                <li>Resolved issues between purchase orders and invoices.</li>
                <br></br>

                <li>
                  Processed invoice payments and recorded information in account
                  database.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Repeat timeline blocks as needed */}
      </div>
      <p className=" lg:text-[1.5rem] lg:mb-20 mb-10 font-poppins text-center font-semibold leading-loose text-xl text-custom-pink brightness-125 tracking-[1px]">
        Education
      </p>

      <div className=" mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute lg:left-[360px] left-[38px] top-0 h-full w-[2px] bg-black/20"></div>

        {/* Timeline Item */}
        <div className="relative flex flex-col  mb-16">
          {/* Icon */}
          <div className="absolute lg:left-[338px] left-4  bg-black text-white w-12 h-12 rounded-full flex items-center justify-center z-10">
            <FaGraduationCap className="text-xl" />
          </div>

          {/* Header */}
          <div className=" mt-2 lg:pl-[450px] pl-[85px] ">
            <h3 className="text-xl font-semibold">Master Degree</h3>
            <p className="text-md mb-4 text-gray-500">Sep 2024 - present</p>
          </div>

          {/* Content */}
          <div className="lg:pl-[450px] pl-[85px]">
            <p className="text-lg font-semibold relative mb-4 after:content-[''] after:block after:h-[3px] after:w-[50px] after:bg-black/20 after:absolute after:bottom-0 after:left-0"></p>
            <p className="lg:ml-[50px] text-md text-[#313131] font-semibold font-poppins">
              SNMV College
            </p>
            <div className="lg:ml-[50px] text-[1rem] text-[#6e6e6e]">
              <ul>
                <li> M.Sc. in Computer Science</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Repeat timeline blocks as needed */}
        {/* Timeline Item */}
        <div className="relative flex flex-col  mb-16">
          {/* Icon */}
          <div className="absolute lg:left-[338px] left-4  bg-black text-white w-12 h-12 rounded-full flex items-center justify-center z-10">
            <FaGraduationCap className="text-xl" />
          </div>

          {/* Header */}
          <div className=" mt-2 lg:pl-[450px] pl-[85px] ">
            <h3 className="text-xl font-semibold">Bachelor Degree</h3>
            <p className="text-md mb-4 text-gray-500">Jun 2019 - Aug 2022</p>
          </div>

          {/* Content */}
          <div className="lg:pl-[450px] pl-[85px]">
            <p className="text-lg font-semibold relative mb-4 after:content-[''] after:block after:h-[3px] after:w-[50px] after:bg-black/20 after:absolute after:bottom-0 after:left-0"></p>
            <p className="lg:ml-[50px] text-md text-[#313131] font-semibold font-poppins">
              SKACAS College
            </p>
            <div className="lg:ml-[50px] text-[1rem] text-[#6e6e6e]">
              <ul>
                <li> B.Sc. in Computer Science</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Timeline Item */}
        <div className="relative flex flex-col  mb-16">
          {/* Icon */}
          <div className="absolute lg:left-[338px]  left-4  bg-black text-white w-12 h-12 rounded-full flex items-center justify-center z-10">
            <FaGraduationCap className="text-xl" />
          </div>

          {/* Header */}
          <div className=" mt-2 lg:pl-[450px] pl-[85px] ">
            <h3 className="text-xl font-semibold">Certifications</h3>
            <p className="text-md mb-4 text-gray-500">Aug 2022 - Dec 2022</p>
          </div>

          {/* Content */}
          <div className="lg:pl-[450px] pl-[85px]">
            <p className="text-lg font-semibold relative mb-4 after:content-[''] after:block after:h-[3px] after:w-[50px] after:bg-black/20 after:absolute after:bottom-0 after:left-0"></p>
            <p className="lg:ml-[50px] text-md text-[#313131] font-semibold font-poppins">
              Kodnest, Bangalore
            </p>
            <div className="lg:ml-[50px] text-[1rem] text-[#6e6e6e]">
              <ul>
                <li> Web Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
