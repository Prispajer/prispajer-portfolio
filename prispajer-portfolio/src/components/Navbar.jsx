import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { ImMail } from "react-icons/im";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center pt-10 pb-10 w-80 gap-10 fixed bg-black min-h-screen justify-between">
      <div className="flex flex-col items-center justify-center">
        <img
          id="navbar__logo"
          className="min-w-14 max-w-36 rounded-full "
          src="../../public/images/avatar.png"
          alt="It's meee"
        ></img>
        <div className="text-white pt-4 text-3xl flex flex-col items-center">
          <span className="font-bold pt-4">Adrian</span>
          <span className="font-bold">Kozieł</span>
        </div>
      </div>
      <ul className="flex flex-col space-y-6 items-center justify-center">
        <li className="text-2xl text-white cursor-pointer">Home</li>
        <li className="text-2xl text-white cursor-pointer">About</li>
        <li className="text-2xl text-white cursor-pointer">Portfolio</li>
        <li className="text-2xl text-white cursor-pointer">Contact </li>
      </ul>
      <div className="flex flex-row gap-3 items-center">
        <a href="https://www.facebook.com/adikoxi/?locale=pl_PL">
          <FaFacebookSquare
            className="cursor-pointer"
            size={50}
            color="gray"
          ></FaFacebookSquare>
        </a>
        <FaInstagramSquare
          className="cursor-pointer"
          size={50}
          color="gray"
        ></FaInstagramSquare>
        <FaLinkedin
          className="cursor-pointer"
          size={50}
          color="gray"
        ></FaLinkedin>
        <ImMail className="cursor-pointer" size={46} color="gray"></ImMail>
      </div>
      <button
        id="navbar__button"
        className="text-white font-bold text-3xl p-4 cursor-pointer rounded-md text-center"
      >
        Contact me
      </button>
    </nav>
  );
}
