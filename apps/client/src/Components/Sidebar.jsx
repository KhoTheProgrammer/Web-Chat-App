import React from "react";
import { CiHome } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between w-[5%] shadow-[10px_0_15px_-5px_rgba(0,0,0,0.1)] items-center pt-4">
      {/* Top icons */}
      <div className="flex flex-col space-y-4 ">
        <CiHome size={24} color="black" />
        <FaRegMessage size={24} color="#615ef0" />
        <CiSearch size={24} color="black" />
      </div>
      {/* Bottom icon */}
      <div className="flex items-center justify-center">
        <CiSettings size={24} color="black" />
      </div>
    </div>
  );
};

export default Sidebar;
