import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io5";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section
        id="contact"
        className="w-full bg-[#151515] py-20 px-4 relative z-10"
      >
        <p className=" lg:mt-18 lg:text-[1rem] lg:mb-2 font-poppins text-center font-bold text-sm text-custom-pink brightness-125 tracking-[0.2rem]">
          CONTACT
        </p>
        <p className="lg:text-[2.2rem] lg:mb-[35px] text-center font-poppins font-semibold text-[1.7rem] text-white tracking-tight ">
          I'd Love To Hear From You.
        </p>
        <form action="#" method="post" className="lg:mx-auto max-w-[50rem]">
          <div className="mx-6 mt-16">
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              required
              placeholder="Name"
              className="placeholder-gray-500 placeholder:text-sm  text-white text-sm bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-custom-pink p-2 w-full"
            />
            <br />
            <br />

            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              placeholder="Email"
              className="placeholder-gray-500 placeholder:text-sm  text-white text-sm bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-custom-pink p-2 w-full"
            />
            <br />
            <br />

            <input
              type="text"
              id="subject"
              name="subject"
              autoComplete="off"
              required
              placeholder="Subject"
              className="placeholder-gray-500 placeholder:text-sm  text-white text-sm bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-custom-pink p-2 w-full"
            />
            <br />
            <br />

            <textarea
              id="message"
              name="message"
              rows="5"
              autoComplete="off"
              required
              placeholder="Message"
              className="placeholder-gray-500 placeholder:text-sm  text-white text-sm bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-custom-pink p-2 w-full"
            ></textarea>
            <br />

            <button
              type="submit"
              className="  mt-10 mb-10 font-extrabold  px-7 py-4 bg-[#FF0077] text-sm font-poppins font-medium text-white tracking-widest hover:text-black/50 w-full "
            >
              SUBMIT
            </button>
          </div>
        </form>
        <div className="lg:flex lg:flex-row lg:gap-24 lg:my-[20px] lg:justify-center">
          <div>
            <MdOutlineMail className="text-white mx-auto my-6 text-5xl" />
            <p className=" mb-2 font-poppins text-center font-bold text-sm text-custom-pink brightness-125 tracking-[0.1rem]">
              EMAIL ME AT
            </p>
            <p className=" font-poppins text-sm text-gray-400 text-center">
              naasifahamed008@gmail.com
            </p>
          </div>
          <div>
            <MdPhone className="text-white mx-auto my-6 text-5xl" />
            <p className=" mb-2 font-poppins text-center font-bold text-sm text-custom-pink brightness-125 tracking-[0.1rem]">
              CALL ME AT
            </p>
            <p className=" mb-20 font-poppins text-sm text-gray-400 text-center">
              Phone: (+91) 8489777490
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:gap-24">
          <div className="flex gap-5 items-center  justify-center  text-white text-2xl">
            <a
              href="https://www.instagram.com/_naasi.h?igsh=cmg1Y3h2bjVvMmcw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="hover:text-custom-pink hover:cursor-pointer" />
            </a>
            <a
              href="https://github.com/Naasif-M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="hover:text-custom-pink hover:cursor-pointer" />
            </a>
          </div>
          <footer>
            <div className="lg:flex lg:flex-row lg:items-center lg:space-x-4">
              <div className="lg:mb-0 mb-[-2rem]">
                <p className="lg:mt-0 mt-6 lg:text-[1rem] text-gray-400 text-sm text-center">
                  <span className="  mr-1"> ©</span>Copyright
                  <span className="lg:ml-3 ml-2">{year}</span>
                </p>
              </div>
              <div className="lg:w-px lg:h-4 lg:bg-gray-500"></div>
              <div>
                <p className="lg:mt-0 mt-8 text-gray-400 text-md text-center">
                  All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Contact;
