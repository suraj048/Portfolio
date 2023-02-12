import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center sm:text-2xl  text-amber-500 bg-neutral-800"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest">
            LET&#39;S BUILD SOMETHING AWESOME!
          </p>
          <h1 className="py-4 text-gray-400">
            Hi, I&#39;m{"  "}
            <span className="text-[#ffffff] font-semibold"> Suraj </span>
          </h1>
          <h1 className="py-2 text-gray-400">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-400 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications &
            currently learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/suraj-jena-964b2a61/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/suraj048"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
