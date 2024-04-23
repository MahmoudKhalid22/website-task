"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";

const CLIENT_URL = "https://ymtaz.sa/api/client/";

function Lawyer({ params }: { params: { lawyer: string } }) {
  const [active, setActive] = useState(1);

  const getLawyer = async () => {
    const headers = {
      Authorization:
        "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4",
      "Content-Type": "application/json",
    };

    const res = await axios.get(CLIENT_URL + "lawyer/" + "5218", { headers });

    return res;
  };

  const { data } = useQuery({ queryKey: ["lawyer"], queryFn: getLawyer });
  console.log(data);

  const lawyer = data?.data.data.lawyer;
  console.log(lawyer);

  return (
    <div className="flex gap-8">
      {/* 01 */}
      <div className="w-[60%] flex flex-col">
        <div className=" bg-white rounded-lg shadow-lg py-8 mt-8">
          <div>
            <div>
              <h2 className="text-[#2C4768] text-2xl py-7 mr-14 font-bold">
                المعلومات الشخصية
              </h2>
            </div>
            <div className="flex items-center mx-8 gap-6">
              <div>
                <Image
                  src={lawyer?.photo}
                  alt={lawyer?.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />{" "}
              </div>
              <div className="flex flex-col gap-4 justify-center mt-4">
                <h2 className="text-xl text-[#2C4768]">{lawyer?.name}</h2>
                <p className="text-base text-[#A3A4A5]">{lawyer?.about} 👑</p>
                <div>
                  <p></p>
                  <button></button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {/* 02 */}
        <div className="bg-white rounded-lg shadow-lg py-8 mt-8">
          <h3 className="text-[#2C4768] text-2xl py-7 mr-14 font-bold">
            النبذة التعريفية
          </h3>
          <p className="text-[#A3A4A5] text-base mr-14">{lawyer?.about}</p>
        </div>
        {/* 03 */}
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="w-[40%] px-4 bg-white rounded-lg shadow-lg py-8 mt-8">
        <h2 className="text-2xl font-semibold text-[#2C4768] px-8">
          معلومات الحجز
        </h2>
        <div className="mb-8 flex justify-center items-center gap-6 mt-8">
          <button
            className={
              active === 1
                ? "text-[#2B4868]  border-b-2 border-[#2B4868] text-lg"
                : "text-[#A3A4A5] text-lg"
            }
            onClick={() => setActive(1)}
          >
            أسعار الخدمات
          </button>
          <button
            className={
              active === 2
                ? "text-[#2B4868] border-b-2 border-[#2B4868] text-lg"
                : "text-[#A3A4A5] text-lg"
            }
            onClick={() => setActive(2)}
          >
            أوقات العمل
          </button>
        </div>
        {active === 1 && (
          <div className="flex flex-col gap-4">
            <div className="bg-[#F9F9F9] px-2 py-4">
              <div className="flex items-center justify-between px-4">
                <div>
                  <div className="flex items-center gap-4 justify-between mb-6">
                    <LuPhoneCall className="text-[#DDB762]" />
                    <p className="text-[#2C4768] font-bold text-sm">
                      خدمة الاستشارة الهاتفية
                    </p>
                  </div>
                  <div className="text-[#B0B0B0] text-sm w-[10rem]">
                    ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة
                  </div>
                </div>
                <div>
                  <p className="text-[#2C4768] text-base text-semibold">
                    سعر الخدمة
                  </p>
                  <p className="text-3xl text-[#3FD06F] mt-4">300 ر.س</p>
                </div>
              </div>
              <button className="bg-[#DDB762] rounded-lg text-white mt-6 w-full py-3 font-semibold text-base">
                طلب الخدمة
              </button>
            </div>
            <div className="bg-[#F9F9F9] px-2 py-4">
              <div className="flex items-center justify-between px-4">
                <div>
                  <div className="flex items-center gap-4 justify-between mb-6">
                    <LuPhoneCall className="text-[#DDB762]" />
                    <p className="text-[#2C4768] font-bold text-sm">
                      خدمة الاستشارة الهاتفية
                    </p>
                  </div>
                  <div className="text-[#B0B0B0] text-sm w-[10rem]">
                    ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة
                  </div>
                </div>
                <div>
                  <p className="text-[#2C4768] text-base text-semibold">
                    سعر الخدمة
                  </p>
                  <p className="text-3xl text-[#3FD06F] mt-4">300 ر.س</p>
                </div>
              </div>
              <button className="bg-[#DDB762] rounded-lg text-white mt-6 w-full py-3 font-semibold text-base">
                طلب الخدمة
              </button>
            </div>
            <div className="bg-[#F9F9F9] px-2 py-4">
              <div className="flex items-center justify-between px-4">
                <div>
                  <div className="flex items-center gap-4 justify-between mb-6">
                    <LuPhoneCall className="text-[#DDB762]" />
                    <p className="text-[#2C4768] font-bold text-sm">
                      خدمة الاستشارة الهاتفية
                    </p>
                  </div>
                  <div className="text-[#B0B0B0] text-sm w-[10rem]">
                    ونقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة
                  </div>
                </div>
                <div>
                  <p className="text-[#2C4768] text-base text-semibold">
                    سعر الخدمة
                  </p>
                  <p className="text-3xl text-[#3FD06F] mt-4">300 ر.س</p>
                </div>
              </div>
              <button className="bg-[#DDB762] rounded-lg text-white mt-6 w-full py-3 font-semibold text-base">
                طلب الخدمة
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lawyer;
