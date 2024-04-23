"use client";
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
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CLIENT_URL = "https://ymtaz.sa/api/client/";

function Hero() {
  // FETCH THE DATA CATEGORIES BY REACT QUERY AND AXIOS FUNCTION
  const getCategories = async () => {
    const res = await axios.get(CLIENT_URL + "digital-guide/categories");
    return res;
  };

  const { data } = useQuery({ queryKey: ["items"], queryFn: getCategories });
  const categories = data?.data.data.categories;

  return (
    <div className="mt-20">
      <h1 className="font-bold text-4xl text-center text-[#252525]">
        {data?.data.message}
      </h1>
      <Searchbar />
      <div className="flex flex-wrap gap-x-8 gap-y-10 mt-14 w-full justify-center items-center">
        {categories?.map((category: any) => (
          <Card
            key={category.id}
            title={category.title}
            description={` متوفر عدد  ${category.lawyers_count} `}
            destination={`users/${category.title}`}
          >
            <Image
              src={category.image}
              alt={category.title}
              width={150}
              height={150}
              className="rounded-full"
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Hero;
