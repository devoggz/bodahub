"use client";

import Login from "@/components/auth/login";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Image, Link } from "@nextui-org/react";
import { LoginButton } from "@/components/auth/login-button";

export default function App() {
  return (
    <div className="container flex h-screen flex-col gap-4 items-center justify-center align-middle p-4 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%  ">
      <Image src="/images/welcome.png" alt="welcome" height={240} />
      <div className="flex flex-col p-6 items-center justify-center mt-4  mb-6">
        <h2
          className="text-6xl font-bold p-4 text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text"
        >
          BodaHub
        </h2>
        <p className="text-slate-500 text-wrap font-bold text-sm w-[220px] text-center">
          Connecting riders all over Kenya.{" "}
          <span className="text-sm font-semibold text-emerald-500 mb-4">
            Join us for great news and deals
          </span>
        </p>
      </div>
      <LoginButton>
        <Button size="xl">Get Started</Button>
      </LoginButton>
    </div>
  );
}
