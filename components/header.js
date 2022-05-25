import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Header = ({ setOpenNavigation, isIconOpen, setIconOpen }) => {
  return (
    <div>
      {/* //Menu Button */}
      <div
        className="text-white opacity-80 fixed top-[6px] left-[15px] right-auto z-50"
        onClick={() => {
          setOpenNavigation((prevValue) => !prevValue);
        }}
      >
        <Hamburger size={25} toggled={isIconOpen} toggle={setIconOpen} />
      </div>

      {/* Logo */}
      <div className="fixed top-[15px] left-1/2 -translate-x-1/2 z-40">
        <img src="/image.webp" className="h-[70px] align-center opacity-90" />
      </div>
    </div>
  );
};

export default Header;
