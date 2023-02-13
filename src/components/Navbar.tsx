import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // const [shadow, setShadow] = useState(false);
  // const [position, setPosition] = useState('fixed')

  const handleNav = () => {
    setNav(!nav);
    console.log("Nav is clicked");
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300  bg-neutral-700">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="/"
            width="50"
            height="20"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul className="hidden md:flex text-amber-500">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <button onClick={handleNav} className="md:hidden text-amber-500">
            <AiOutlineMenu size={25} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-gray-800  text-amber-500"
            : " "
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-[-5%] top-0 w-[60%] sm:w-[60%] md:w-[45%] h-screen bg-gray-800 px-10 py-4 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="text-xl  text-amber-500">
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src="/assets/logo.png" width="87" height="35" alt="/" />
              </Link>
              <button
                onClick={handleNav}
                className="rounded-full shadow shadow-amber-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something great together!
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-4">
              <p className="uppercase tracking-widest">Let&#39;s Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/suraj-jena-964b2a61/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/suraj048"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
