import React from "react";

function Card({ title, description, children }: any) {
  return (
    <div className="card flex flex-col items-center justify-center gap-4 bg-[#fff] h-72 w-80 rounded-2xl shadow-xl+ duration-300">
      <div className="children rounded-full  bg-white px-12 py-12 shadow-md">
        {children}
      </div>
      <p className="title font-semibold text-xl text-[#292019]">{title}</p>
      <p className="description font-medium text-sm text-[#6F6863]">
        {description}
      </p>
    </div>
  );
}

export default Card;
