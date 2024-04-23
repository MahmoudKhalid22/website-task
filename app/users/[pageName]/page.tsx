"use client";
import React from "react";
import Avatar from "../../public/avatar.jpeg";
import Image from "next/image";
import Searchbar from "../../components/Hero/Searchbar";
import Card from "../../components/Hero/Card";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const CLIENT_URL = "https://ymtaz.sa/api/client/";

function Users({ params }: { params: { pageName: string } }) {
  const resultSearch = decodeURIComponent(params.pageName);

  const getLawyers = async () => {
    const headers = {
      // Add your custom headers here
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4",
      "Content-Type": "application/json",
    };
    const res = await axios.post(
      CLIENT_URL + "digital-guide/search",
      {},
      { headers }
    );

    return res;
  };
  getLawyers();

  const { data } = useQuery({ queryKey: ["lawyers"], queryFn: getLawyers });

  const lawyers = data?.data.data.lawyers;
  console.log(lawyers);

  return (
    <div className="mt-20">
      <h1 className="font-bold text-4xl text-center text-[#252525]">
        {data?.data.message}
      </h1>
      <Searchbar />
      <div className="flex flex-wrap gap-x-8 gap-y-10 mt-14 w-full justify-center items-center">
        {lawyers?.map((lawyer: any) => (
          <Card
            key={lawyer.id}
            title={lawyer.name}
            description={lawyer.about}
            destination={`users/lawyer/${lawyer.id}`}
          >
            <Image
              src={lawyer.photo}
              alt={lawyer.name}
              width={150}
              height={150}
              className="rounded-full"
            />
          </Card>
        ))}
        {/* <Card title={"عبدالعزيز عبدالرحمن الربعي"} description={"متوفر عدد 17"}>
          <Image
            objectFit="cover"
            className="rounded-full h-32 w-32 object-cover"
            src={Avatar}
            alt="lawyer"
          />
        </Card>
        <Card
          rates={"4.56 (35 مراجعة) ⭐"}
          title={"عبد العزيز عبد الرحمن الربعي"}
          description={"مستشار قانوني 👑"}
        >
          <Image
            src={Avatar}
            alt="lawyer"
            className="rounded-full h-32 w-32 object-cover"
          />
        </Card>
        <Card
          rates={"4.56 (35 مراجعة) ⭐"}
          title={"عبد  العزيز عبد الرحمن الربعي"}
          description={"مستشار قانوني 👑"}
        >
          <Image
            objectFit="cover"
            src={Avatar}
            alt="lawyer"
            className="rounded-full h-32 w-32 object-cover"
          />
        </Card>
        <Card
          rates={"4.56 (35 مراجعة) ⭐"}
          title={"عبد العزيز عبد الرحمن الربعي"}
          description={"مستشار قانوني 👑"}
        >
          <Image
            objectFit="cover"
            src={Avatar}
            alt="lawyer"
            className="rounded-full h-32 w-32 object-cover"
          />
        </Card>
        <Card
          rates={"4.56 (35 مراجعة) ⭐"}
          title={"عبد العزيز عبد الرحمن الربعي"}
          description={"مستشار قانوني 👑"}
        >
          <Image
            src={Avatar}
            alt="lawyer"
            className="rounded-full h-32 w-32 object-cover"
          />
        </Card>
        <Card
          rates={"4.56 (35 مراجعة) ⭐"}
          title={"عبد العزيز عبد الرحمن الربعي"}
          description={"مستشار قانوني 👑"}
        >
          <Image
            objectFit="cover"
            src={Avatar}
            alt="lawyer"
            className="rounded-full h-32 w-32 object-cover"
          />
        </Card> */}
      </div>
    </div>
  );
}

export default Users;
