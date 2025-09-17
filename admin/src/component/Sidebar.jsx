import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { FaListAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

function Sidebar() {
  return (
    <div className="w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0">
      <div className="flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]">
        <div className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]">
          <GrAddCircle className="w-[20px] h-[20px]" />
          <p className="hidden md:block">Add Items</p>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]">
          <FaListAlt className="w-[20px] h-[20px]" />
          <p className="hidden md:block">List Items</p>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3 border border-gray-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]">
          <SiTicktick className="w-[20px] h-[20px]" />
          <p className="hidden md:block">view Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
