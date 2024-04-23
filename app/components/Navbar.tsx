import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Image
          src={logo}
          alt="logo"
          width={138}
          height={67}
          objectFit="cover"
        />
      </div>

      <ul className="flex items-center justify-center gap-6">
        <li className="text-[#2C4768] text-sm font-semibold px-2 py-4">
          <Link href={"#home"}>الرئيسية</Link>
        </li>
        <li className="text-[#2C4768] text-sm font-semibold px-2 py-4">
          <Link href={"#about"}>من نحن</Link>
        </li>
        <li className="text-[#2C4768] text-sm font-semibold px-2 py-4">
          <Link href={"#contact"}>اتصل بنا</Link>
        </li>
        <li className="text-[#2C4768] text-sm font-semibold px-2 py-4">
          <Link href={"#support"}>الدعم الفني</Link>
        </li>
        <li className="text-[#2C4768] text-sm font-semibold px-2 py-4">
          <Link href={"#numbers"}>أرقام التشغيل</Link>
        </li>
        <li className="text-[#2C4768] text-sm font-semibold px-2 py-4">
          <Link href={"#policy"}>سياسة الخصوصية</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-3 cursor-pointer">
        <span className="h-[3px] w-10 bg-[#2D4768]"></span>
        <span className="h-[3px] w-10 bg-[#2D4768]"></span>
        <span className="h-[3px] w-10 bg-[#2D4768]"></span>
      </div>
    </div>
  );
}

export default Navbar;
