import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { FaCoins } from "react-icons/fa6";

export default function RegionalChampions() {
  return (
    <Card className="w-full mb-6">
      <CardHeader className="flex flex-row h-16 justify-between gap-3">
        {/* <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}
        <div className="flex flex-col bg-gradient-to-r from-indigo-100 from-10% via-sky-50 via-40% to-emerald-100 to-90% px-4 p-1 rounded-full">
          <p className="text-sm font-bold text-indigo-600 ">
            Regional Champions
          </p>
        </div>
        <div className=" flex flex-row gap-3 items-center bg-gradient-to-r from-indigo-100 from-10% via-sky-50 via-40% to-emerald-100 to-90% px-4 p-1 rounded-full ">
          <FaCoins className="text-indigo-500" />
          <p className="text-sm text-indigo-500 font-bold">Points</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex flex-row items-center justify-between mb-4">
          <User
            name="Jane Doe"
            description="Boda Rider"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <div className="flex flex-row gap-1 items-center">
            {/* <FaCoins className="text-emerald-700" /> */}
            <p className="font-bold text-emerald-600 px-3">244</p>
          </div>
        </div>
        <Divider />
        <div className="flex flex-row items-center justify-between mb-4 mt-4">
          <User
            name="Jane Doe"
            description="Mechanic"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <p className="font-bold text-emerald-600 px-3">220</p>
        </div>
        <Divider />
        <div className="flex flex-row items-center justify-between mb-4 mt-4">
          <User
            name="John Doe"
            description="Boda Owner"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <p className="font-bold text-emerald-600 px-3">180</p>
        </div>
      </CardBody>
    </Card>
  );
}
