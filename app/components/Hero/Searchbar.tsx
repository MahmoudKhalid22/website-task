import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Image from "next/image";

function Searchbar() {
  return (
    <div className="flex items-center justify-center  w-full mt-12   h-16 ">
      <div className="w-1/2 border bg-[#fff] border-[#DADADA] flex items-center justify-center h-full px-6  rounded-md">
        <RiSearchLine className="text-3xl text-[#B0B0B0]" />
        <form className="w-full h-full flex flex-col items-center justify-center">
          <input
            type="text"
            className="w-full  px-4 py-2 outline-none border-none"
          />
        </form>
        <HiAdjustmentsHorizontal className="text-3xl text-[#B0B0B0]" />
      </div>
    </div>
  );
}

export default Searchbar;
