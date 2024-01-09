import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburger({ toggleView }) {
  return (
    <>
      <GiHamburgerMenu
        onClick={toggleView}
        className="absolute right-0 pr-4 cursor-pointer"
        color="white"
        size={50}
      />
    </>
  );
}
