"use client";

import { Chip, Image, Link } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

import { DotFilledIcon, GearIcon } from "@radix-ui/react-icons";
import { BsShieldCheck } from "react-icons/bs";
import {
  FormOutlined,
  LockOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import RegionalChampions from "@/components/RegionalChampions";

import { logout } from "../../../../actions/auth";
import { useCurrentUser } from "@/hooks/use-current-user";
import StageMap from "@/components/StageMap";

const Profile = () => {
  const user = useCurrentUser();

  return (
    <div className="container-fluid mx-auto p-3  mb-12 bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className=" flex flex-col mt-6 items-center justify-center min-h-72 mb-6 rounded-xl ">
        <div className="border-2 border-emerald-500 p-1 rounded-full h-22 w-22">
          <Image
            src={user?.image || "/images/avatar.png"}
            alt="avatar"
            height={100}
            width={100}
            className="rounded-full object-cover"
          />
        </div>
        <p className="mt-4 text-xl text-slate-900 font-bold ">{user?.name}</p>
        {/* <p className="text-sm text-slate-500 mb-4">{session?.user?.riderType}</p> */}
        <Chip
          startContent={<DotFilledIcon className="text-emerald-500 h-8 w-8" />}
          className="bg-emerald-100 font-semibold text-emerald-700 mb-4"
        >
          Active
        </Chip>

        <div className="w-full grid grid-cols-2 gap-6  mb-3">
          <div className="bg-white shadow-sm border border-emerald-100  flex flex-row p-4 rounded-xl gap-4 items-center justify-center">
            <Image src="/images/trophy.png" alt="icon" width={50} height={50} />
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-semibold ">Points</p>
              <p
                className="text-xl font-bold text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-orange-300 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text"
              >
                5{/* {user?.points} */}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-sm flex flex-row border border-emerald-100 p-4 rounded-xl gap-4 items-center justify-center">
            <Image src="/images/medal.png" alt="icon" width={50} height={50} />
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-semibold ">Level</p>
              <p
                className="text-lg font-bold text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-sky-300 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text"
              >
                Novice
                {/* {user?.level} */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <Link
          className="bg-[#006fee] flex flex-wrap p-2 text-center justify-center text-white text-sm rounded-lg"
          href="https://whatsapp.com/channel/0029VaphVzyKLaHuuL3S8k1J"
        >
          Join Our WhatsApp
        </Link>

        <Link
          className="bg-[#006fee] flex flex-wrap p-2 text-center justify-center text-white text-sm rounded-lg"
          href="#"
        >
          Refer a friend
        </Link>
      </div>
      <div className="w-full">
        <RegionalChampions />
      </div>
      {/* <div className="w-full flex flex-row gap-2 items-center justify-between bg-white shadow-sm mb-4 rounded-lg border p-3">
        <div className="flex flex-row gap-4">
          <div className="bg-emerald-200/70 h-12 w-12 rounded-lg flex items-center justify-center">
            <GearIcon color="green" className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-md font-semibold">Profile Settings</h4>
            <p className="text-sm text-gray-600">Update your profile.</p>
          </div>
        </div>
        <FormOutlined className="h-6 w-6" color="gray" />
      </div>
      <div className="w-full flex flex-row gap-2 items-center justify-between bg-white mb-4 shadow-sm rounded-lg border p-3">
        <div className="flex flex-row gap-4">
          <div className="bg-emerald-200/70 h-12 w-12 rounded-lg flex items-center justify-center">
            <BsShieldCheck color="green" className="h-6 w-6" />
          </div>
          <div>
            <p className="text-md font-semibold">Privacy & Security</p>
            <p className="text-sm text-gray-600">Update password.</p>
          </div>
        </div>
        <LockOutlined className="h-6 w-6" color="gray" />
      </div> */}

      <StageMap />

      <Button
        className="w-full mt-8 mb-8"
        variant="destructive"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
