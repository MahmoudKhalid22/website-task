import Link from "next/link";
import React from "react";

function Card({
  title,
  description,
  rates,
  destination,
  children,
}: {
  title: string;
  description: string;
  rates?: string;
  destination?: string;
  children: any;
}) {
  return (
    <Link
      href={destination ? `/${destination}` : ""}
      className="card flex flex-col items-center justify-center gap-4 bg-[#fff] h-72 w-80 rounded-2xl shadow-xl duration-300"
    >
      <div className="children rounded-full  bg-white  shadow-md">
        {children}
      </div>
      <p className="title font-semibold text-xl text-[#292019]">{title}</p>
      <p className="description font-medium text-sm text-[#6F6863] text-center">
        {description}
      </p>
      {rates && <p className="text-center">{rates}</p>}
    </Link>
  );
}

export default Card;
