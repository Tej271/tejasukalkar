import React from "react";
import logo from "../assets/logo.png";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around items-end bg-black py-4">
      <img src={logo} alt="rptech" className="w-[95px] h-[35px]" />
      <div className="flex flex-row justify-around">
        <div className="flex flex-row justify-between w-[600px] pb-2">
          <span className="text-white">what we do</span>
          <span className="text-white">who we are</span>
          <span className="text-white">career</span>
          <span className="text-white">contact</span>
        </div>
        <div className="pl-20 text-white">
          <BsSearch size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
