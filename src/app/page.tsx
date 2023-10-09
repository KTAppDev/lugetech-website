import React from "react";
import Image from "next/image";
import BadgesPanel from "./components/BadgesPanel";
import { DeveloperInfo } from "./components/DeveloperInfo";

const page = () => {
  return (
    <main className=" h-full w-full flex flex-col">
      <div
        id="logo"
        className="flex flex-row items-center justify-around font-bold text-xl"
      >
        <p> LugeTech</p>
      </div>
      <div id="profiles" className=" flex flex-col h-full w-full ">
        <div id="profile" className="flex flex-row h-1/2 w-full gap-4 ">
          <div id="profile-info" className=" flex flex-col w-full gap-4 justify-between ">
            <DeveloperInfo />
          </div>
          <div id="badges" className=" flex flex-col w-1/6 border-2 border-green-700">
            <BadgesPanel />
          </div>
        </div>
        <div className=" h-1/2">Projects</div>
      </div>
    </main>
  );
};

export default page;
