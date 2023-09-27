"use client";
import { useState } from "react";
import { BsTextParagraph, BsXLg } from "react-icons/bs";
import Image from "next/image";
import getLinked from "../public/images/getlinked.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-[#150E28] text-white list-none border-b border-[#3d364d]">
      <nav className="flex flex-row justify-between items-center mx-auto w-10/12 pt-10 pb-5">
        <div>
          <Image src={getLinked} width={130} height={200} alt="" />
        </div>
        <div className="hidden md:flex flex-row justify-between items-center text-sm w-7/12">
          <div className="flex flex-row gap-x-12">
            <li>
              <a href="#">Timeline</a>
            </li>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>
          <div className="button px-7 py-2 rounded-sm">
            <li>
              <a href="#">Register</a>
            </li>
          </div>
        </div>
        <div className="flex flex-col md:hidden items-center">
          <button className="" onClick={toggleMobileNav}>
            {isOpen ? <BsXLg /> : <BsTextParagraph className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div className="md:hidden flex flex-col justify-center items-center gap-y-7 py-14 text-sm">
          <li>
            <a href="#">Timeline</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Navbar;
