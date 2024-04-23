import React from "react";
import Searchbar from "./Searchbar";
import Card from "./Card";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaUserAlt, FaCheck } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import law from "../../../public/law.svg";
import Image from "next/image";

function Hero() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-4xl text-center text-[#252525]">
        الدليل الرقمي
      </h1>
      <Searchbar />
      <div className="flex flex-wrap gap-x-8 gap-y-10 mt-14 w-full justify-center items-center">
        <Card title={"موثق"} description={"متوفر عدد 17"}>
          <BiSolidEditAlt className="icon text-5xl text-[#DDB762]" />
        </Card>
        <Card
          icon={"something"}
          title={"محامي مرخص"}
          description={"متوفر عدد 17"}
        >
          {<FaUserAlt className="icon text-5xl text-[#DDB762]" />}
        </Card>
        <Card icon={"something"} title={"محكم"} description={"متوفر عدد 17"}>
          <SiGoogledocs className="icon text-5xl text-[#DDB762]" />
        </Card>
        <Card
          icon={"something"}
          title={"باحث قانوني"}
          description={"متوفر عدد 17"}
        >
          <Image src={law} alt="icon" className="iconImage" />
        </Card>
        <Card
          icon={"something"}
          title={"ناظر وقف"}
          description={"متوفر عدد 17"}
        >
          <MdModeEdit className="icon text-5xl text-[#DDB762]" />
        </Card>
        <Card
          icon={"something"}
          title={"مأذون أنكحة"}
          description={"متوفر عدد 17"}
        >
          <FaBookOpen className="icon text-5xl text-[#DDB762]" />{" "}
        </Card>
      </div>
    </div>
  );
}

export default Hero;
