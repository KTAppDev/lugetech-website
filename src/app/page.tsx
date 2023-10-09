import React from "react";
import BadgesPanel from "./components/BadgesPanel";
import { DeveloperInfo } from "./components/DeveloperInfo";
import ProjectsPanel from "./components/ProjectsPanel";

const page = () => {
  return (
    <main className=" h-full w-full flex flex-col">
      <div
        id="logo"
        className="flex flex-row items-center justify-around font-bold text-xl"
      >
        <p> LugeTech</p>
      </div>
      <div id="profiles" className=" flex flex-col md:flex-row h-full w-full ">
        <div id="profile" className="flex flex-row h-1/2 w-full gap-4 ">
          <div id="profile-info" className=" flex flex-col w-full gap-4 justify-between ">
            <DeveloperInfo name='ktappdev'/>
          </div>
          <div id="badges" className=" flex flex-col w-1/6 border-2 border-green-700">
            <BadgesPanel />
          </div>
        </div>
        <div id="profile" className="flex flex-row h-1/2 w-full gap-4 ">
          <div id="profile-info" className=" flex flex-col w-full gap-4 justify-between ">
            <DeveloperInfo name='clinteastman01'/>
          </div>
          <div id="badges" className=" flex flex-col w-1/6 border-2 border-green-700">
            <BadgesPanel />
          </div>
        </div>
      </div>
      <div id="projects"className=" h-1/2">
        <ProjectsPanel/>
      </div>
    </main>
  );
};

export default page;
